import { Character, Emotion } from "./types";

export const config = {
  characters: [
    {
      name: "Max",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: Emotion.HAPPY,
        text: 'TEST'
      },
    },
    {
      name: "Hans",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: Emotion.HAPPY,
        text: 'TEST'
      },
    },
  ] as Character[],
};

export default config;
