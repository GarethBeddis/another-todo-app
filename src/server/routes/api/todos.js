const express = require('express');
const router = express.Router();
const Todo = require('../../models/todo');
const uuid = require('uuid');

// GET all Todo items
router.get('/', async (req, res) => {
    const allTodos = await Todo.find();
    res.json(allTodos)
})

// POST new Todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo ({
        id: uuid.v4(),
        title: req.body.title,
        completed: false
        })
    
        await newTodo.save();
        res.json(newTodo);
    } catch(err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;