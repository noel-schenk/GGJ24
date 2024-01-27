import useGlobalState from "./GlobalState";

export const playTTS = (message: string, voice = "alloy") => {
  const voices = speechSynthesis.getVoices();
  const utterThis = new SpeechSynthesisUtterance(message);
  utterThis.pitch = useGlobalState.get("activeCharacter").pitch | 1;
  utterThis.rate = useGlobalState.get("activeCharacter").rate | 1;
  utterThis.voice = voices.find(
    (ssvoice) => ssvoice.name === voice
  ) as SpeechSynthesisVoice;
  speechSynthesis.speak(utterThis);
};
