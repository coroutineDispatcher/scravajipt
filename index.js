const express = require('express');
const app = express();
const mongoose = require('mongoose');

// IMPORT ROUTES
const authRoute = require('./routes/auth');

// Connect to Database
mongoose.connect('mongodb://localhost/scravajipt', () => console.log('DB'));

// ROUTE MIDDLEWARES
app.use(express.json());
app.use('/api/user', authRoute);

app.listen(3000, () => { console.log("Server up and running") })