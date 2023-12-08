const express = require('express');
const { connectToMongoDB } = require('./db');
const { Router } = require('./routes/route.js');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', Router);

connectToMongoDB(URL)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => console.log('DB Connection Failed : ', err))


app.listen(PORT, () => console.log('ServerRunning At PORT : ', PORT))