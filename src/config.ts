import { Character } from "./Character";

export const config = {
  characters: [
    {
      name: "Max",
      systemMessage: "XYZ",
      demoResponse: "Max antwortet",
    },
    {
      name: "Hans",
      systemMessage: "XYZ",
      demoResponse: "Hans antwortet",
    },
  ] as Character[],
};

export default config;
