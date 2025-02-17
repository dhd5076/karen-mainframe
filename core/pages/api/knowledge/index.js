import { createKnowledgeEntry, getKnowledgeEntries } from '../../../services/knowledgeService';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const entries = await getKnowledgeEntries();
        res.status(200).json(entries);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    case 'POST':
      try {
        const entry = await createKnowledgeEntry(req.body);
        res.status(201).json(entry);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}