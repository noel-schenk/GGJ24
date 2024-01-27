import useGlobalState from "./GlobalState";

let voices = speechSynthesis.getVoices();
setTimeout(() => {
  voices = speechSynthesis.getVoices();
}, 1000);

export const playTTS = (message: string, voice = "Google Nederlands") => {
  if ("speechSynthesis" in window) {
    const synth = speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);

    console.log(voice, useGlobalState.get('activeCharacter'));

    utterance.pitch = useGlobalState.get('activeCharacter')?.pitch ?? 1;
    utterance.rate = useGlobalState.get('activeCharacter')?.rate ?? 1;

    utterance.voice = voices.find((ssvoice) => ssvoice.name === voice) ||
      voices.find((ssvoice) => ssvoice.lang === "de-DE")!;

    synth.speak(utterance);
  }
};
