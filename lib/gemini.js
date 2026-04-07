"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth } from "@clerk/nextjs/server";

// Initialize Gemini API once
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Export the model for reuse
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export async function generateCoverLetter(data) {
  // Ensure the user is authenticated
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    // Make a request to Gemini API
    const response = await model.generateText({
      prompt: `Write a professional cover letter for a candidate applying to: ${data.jobTitle} at ${data.companyName}. Highlight relevant skills: ${data.skills.join(", ")}.`,
      temperature: 0.7,
      maxOutputTokens: 500,
    });

    // Gemini API may return text under outputText or text
    return response.outputText || response.text;
  } catch (err) {
    console.error("Gemini API error:", err);
    throw new Error("Failed to generate cover letter");
  }
}
