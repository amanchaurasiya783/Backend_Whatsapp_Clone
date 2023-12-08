const express = require('express');
const { connectToMongoDB } = require('./db');
const { Router } = require('./routes/route.js');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

connectToMongoDB(`mongodb://localhost:27017/whatsapp-clone`)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log('DB Connection Failed : ', err))


app.listen(PORT, () => console.log('ServerRunning At PORT : ', PORT))