// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8900;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGO_URI || 'mongodb://zentek:ZentekPass123!@mongo:27017/mydb?authSource=admin';
mongoose.connect(uri)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error('Mongo connect error:', err));

// Simple test route
app.get('/', (req, res) => {
  res.send({ message: 'Backend is running!' });
});

// Example API route
app.get('/api/test', (req, res) => {
  res.send({ message: 'API test successful!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
