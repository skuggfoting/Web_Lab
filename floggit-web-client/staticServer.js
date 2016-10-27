const express = require('express');

const app = express();

app.use(express.static('dist'));
app.listen(8083);
console.log('Note webserver started on port 8083');
