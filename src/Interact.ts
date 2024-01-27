import { Character, CharacterResponse, View } from "./types";
import useGlobalState, { getActiveCharacter } from "./GlobalState";
import { playTTS } from "./TTS";

let resolve: any;

export const interact = async (
  character: Character
): Promise<CharacterResponse> => {
  useGlobalState.set(
    "activeCharacter",
    useGlobalState.get("characters").indexOf(character)
  );
  console.log(character);
  return new Promise<CharacterResponse>((r) => {
    useGlobalState.set("show", [View.MAIN, View.CHAT]);
    resolve = r;
  });
};

useGlobalState.subscribe("activeCharacter--response", () => {
  if (!resolve) {
    return;
  }
  console.log("new activeCharacter response", getActiveCharacter().response);

  playTTS(getActiveCharacter().response.text, getActiveCharacter().voice);

  resolve(getActiveCharacter().response);
  resolve = undefined;
});
