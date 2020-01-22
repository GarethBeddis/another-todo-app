const express = require('express');
const router = express.Router();
const Todo = require('../../models/todo');
const uuid = require('uuid');

// GET all Todo items
router.get('/', async (req, res) => {
  const allTodos = await Todo.find();
  res.json(allTodos);
});

// POST new Todo
router.post('/', async (req, res) => {
  try {
    const newTodo = new Todo({
      id: uuid.v4(),
      title: req.body.title,
      completed: false,
    });

    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET todo by id
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.find({ id: req.params.id });
    res.json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json('Sever error');
  }
});

// DELETE todo by id
router.delete('/:id', async (req, res) => {
  Todo.deleteOne({ id: req.params.id }, err => {
    if (err) return handleError(err);
  });
  res.send('Deleted todo id: ' + req.params.id);
});

module.exports = router;
