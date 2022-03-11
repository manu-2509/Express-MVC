const express = require('express');


const sectionControllers = require('./controllers/section.controller')

const authorControllers = require('./controllers/author.controllers')

const booksControllers = require('./controllers/books.controllers')




const app= express();

app.use(express.json());


app.use("/book",booksControllers);
app.use("/author",authorControllers);
app.use("/section",sectionControllers)


module.exports = app;