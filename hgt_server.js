const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 1. The Browser Test (Visual proof)
app.get('/', (req, res) => {
    res.send("<h1>HGT GLOBAL TECH INDUSTRY</h1><p>The AI Server is LIVE and BREATHING.</p>");
});

// 2. The AI Chat Path
app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(message);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (e) {
        console.error(e);
        res.status(500).json({ reply: "HGT Core is recalibrating. Check API Key." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("HGT CORE ACTIVE ON PORT " + PORT));
