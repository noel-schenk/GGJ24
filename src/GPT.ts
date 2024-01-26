import { ChatGPTAPI } from "chatgpt";
import useGlobalState from "./GlobalState";
import { Emotion } from "./types";

export const sendMessage = async (message: string) => {
  const api = new ChatGPTAPI({
    apiKey: useGlobalState.get("gptKey"),
    systemMessage: useGlobalState.get("activeCharacter").systemMessage,
  });

  const res = await api.sendMessage(message);

  useGlobalState.set("characterResponse", {
    text: getText(message),
    emotion: getEmotion(message),
    final: isInteractionFinal(message),
  });

  return res;
};

const getText = (message: string): string => {
  return message.replaceAll(/\[.*?]/, "");
};

const isInteractionFinal = (message: string): boolean => {
  if (message.includes("[END]")) {
    return true;
  } else {
    return false;
  }
};

const getEmotion = (message: string): Emotion => {
  const emotion = [...message.matchAll(/\[EMOTION:(.*)?]/)][0][1];

  console.log("getEmotion", message.matchAll(/\[EMOTION:(.*)?]/), emotion);

  if (Object.values(Emotion).includes(emotion)) {
    return emotion as any as Emotion;
  }

  return Emotion.SAD;
};
