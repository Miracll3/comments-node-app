const express = require('express');
const axios = require('axios');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/comments', async (req, res) => {
  try {
    const response = await axios.get('https://comments-api.herokuapp.com/api/comments'); // API endpoint URL

    const comments = response.data.comments;
    res.json(comments);
  } catch (error) {
    console.error('Error retrieving comments:', error.message);
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
});

app.get('/', (req, res) => {
  // Use the path module to get the absolute path to the HTML file
  const filePath = path.join(__dirname, 'index.html');
  
  // Send the HTML file as the response
  res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
