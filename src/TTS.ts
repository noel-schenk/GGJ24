import config from "./config";

export const playTTS = (message: string) => {
  const baseUrl = "https://ggj24.idhren.com/generate-mp3";
  const url = new URL(baseUrl);

  url.searchParams.append("voice", "alloy");
  url.searchParams.append("key", config.gptKey);
  url.searchParams.append("message", message);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.blob();
    })
    .then((blob) => {
      const mp3Url = URL.createObjectURL(blob);

      const audio = new Audio(mp3Url);
      audio.play();
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};
