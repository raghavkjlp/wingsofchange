import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import OpenAI from "openai";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: ["https://sardarkartarsinghjhabbartrust.org","https://sksjt.org","https://wingsofchange.netlify.app"], methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }));
app.use(express.json());
// ✅ Correct route paths
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/donations", donationRoutes);

// 👇 simplified public API
app.use("/api", publicRoutes);


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for 
          Sardar Kartar Singh Jhabbar Trust NGO.
          Only answer about NGO activities, donation process,
          volunteering, events and mission.`
        },
        {
          role: "user",
          content: userMessage
        }
      ]
    });
       res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
