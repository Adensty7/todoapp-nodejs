// Express module
const express = require('express');

//todoRoutes module
const todoRoutes = require('./routes/todoRoutes');

const app = express();


// Morgan Module
const morgan = require('morgan');


// Mongoose Module
const mongoose = require('mongoose');

// Connection to MongoDB
const dbURI = 'mongodb+srv://adensty:Adensty7@nodejsbasics.ez27e.mongodb.net/todoapp?retryWrites=true&w=majority';

const PORT = 80;

// Mongoose fn to connect to database
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err));


app.use(morgan('dev'));

// Set up template engine
app.set('view engine', 'ejs');

//Static files
app.use(express.static('public'));

// Middleware for parsing post data
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.redirect('/todo');
});

app.use('/todo', todoRoutes);
