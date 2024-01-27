import { ChatGPTAPI } from "chatgpt";
import useGlobalState, { getActiveCharacter } from "./GlobalState";
import { Character, View } from "./types";
import config from "./config";

export const sendMessage = async (message: string) => {
  useGlobalState.set("show", [View.MAIN]);

  const api = new ChatGPTAPI({
    apiKey: useGlobalState.get("gptKey"),
    systemMessage: generateSystemMessage(getActiveCharacter()),
    fetch: self.fetch.bind(self),
    completionParams: {
      model: "gpt-3.5-turbo",
    },
  });

  const res = await api.sendMessage(message);

  console.log(res, "res");

  console.log(isLaughing(res.text), "isLaughing(message)");

  isLaughing(res.text) &&
    useGlobalState.set("score", useGlobalState.get("score") + 1);

  getActiveCharacter().lastMessage = res.text;
  getActiveCharacter().interactionCount++;
  getActiveCharacter().response = {
    text: getText(res.text),
    emotion: getEmotion(res.text),
    final: isInteractionFinal(res.text),
    laugh: isLaughing(res.text),
  };

  useGlobalState.set(
    "activeCharacter--response",
    useGlobalState.get("activeCharacter--response") + 1
  );
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

const isLaughing = (message: string) => {
  if (message.includes("[LAUGH]")) return true;
  return false;
};

const getEmotion = (message: string): number => {
  if (!message.includes("[EMOTION:")) return getLastEmotion();

  const emotion = [...message.matchAll(/\[EMOTION:(.*)?]/g)]?.[0]?.[1];

  console.log("getEmotion", message.matchAll(/\[EMOTION:(.*)?]/g), emotion);

  return parseInt(emotion);
};

const getLastEmotion = () => {
  return getActiveCharacter().response.emotion;
};
