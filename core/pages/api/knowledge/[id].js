import { getKnowledgeEntryById, updateKnowledgeEntry, deleteKnowledgeEntry } from '../../../services/knowledgeService';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      try {
        const entry = await getKnowledgeEntryById(id);
        if (!entry) {
          return res.status(404).json({ message: 'Knowledge entry not found' });
        }
        res.status(200).json(entry);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    case 'PUT':
      try {
        const updatedEntry = await updateKnowledgeEntry(id, req.body);
        if (!updatedEntry) {
          return res.status(404).json({ message: 'Knowledge entry not found' });
        }
        res.status(200).json(updatedEntry);
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    case 'DELETE':
      try {
        const deletedEntry = await deleteKnowledgeEntry(id);
        if (!deletedEntry) {
          return res.status(404).json({ message: 'Knowledge entry not found' });
        }
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}