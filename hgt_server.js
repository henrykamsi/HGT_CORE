const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(message);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (e) {
        res.status(500).json({ error: "HGT Recalibrating" });
    }
});

app.get('/', (req, res) => res.send("HGT Core is Online"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("HGT LIVE"));
