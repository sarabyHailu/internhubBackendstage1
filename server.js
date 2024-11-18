require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// Route: /name

app.get('/', (req, res) => {
    res.status(200).send('Hi there!');
});
app.get('/name', (req, res) => {
    res.status(200).send(process.env.FULL_NAME);
});

app.get('/hobby', (req, res) => {
    res.status(200).json({ hobby: process.env.FAVORITE_HOBBY });
});

app.get('/dream', (req, res) => {
    res.status(200).send(process.env.MOTIVATIONAL_MESSAGE);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
