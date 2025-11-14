const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const router = express.Router();

const client = new GoogleGenerativeAI({
  apiKey: "YOUR_API_KEY_HERE"
});

router.post("/process-image", async (req, res) => {
  try {
    const base64 = req.body.image;

    // Use generateText (available in 0.24.1) with image input
    const response = await client.generateText({
      model: "gemini-1.5",
      prompt: "Extract ingredients from this image. Return only a list of ingredients.",
      image: { data: base64, mimeType: "image/jpeg" }
    });

    // response.output_text contains the extracted text
    const ingredients = response.output_text || "";

    res.json({ ingredients });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
