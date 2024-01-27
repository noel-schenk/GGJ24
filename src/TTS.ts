import * as Tone from "tone";
import { PitchShifter } from "soundtouchjs";
import config from "./config";
import useGlobalState from "./GlobalState";

export const playTTS = (message: string, voice = "alloy") => {
  const baseUrl = "https://ggj24.idhren.com/generate-mp3";
  const url = new URL(baseUrl);

  url.searchParams.append("voice", voice);
  url.searchParams.append("key", config.gptKey);
  url.searchParams.append("message", message);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.blob();
    })
    .then((blob) => {
      const mp3Url = URL.createObjectURL(blob);

      // Fetch the blob content as an ArrayBuffer
      fetch(mp3Url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          const audioCtx = new window.AudioContext();
          const gainNode = audioCtx.createGain();
          gainNode.gain.value = 1.0;

          let shifter: {
            on: (arg0: string, arg1: () => void) => void;
            pitchSemitones: number;
            connect: (arg0: GainNode) => void;
          };

          // Decode the ArrayBuffer into an AudioBuffer
          audioCtx.decodeAudioData(
            arrayBuffer,
            (audioBuffer) => {
              // Initialize PitchShifter with the decoded audio data
              shifter = new PitchShifter(audioCtx, audioBuffer, 1024);
              shifter.on("play", () => {
                // do something with detail.timePlayed;
                // do something with detail.formattedTimePlayed;
                // do something with detail.percentagePlayed
              });

              // shifter.tempo = 1; // Set tempo
              // shifter.pitch = 1; // Set pitch
              if (useGlobalState.get("activeCharacter").tone)
                shifter.pitchSemitones =
                  useGlobalState.get("activeCharacter").tone;

              const play = () => {
                shifter.connect(gainNode); // connect it to a GainNode to control the volume
                gainNode.connect(audioCtx.destination); // attach the GainNode to the 'destination' to begin playback
              };

              play();
            },
            (error) => {
              console.error("Error decoding audio data", error);
            }
          );
        })
        .catch((error) => {
          console.error("Error fetching audio data", error);
        });
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};
