"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API once
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Export the model for reuse
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
