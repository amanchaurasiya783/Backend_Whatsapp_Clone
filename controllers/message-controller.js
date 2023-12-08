const Message = require('../Models/message-model');
const Conversation = require('../Models/conversation');

const newMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        // console.log(req.params);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.value });
        return res.status(200).json('Message Sent Successfully');
    } catch (error) {
        console.log('NewConversation Controller error : ', error.message);
        return res.status(500).json(error.message);
    }
}

const getMessages = async (req, res) => {
    try {
        console.log('request params : ', req.params);
        console.log('request body : ', req.body);
        const response = await Message.find({ conversationId: req.params.id });
        return res.status(200).json(response);
    } catch (error) {
        console.log('getMessage Controller error : ', error.message);
        return res.status(500).json(error.message);
    }
}

module.exports = { newMessage, getMessages };