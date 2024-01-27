import { Character, CharacterResponse, View } from "./types";
import useGlobalState from "./GlobalState";
import { playTTS } from "./TTS";

let resolve: any;

export const interact = async (
  character: Character
): Promise<CharacterResponse> => {
  useGlobalState.set("activeCharacter", character);
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
  console.log(
    "new activeCharacter response",
    useGlobalState.get("activeCharacter").response
  );

  playTTS(
    useGlobalState.get("activeCharacter").response.text,
    useGlobalState.get("activeCharacter").voice
  );

  resolve(useGlobalState.get("activeCharacter").response);
  resolve = undefined;
});
