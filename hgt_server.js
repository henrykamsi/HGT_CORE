const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ 
            model: "gemini-pro",
            systemInstruction: "You are the Henry Global Tech (HGT) Intelligence AI. Be professional and technical."
        });
        const result = await model.generateContent(message);
        const response = await result.response;
        res.json({ reply: response.text(), brand: "HGT Industry" });
    } catch (e) {
        res.status(500).json({ reply: "HGT Core is recalibrating." });
    }
});

app.listen(process.env.PORT || 3000, () => console.log("HGT CORE ACTIVE"));
