import { whisper } from "./index";
import path from "path";
(async function run() {
  try {
    const transcript = await whisper(path.join(__dirname, "path-to-wav"), {
      modelPath: path.join(__dirname, "path-to-bin"),
      modelName: "medium.en",
      whisperOptions: { word_timestamps: true }
    });

    console.log("transcript", transcript);
  } catch (error) {
    console.log("ERROR", error);
  }
})();
