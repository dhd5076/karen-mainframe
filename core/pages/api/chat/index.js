
import { handleMessage } from "../../../services/chatService";
import { getMessages } from "../../../services/messageService";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const messages = await getMessages(); // Assuming you have a function to get messages
        res.status(200).json(messages);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
      }
      break; 
    case 'POST':
      try {
        const reply = await handleMessage(req.body.content);
        res.status(201).json(reply);
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}