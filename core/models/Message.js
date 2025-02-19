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
    tool_calls: {
        type: Object,
        required: false
    },
    tool_call_id: {
        type: String,
        required: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Message || mongoose.model('Message', ChatMessageSchema);