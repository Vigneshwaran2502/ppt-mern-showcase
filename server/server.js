const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// A simple test route to see if the server is responding
app.get('/', (req, res) => {
  res.send('API is running...');
});
// ... your other code

// Mount Routes
app.use('/api/monasteries', require('./routes/monasteryRoutes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));