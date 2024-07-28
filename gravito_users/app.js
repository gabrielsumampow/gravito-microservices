const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URI;

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`Gravito Users listening on port ${PORT}`));