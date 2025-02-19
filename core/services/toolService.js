import OpenAI from 'openai';
import { createKnowledgeEntry, getKnowledgeEntries } from './knowledgeService.js';

export const AvailableFunctions = [
    {
        type: 'function',
        function: {
            name: 'createKnowledgeBaseEntry',
            description: 'createKnowledgeBaseEntry creates a new knowledge entry in the database',
            parameters: {
                type: 'object',
                properties: {
                    content: { type: 'string' },
                    tags: { type: 'array', items: { type: 'string' } },
                }
            }
        }
    },
    {
        type: 'function',
        function: {
            name: 'searchKnowledgeBaseEntries',
            description: 'searchKnowledgeBaseEntries searches for knowledge entries in the database based on a query',
            parameters: {
                type: 'object',
                properties: {
                    query: { type: 'string' }
                }
            }
        }
    }
];

export async function handleToolCall(function_call) {
    console.log("Function call:", function_call);
    const args = JSON.parse(function_call.arguments);
    switch (function_call.name) {
        case 'createKnowledgeBaseEntry':
            await createKnowledgeEntry(args['content'], args['tags']);
            return 'Knowledge base entry created successfully';

        case 'searchKnowledgeBaseEntries':
            return await getKnowledgeEntries(args['query']);

        default:
            throw new Error('No function found');
    }
}