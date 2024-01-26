import env from "./env";
import { Character, View } from "./types";

export const config = {
  initialView: View.MAIN,
  gptKey: env.GPT_KEY,
  basisSystemMessage: `
    Du bist eine Spielfigur, wie sie unten beschrieben ist.
    Du wirst nur mit dem antworten, was dieser Charakter antworten würde.
    Die einzige Ausnahme ist, wenn das Gespräch beendet werden soll, weil ein normaler Charakter das Gespräch an dieser Stelle beenden würde. In diesem Fall füge irgendwo in der Antwort ein [END] ein.
    Füge auch immer ein [EMOTION:0] bis [EMOTION:10] Tag hinzu, um anzugeben, wie glücklich sich der Charakter gerade fühlt. Aber immer max. 1 EMOTION Tag pro Antwort. 0 ist todes traurig und 10 ist super glücklich.
  `,
  movementSpeed: 1,
  characters: [
    {
      name: "Max",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: 0,
        text: "TEST",
      },
    },
    {
      name: "Hans",
      systemMessage: "XYZ",
      demoResponse: {
        emotion: 0,
        text: "TEST",
      },
    },
  ] as Character[],
};

export default config;
