import { Character, CharacterResponse } from "./types";

export const interact = async (character: Character): Promise<CharacterResponse> => {
  return character.demoResponse;
};


