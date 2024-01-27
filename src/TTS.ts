export const playTTS = (message: string, voice = "Google Nederlands") => {
  if ("speechSynthesis" in window) {
    const voices = window.speechSynthesis.getVoices();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);

    utterance.voice = voices.find(
      (ssvoice) => ssvoice.name === voice
    ) as SpeechSynthesisVoice;
    synth.speak(utterance);
  }
};
