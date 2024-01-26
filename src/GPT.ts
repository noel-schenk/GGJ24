import { ChatGPTAPI } from "chatgpt";
import useGlobalState from "./GlobalState";
import { Character } from "./types";
import config from "./config";

export const sendMessage = async (message: string) => {
  const api = new ChatGPTAPI({
    apiKey: useGlobalState.get("gptKey"),
    systemMessage: generateSystemMessage(useGlobalState.get("activeCharacter")),
    fetch: self.fetch.bind(self),
    completionParams: {
      model: "gpt-4",
    },
  });

  const res = await api.sendMessage(message);

  console.log(res, "res");

  useGlobalState.get("activeCharacter").lastMessage = res.text;
  useGlobalState.get("activeCharacter").interactionCount++;
  useGlobalState.get("activeCharacter").response = {
    text: getText(res.text),
    emotion: getEmotion(res.text),
    final: isInteractionFinal(res.text),
  };
};

const generateSystemMessage = (character: Character) => {
  return (
    config.basisSystemMessage +
    `Du hast zuletzt gesagt: ${character.lastMessage} Du hast bereits ${character.interactionCount} mal mit dem Spieler gesprochen. Du hast aktuell EMOTION:${character.response.emotion}, passe das an, wenn du glücklicher oder trauriger wirst. Du bist: ${character.systemMessage}`
  );
};

const getText = (message: string): string => {
  return message.replaceAll(/\[.*?]/g, "");
};

const isInteractionFinal = (message: string): boolean => {
  if (message.includes("[END]")) {
    return true;
  } else {
    return false;
  }
};

const getEmotion = (message: string): number => {
  if (!message.includes("[EMOTION:")) return getLastEmotion();

  const emotion = [...message.matchAll(/\[EMOTION:(.*)?]/g)]?.[0]?.[1];

  console.log("getEmotion", message.matchAll(/\[EMOTION:(.*)?]/g), emotion);

  return parseInt(emotion);
};

const getLastEmotion = () => {
  return useGlobalState.get("activeCharacter").response.emotion;
};
