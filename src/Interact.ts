import { Character, CharacterResponse, View } from "./types";
import useGlobalState from "./GlobalState";

export const interact = async (
  character: Character
): Promise<CharacterResponse> => {
  return new Promise<CharacterResponse>((resolve) => {
    useGlobalState.set("show", [View.MAIN, View.CHAT]);
    useGlobalState.set("interact", true);
    useGlobalState.set("activeCharacter", character);
    useGlobalState.subscribe("activeCharacter", () => {
      console.log(useGlobalState.get("activeCharacter").response);
      resolve(useGlobalState.get("activeCharacter").response);
    });
  });
};
