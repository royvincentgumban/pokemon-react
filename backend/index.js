const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
const port = 3001;

// Enable all CORS requests
app.use(cors());


// Define a route to fetch data from the database
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM pokemon', (error, results) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    } else {
      console.log('Data from database:', results);
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});