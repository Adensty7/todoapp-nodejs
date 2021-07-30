// Express Module
const express = require('express');

// Using an Express Router
const router = express.Router();

//Importing odoController
const todoController = require('../controllers/todoController');

// Get Todo Request
router.get('/', todoController.todos);

// Post request for adding todo
router.post('/add', todoController.todo_add);

//Post request for deleting todo
router.post('/delete/:id', todoController.todo_delete);

module.exports = router;