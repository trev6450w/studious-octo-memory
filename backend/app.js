const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, Docker! This is a sample change! This is version 2');
});

app.get('/secret', (req, res) => {
    res.send('You found a new secret!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});