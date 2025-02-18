import mongoose from 'mongoose';

const KnowledgeEntrySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.KnowledgeEntry || mongoose.model('KnowledgeEntry', KnowledgeEntrySchema);