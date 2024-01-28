import { getActiveCharacter } from "./GlobalState";

let voices = speechSynthesis.getVoices();
setTimeout(() => {
  voices = speechSynthesis.getVoices();
}, 1000);

// const testMessage = `
// Gehe ich rückwärts mit meinen Gedanken und suche nach den Plätzen, die von der Erinnerung noch ein spärliches Licht empfangen, so sehe ich mich als etwa vierjährigen Knaben mit meinen beiden Eltern auf einem offenen Wagen über den ebenen Marschweg dahinfahren;
// ich fühle plötzlich den Sonnenschein mit einem kühlen Schatten wechseln, der an der einen Seite von ungeheuren Bäumen auf den Weg hinausfällt; und während ich meinen kleine Kopf über die Lehne des Wagenstuhls recke, um den breiten Graben zu sehen, der sich neben den Bäumen hinzieht, biegen wir gerade in die Schatten hinein und durch ein offenstehendes Gittertor.
// `

export const playTTS = (message: string, voice = "Google Nederlands") => {
  if ("speechSynthesis" in window) {
    const voiceInstance =
      voices.find((ssvoice) => ssvoice.name === voice) ||
      voices.find((ssvoice) => ssvoice.lang === "de-DE")!;

    speechSynthesis.cancel();
    splitMessage(
      message,
      voiceInstance,
      getActiveCharacter().pitch,
      getActiveCharacter().rate
    );
  }
};

const splitMessage = (
  message: string,
  voice: SpeechSynthesisVoice,
  pitch: number = 1,
  rate: number = 1
) => {
  const parts = message /*.replaceAll(/[^\w\.,;]/g, ' ')*/
    .split(" ");

  while (parts.length > 0) {
    const part = parts.slice(0, 25);
    parts.splice(0, 25);

    const string = part.join(" ");

    const utterance = new SpeechSynthesisUtterance(string);
    utterance.pitch = pitch;
    utterance.rate = rate;
    utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }
};
