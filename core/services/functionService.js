import OpenAI from 'openai';

export const functions = [
    {
        name: 'createKnowledgeBaseEntry',
        description: 'createKnowledgeBaseEntry creates a new knowledge entry in the database',
        parameters: {
            type: 'object',
            properties: {
                content: { type: 'string' },
                tags: { type: 'array', items: { type: 'string' } },
            }
        }
    },
    {
        name: 'searchKnowledgeBaseEntries',
        description: 'searchKnowledgeBaseEntries searches for knowledge entries in the database based on a query',
        parameters: {
            type: 'object',
            properties: {
                query: { type: 'string' }
            }
        }
    }
];