const express = require('express');


const Author = require("../models/author.models")



const Book = require("../models/book.models")

const crudController = require("./crud.controllers")
const router = express.Router();


router.get("",crudController.Author(Author))

router.post("",crudController.Author1(Book))


router.get("/:AuthorId/book",crudController.AuthorOne(Book))
module.exports =router