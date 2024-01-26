import { Character, CharacterResponse } from "./types";
import useGlobalState from "./GlobalState";

export const interact = async (
  character: Character
): Promise<CharacterResponse> => {
  return new Promise<CharacterResponse>((resolve) => {
    useGlobalState.set("interact", true);
    useGlobalState.subscribe("characterResponse", () => {});
    resolve(character.demoResponse);
  });
};
