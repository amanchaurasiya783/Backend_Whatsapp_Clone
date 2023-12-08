const express = require('express');
const { addUser, getUser } = require('../controllers/user-controller.js');
const { newConversation, getConversation } = require('../controllers/conversation-controller.js');
const { newMessage, getMessages } = require('../controllers/message-controller.js');
const { uploadFile } = require('../controllers/file-controller');
const upload = require('../utils/uploadCheck.js')

const Router = express.Router();

Router.post('/add', addUser);
Router.get('/users', getUser);
Router.post('/conversation/add', newConversation);
Router.post('/conversation/get', getConversation);
Router.post('/messages/add', newMessage);
Router.get('/messages/get/:id', getMessages);
Router.post('/file/upload', upload.single('file'), uploadFile);

module.exports = {
    Router
}