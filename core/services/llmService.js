import { configDotenv } from 'dotenv';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export const generateCompletion = async (messages) => {
  try {
    const systemMessage = { role: 'system',
      content: `
        You are provided two commands
        /createKnowledgeBaseEntry {content: string, tags: string[]}
        /searchKnowledgeBase {tags}

        The Knowledgebase is a database of information about the user
        Every time you learn something new about the user, yourself, people, projects, or objects
        relevant to the user, you should add it to the knowledgebase.

        The search command should return all knowledgebase entries that match the tags provided

        Use tags so that you can further fetch that information in the future.

        The user will not see you created a note, so after using the command, continue the conversation
      `
     };
    const updatedMessages = [systemMessage, ...messages];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: updatedMessages,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error creating chat completion:', error);
  }
};