const express = require('express');
const app = express ();
app.use(express.json());

app.get('/test',(request, response) => {
    response.status(201).json('Hello World');
});

module.exports = app;