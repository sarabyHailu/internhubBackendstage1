const express = require('express');
const app = express();
const port = 3000;

// Route: /name

app.get('/', (req, res) => {
    res.status(200).send('Hi there!');
});
app.get('/name', (req, res) => {
    res.status(200).send('My name is sara Hailu');
});

// Route: /hobby
app.get('/hobby', (req, res) => {
    res.status(200).json({ hobby: 'I like watching movies and podcasts' });
});

// Route: /dream
app.get('/dream', (req, res) => {
    res.status(200).send('The future belongs to those who prepare for it today');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
