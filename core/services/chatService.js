import { generateCompletion, generateText } from "./llmService";
import { createMessage, getMessages } from "./messageService";
import { handleToolCall } from "./toolService";

export const handleMessage = async (message) => {
    var newMessage;
    await createMessage('user', message);
    var messages = await getMessages();

    var completion = await generateCompletion(messages);
    console.log('Completion:', completion);
    if(completion.tool_calls) {
        newMessage = await createMessage('assistant', "Running Command....", completion.tool_calls);
        messages = await getMessages();
        const toolCallOutput = await handleToolCall(completion.tool_calls[0].function);
        await createMessage('tool', toolCallOutput, null, completion.tool_calls[0].id);
        messages = await getMessages();
        const newCompletion = await generateCompletion(messages);
        console.log('New Completion:', newCompletion);
        newMessage = await createMessage('assistant', newCompletion.content)
        return newMessage;

    } else {
        newMessage = await createMessage('assistant', completion.content, completion.tool_calls);
        return newMessage;
    }
};
