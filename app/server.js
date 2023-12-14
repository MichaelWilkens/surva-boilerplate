const express = require('express');
const path = require('path');
const PORT = 3000;

// initialize application
const app = express();
app.enable('trust proxy');
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/html'));

// Routes
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/html/homepage.html')));
app.get('/contact', (req, res, next) => res.sendFile(path.join(__dirname, '/html/contact.html')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
