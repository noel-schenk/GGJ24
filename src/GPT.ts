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
      model: useGlobalState.get('gptModel'),
    },
  });

  const res = await api.sendMessage(message);

  isLaughing(res.text) &&
    useGlobalState.set("score", useGlobalState.get("score") + 1);

  const newState = {
    text: getText(res.text),
    emotion: getEmotion(res.text),
    final: isInteractionFinal(res.text),
    laugh: isLaughing(res.text),
  };
  console.table([newState, getActiveCharacter().response])

  getActiveCharacter().lastMessage = res.text;
  getActiveCharacter().interactionCount++;
  getActiveCharacter().response = newState;

  useGlobalState.set(
    "activeCharacter--response",
    useGlobalState.get("activeCharacter--response") + 1
  );
};

const generateSystemMessage = (character: Character) => {
  return (
    config.basisSystemMessage +
    `Du hast zuletzt gesagt: ${character.lastMessage} | Du hast bereits ${character.interactionCount} mal mit dem Spieler gesprochen. | Du hast aktuell EMOTION:${character.response!.emotion}, passe das an, wenn du glücklicher oder trauriger wirst. | WICHTIG: Du bist: ${character.systemMessage}`
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
  let emotion = [...message.matchAll(/\[EMOTION:(.*)?]/g)]?.[0]?.[1];
  if (emotion === undefined) {
    emotion = [...message.matchAll(/\EMOTION:(.*)?]/g)]?.[0]?.[1];
  }
  if (emotion === undefined) {
    return getLastEmotion();
  }
  return parseInt(emotion);
};

const getLastEmotion = () => {
  return getActiveCharacter().response!.emotion;
};
