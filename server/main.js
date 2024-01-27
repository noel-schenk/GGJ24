import express from "express";
import fs from "fs";
import path from "path";
import OpenAI from "openai";
import cors from "cors";

import { PythonShell } from "python-shell";

const app = express();
const port = 4444; // Set your desired port number

app.use(cors());

app.get("/generate-mp3", async (req, res) => {
  try {
    const message = req.query.message;
    const key = req.query.key;
    const voice = req.query.voice;

    const openai = new OpenAI({ apiKey: key }); // Replace with your OpenAI API key

    if (!message && !key && !voice) {
      return res.status(400).json({ error: "All parameters are required" });
    }

    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice,
      input: message,
    });

    const buffer = Buffer.from(await mp3.arrayBuffer());

    // Define the file path and name for the generated MP3
    const speechFile = path.resolve("./generated-speech.mp3");

    // Write the MP3 file to the server
    await fs.promises.writeFile(speechFile, buffer);

    // Send the MP3 file as a response
    res.download(speechFile, "generated-speech.mp3", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Clean up the generated MP3 file after it has been sent
      fs.unlinkSync(speechFile);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/ask", async (req, res) => {
  try {
    const message = req.query.message
      .replace(")", "")
      .replace('"', "")
      .replace("'", "");

    PythonShell.runString(
      `
from freeGPT import Client

prompt = "Hi"
try:
    resp = Client.create_completion("gpt3", prompt)
    print(resp)
except Exception as e:
    print(e)
    
    `,
      null
    ).then((messages) => {
      res.send(messages[0]);
      console.log("finished", messages[0]);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
