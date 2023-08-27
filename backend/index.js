const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/DummyMSc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(cors());
// Middleware to parse request bodies as JSON
app.use(express.json());

// Import and use the filter route
const filterRoutes = require('./routes/filterRoute');
app.use('/', filterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
