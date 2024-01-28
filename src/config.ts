import useGlobalState from "./GlobalState";
import { CharactersProd } from "./config.characters.prod";
import { CharactersTesting } from "./config.characters.test";
import { CharactersZombie } from "./config.zombie.prod";
import { CharactersHate } from "./config.hate.prod";
import { View } from "./types";
import { CharactersLaugh } from "./config.laugh.prod";
import { CharactersFun } from "./config.fun.prod";

const testing = false;

const altMode = () => {
  switch (useGlobalState.get("altMode")) {
    case "zombie":
      return CharactersZombie;
    case "hate":
      return CharactersHate;
    case "laugh":
      return CharactersLaugh;
    case "fun":
      return CharactersFun;
  }
  return CharactersZombie;
};

export const config = () => {
  return {
    initialView: View.MENU,
    gptKey: "",
    gptModel: "gpt-3.5-turbo",
    basisSystemMessage: `Du bist eine Spielfigur, wie sie unten beschrieben ist.
    Du wirst nur mit dem antworten, was dieser Charakter antworten würde.
    Die einzige Ausnahme ist, wenn das Gespräch beendet werden soll, weil ein normaler Charakter das Gespräch an dieser Stelle beenden würde. In diesem Fall füge irgendwo in der Antwort ein [END] ein.
    Füge auch immer ein [EMOTION:0] bis [EMOTION:10] Tag hinzu, um anzugeben, wie glücklich sich der Charakter gerade fühlt. Aber immer max. 1 EMOTION Tag pro Antwort. 0 ist todes traurig und 10 ist super glücklich.
    Würde der Charakter in dieses Situation lachen füge ein [LAUGH] Tag hinzu.
    Wichti, achte immer darauf die [] um Tags zuseten.
  `,

    movementSpeed: 0.2,
    characters: useGlobalState.get("altMode")
      ? altMode()
      : testing
        ? CharactersTesting
        : CharactersProd,
    characterTurnChance: 0.5,
  };
};

export default config;
