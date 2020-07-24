const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// IMPORT ROUTES
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

// Connect to Database
mongoose.connect('mongodb://localhost/scravajipt', () => console.log('DB'));

// ROUTE MIDDLEWARES
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3300, () => { console.log("Server up and running") })