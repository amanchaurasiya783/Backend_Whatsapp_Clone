const Conversation = require('../Models/conversation');

const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        const exist = await Conversation.findOne({ members: { $all: [recieverId, senderId] } });

        if (exist) {
            return res.status(200).json('Conversation Already Exist');
        }

        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })

        await newConversation.save();
        return res.status(200).json('New Conversation Created');

    } catch (error) {
        console.log('NewConversation Controller error : ', error);
        return res.status(500).json(error.message);
    }
}

const getConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;
        const conversation = await Conversation.findOne({ members: { $all: [senderId, recieverId] } });
        return res.status(200).json(conversation);
    } catch (error) {
        console.log('getConversation Controller error : ', error);
    }
}

module.exports = { newConversation, getConversation }