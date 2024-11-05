const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const userRoutes = require('./routes/userRoutes'); // Make sure this path is correct

app.use(express.json()); // Middleware to parse JSON bodies

// Use the route for /api prefix
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
