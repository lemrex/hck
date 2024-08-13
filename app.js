const express = require('express');
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World Lag!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
