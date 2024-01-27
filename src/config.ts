import env from "./env";
import { Character, View } from "./types";

export const config = {
  initialView: View.MENU,
  gptKey: env.GPT_KEY,
  basisSystemMessage: `
    Du bist eine Spielfigur, wie sie unten beschrieben ist.
    Du wirst nur mit dem antworten, was dieser Charakter antworten würde.
    Die einzige Ausnahme ist, wenn das Gespräch beendet werden soll, weil ein normaler Charakter das Gespräch an dieser Stelle beenden würde. In diesem Fall füge irgendwo in der Antwort ein [END] ein.
    Füge auch immer ein [EMOTION:0] bis [EMOTION:10] Tag hinzu, um anzugeben, wie glücklich sich der Charakter gerade fühlt. Aber immer max. 1 EMOTION Tag pro Antwort. 0 ist todes traurig und 10 ist super glücklich.
    Würde der Charakter in dieses Situation lachen füge ein [LAUGH] Tag hinzu.
    Wichti, achte immer darauf die [] um Tags zuseten.
  `,
  movementSpeed: 0.2,
  characters: [
    {
      response: {
        emotion: 5,
        final: false,
        text: "Eh",
      },
      demoResponse: {
        emotion: 0,
        final: false,
        text: "Eh",
      },
      interactionCount: 0,
      name: "Hans",
      systemMessage: "Wichtig: Du lachst immer.",
      lastMessage: "",
      tiles: {
        start: [-1, -4],
        happy: [-1, -3],
        angry: [-5, -3],
      },
      voice: "Google UK English Male",
      rate: 1,
      pitch: 1,
    },
    {
      response: {
        emotion: 5,
        final: false,
        text: "Eh",
      },
      demoResponse: {
        emotion: 0,
        final: false,
        text: "Eh",
      },
      interactionCount: 0,
      name: "Claudia",
      systemMessage: "Wichtig: Du lachst immer.",
      lastMessage: "",
      tiles: {
        start: [-2, -6],
        happy: [-2, -5],
        angry: [-6, -5],
      },
      voice: "Google Nederlands",
      rate: 1,
      pitch: 2,
    },
  ] as Character[],
};

export default config;
