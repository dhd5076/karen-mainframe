import dbConnect from '../utils/dbConnect';
import Message from '../models/Message';

export const createMessage = async (role, content, tool_calls, tool_call_id) => {
    await dbConnect();
    const newMessage = new Message({ role, content, tool_calls, tool_call_id });
    await newMessage.save();
    return newMessage;
};

export const getMessageById = async (id) => {
    await dbConnect();
    const message = await Message.findById(id);
    return { message };
};

export const updateMessageById = async (id, content) => {
    await dbConnect();
    const message = await Message.findByIdAndUpdate(id, { content: content }, { new: true });
    return message;
};

export const deleteMessageById = async (id) => {
    await dbConnect();
    const message = await Message.findByIdAndDelete(id);
    return message;
};

export const getMessages = async (query = {}) => {
    await dbConnect();
    const messages = await Message.find(query).sort({ timestamp: 1 });
    return messages;
};