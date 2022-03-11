const express = require('express');

const crudController = require('./crud.controllers')
const Book = require("../models/book.models")

const router = express.Router();


router.get("/authorsection",async(req,res)=>{
    try {
        const book=await Book.find({$and:[{sectionId:req.query.sectionId},{authorId:req.query.authorId}]})
        .populate({path:"AuthorId",select:["first_name","last_name"]})
        .populate({path:"sectionId",select:["section_name"]})
        .lean()
        .exec()
        return res.status(200).send({book});
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
})


router.get("",crudController.Author(Book))

router.post("",crudController.Author1(Book))

module.exports =router