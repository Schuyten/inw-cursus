import { streamText } from 'ai'
// import { deepseek } from '@ai-sdk/deepseek'
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json()

  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY ?? '',
  });

  const response = streamText({
    model: google('gemini-2.5-flash'),
    system: 'You are a helpful teaching assistant for an informatics course that uses basic python. Answer questions about programming and related topics. Respond in the same language as the user (Dutch or English). Never give a straight answer, but rather ask a question to the user to help them find the answer themselves.',
    messages,
  })

  return response.toDataStreamResponse();
}