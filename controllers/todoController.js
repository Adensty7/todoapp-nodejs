// todos, todo_add, todo_delete

// Todo Model
const Todo = require('../models/todo');

const todos = (req, res) => {
    Todo.find().sort({ createdAt: 1 })
    .then((result) => {
        res.render('todo', {todos: result}); 
    })
    .catch((err) => {
        console.log(err);
    });
};

const todo_add = (req, res) => {
   console.log(req.body);
   const todo = new Todo(req.body);
   todo.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err)
        });
};

const todo_delete = (req, res) => {
    const id = req.params.id;
    Todo.findByIdAndDelete(id)
        .then((result) => {
            //Redirect to the blogs page
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    todos, todo_add, todo_delete
};