import useGlobalState from "./GlobalState";

export const playTTS = (message: string, voice = "Google Nederlands") => {
  const voices = window.speechSynthesis.getVoices();
  const utterThis = new SpeechSynthesisUtterance(message);
  utterThis.pitch = useGlobalState.get("activeCharacter").pitch | 1;
  utterThis.rate = useGlobalState.get("activeCharacter").rate | 1;
  utterThis.voice = voices.find(
    (ssvoice) => ssvoice.name === voice
  ) as SpeechSynthesisVoice;
  window.speechSynthesis.speak(utterThis);
};
