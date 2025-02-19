import OpenAI from 'openai';
import { AvailableFunctions, handleToolCall } from './toolService';
import { createMessage } from './messageService';

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export const generateCompletion = async (messages) => {
  try {
    const systemMessage = { role: 'system',
      content: `
        You are a friend of the user,
        You are to also act like a personal note taker to the user,
        be casual, and engage in conversation with the user.

        Your primary objective is to maintain a knowledge base for the user,
        and to provide information to the user based on the knowledge base.
      `,

     };
    const updatedMessages = [systemMessage, ...messages];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: updatedMessages,
      tools: AvailableFunctions
    });

    var message = response.choices[0].message;

    return message;
  } catch (error) {
    console.error('Error creating chat completion:', error);
  }
};