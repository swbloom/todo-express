const express = require('express');
const PORT = 8080;

const app = express();

const todos = [];

app.get('/todos', (req, res) => {
    res.status(200).json({ todos });
});

app.post('/todos/:todo', (req, res) => {
    const todo = req.params.todo;
    todos.push(todo);
    res.status(201).json({ todos });
});

app.put('/todos/:index/:nextTodo', (req, res) => {
    const { index, nextTodo } = req.params;
    let todo = todos[index];

    if (todo) {
        todos[index] = nextTodo;
        res.status(200).json({ todo: todos[index] });
    } else {
        res.status(404).json({
            message: 'The todo does not exist.'
        });
    }
});

app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    const todo = todos.splice(index);
    
    if (todo.length) {
        res.status(200).json({ todo: todo[0] });
    }
    
    res.status(404).json({
        message: 'The todo does not exist.' 
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});