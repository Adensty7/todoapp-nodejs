// Mongoose Module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    item: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;