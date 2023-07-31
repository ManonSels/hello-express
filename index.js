const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

function logger(req, res, next) {
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));