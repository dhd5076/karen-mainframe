import dbConnect from '../utils/dbConnect';
import KnowledgeEntry from '../models/KnowledgeEntry';

export const createKnowledgeEntry = async (data) => {
  await dbConnect();
  const entry = new KnowledgeEntry(data);
  await entry.save();
  return entry;
};

export const getKnowledgeEntries = async (query) => {
    await dbConnect();
    const filter = query
      ? {
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { content: { $regex: query, $options: 'i' } },
          ],
        }
      : {};
    const entries = await KnowledgeEntry.find(filter);
    return entries;
};

export const getKnowledgeEntryById = async (id) => {
  await dbConnect();
  const entry = await KnowledgeEntry.findById(id);
  return entry;
};

export const updateKnowledgeEntry = async (id, data) => {
  await dbConnect();
  const entry = await KnowledgeEntry.findByIdAndUpdate(id, data, { new: true });
  return entry;
};

export const deleteKnowledgeEntry = async (id) => {
  await dbConnect();
  await KnowledgeEntry.findByIdAndDelete(id);
};