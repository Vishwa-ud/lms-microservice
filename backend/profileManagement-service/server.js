
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes.js'); // Import routes from routes.js
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

//middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/user.route');
app.use('/api/user', userRoutes);

// connetct to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


// use routes
app.use('/userProfile', routes);

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});










