import { Character, CharacterResponse, View } from "./types";
import useGlobalState from "./GlobalState";
import { playTTS } from "./TTS";

let resolve: any;

export const interact = async (
  character: Character
): Promise<CharacterResponse> => {
  return new Promise<CharacterResponse>((r) => {
    useGlobalState.set("show", [View.MAIN, View.CHAT]);
    useGlobalState.set("interact", true);
    useGlobalState.set("activeCharacter", character);
    resolve = r;
  });
};

useGlobalState.subscribe("newCharacterResponse", () => {
  if (!resolve) {
    return;
  }
  console.log(
    "new activeCharacter response",
    useGlobalState.get("activeCharacter").response
  );

  playTTS(useGlobalState.get("activeCharacter").response.text);

  resolve(useGlobalState.get("activeCharacter").response);
  resolve = undefined;
});
