const express = require('express');

const PORT = 8080;
const todos = require('./todos');

const app = express();

app.use('/todos', todos);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});