const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
    role: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Message || mongoose.model('Message', ChatMessageSchema);