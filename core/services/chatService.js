import { generateCompletion, generateText } from "./llmService";
import { createMessage, getMessages } from "./messageService";

export const handleMessage = async (message) => {
    console.log(message)
    var done = false;
    var newMessage;
    await createMessage('user', message);
    var messages = await getMessages();
    console.log(messages);

    while (!done) {
        const completion = await generateCompletion(messages);
        newMessage = await createMessage('assistant', completion);
        newMessage.content.split('\n').forEach(async (line) => {
            if (line[0] == '/') {
                console.log(line)
            }
        });
        done = true;
    }

    return newMessage;
};
