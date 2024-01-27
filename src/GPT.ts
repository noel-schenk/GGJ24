import { ChatGPTAPI } from "chatgpt";
import useGlobalState from "./GlobalState";
import { Character, View } from "./types";
import config from "./config";

export const sendMessage = async (message: string) => {
  useGlobalState.set("show", [View.MAIN]);

  // const api = new ChatGPTAPI({
  //   apiKey: useGlobalState.get("gptKey"),
  //   systemMessage: generateSystemMessage(useGlobalState.get("activeCharacter")),
  //   fetch: self.fetch.bind(self),
  //   completionParams: {
  //     model: "gpt-3.5-turbo",
  //   },
  // });

  // const res = await api.sendMessage(message);
  const res = {
    text: await freeGPT(
      message,
      generateSystemMessage(useGlobalState.get("activeCharacter"))
    ),
  };

  console.log(res, "res");

  useGlobalState.get("activeCharacter").lastMessage = res.text;
  useGlobalState.get("activeCharacter").interactionCount++;
  useGlobalState.get("activeCharacter").response = {
    text: getText(res.text),
    emotion: getEmotion(res.text),
    final: isInteractionFinal(res.text),
  };

  useGlobalState.set(
    "newCharacterResponse",
    useGlobalState.get("newCharacterResponse") + 1
  );
};

const freeGPT = (message: string, systemMessage: string) => {
  return new Promise<string>((resolve, reject) => {
    const baseUrl = "http://localhost:4444/ask";
    const url = new URL(baseUrl);

    url.searchParams.append("message", `${systemMessage} ${message}`);

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then((message) => {
        console.log("message");
        resolve(message);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        reject();
      });
  });
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
