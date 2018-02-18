const express = require('express');
const router = express.Router()

const todos = [];

router.get('/', (req, res) => {
    res.status(200).json({ todos });
});

router.post('/:todo', (req, res) => {
    const todo = req.params.todo;
    todos.push(todo);
    res.status(201).json({ todos });
});

router.put('/:index/:nextTodo', (req, res) => {
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

router.delete('/:index', (req, res) => {
    const index = req.params.index;
    const todo = todos.splice(index);
    
    if (todo.length) {
        res.status(200).json({ todo: todo[0] });
    }
    
    res.status(404).json({
        message: 'The todo does not exist.' 
    });
});

module.exports = router;
