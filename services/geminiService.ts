import { GoogleGenAI } from "@google/genai";
import { CONTENT, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';
import { Language } from '../types';

let aiClient: GoogleGenAI | null = null;

const initializeClient = () => {
  if (!aiClient && process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const getGeminiResponse = async (userMessage: string, language: Language): Promise<string> => {
  const client = initializeClient();
  
  if (!client) {
    return language === Language.ES 
      ? "Lo siento, el servicio de chat no está disponible en este momento. Por favor llámenos."
      : "Sorry, the chat service is not available at the moment. Please call us directly.";
  }

  // Construct a system instruction based on business data
  const context = `
    You are a helpful customer service assistant for "Mahon Car Storage", a business in Menorca, Spain.
    
    Business Details:
    - Phone: ${PHONE_NUMBER}
    - Email: ${EMAIL_ADDRESS}
    - Location: Mahon (Maó), Menorca.
    
    Services Offered:
    - Secure Car Storage (Indoor/Outdoor).
    - ITV (Vehicle Inspection) management: We take the car to the ITV station for the client.
    - Battery maintenance/charging.
    - Airport drop-off/pick-up services.
    - Car washing/valeting.
    
    Current User Language: ${language === Language.ES ? 'Spanish' : 'English'}.
    
    Instructions:
    1. Answer the user's question politely and concisely.
    2. Always reply in the user's language (${language}).
    3. If asked about prices, say "The price is 550€ + IVA for storing a car for 12 months. For other durations, please contact us for a quote."
    4. If asked about location, mention we are near Mahon.
    5. Be professional and inviting.
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: context,
      },
      contents: userMessage,
    });

    return response.text || (language === Language.ES ? "No pude generar una respuesta." : "I could not generate a response.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === Language.ES 
      ? "Hubo un error al conectar con el asistente. Por favor intente más tarde." 
      : "There was an error connecting to the assistant. Please try again later.";
  }
};