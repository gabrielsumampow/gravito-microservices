const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const restaurantRoutes = require('./routes/restaurants');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;
const DB_URL = process.env.MONGODB_URI;

mongoose.connect(DB_URL)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/restaurants', restaurantRoutes);
app.listen(PORT, () => console.log(`Gravito Restaurants listening on port ${PORT}`));