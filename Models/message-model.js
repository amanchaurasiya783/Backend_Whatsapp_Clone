const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    recieverId: {
        type: String
    },
    type: {
        type: String
    },
    value: {
        type: String
    }
},
    {
        timestamps: true
    })

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;