import env from "./env";
import { Character, Emotion, View } from "./types";

console.log(env.GPT_KEY, "import.meta.env.GPT_KEY");

export const config = {
  initialView: View.MENU,
  gptKey: env.GPT_KEY,
  characters: [
    {
      name: "Max",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: Emotion.HAPPY,
        text: "TEST",
      },
    },
    {
      name: "Hans",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: Emotion.HAPPY,
        text: "TEST",
      },
    },
  ] as Character[],
};

export default config;
