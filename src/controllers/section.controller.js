const express = require('express')

const Section = require("../models/section.models")

const Book = require("../models/book.models")

const crudControllers = require('./crud.controllers')

const router = express.Router()
router.get("",crudControllers.Author(Section))

router.post("",crudControllers.Author1(Section))

router.patch("/:id",async (req, res) => {
    try {
        const section =await Section.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }).lean()
        .exec();
        return res.status(200).send({section})
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

router.get("/:sectionId/book",async(req, res) => {
    try {
        const book = await Book.find({sectionId:req.params.sectionId}).lean().exec();
        return res.status(200).send({book})
    } catch (err) {
        return res.status(500).send({err:err.message});
    }
})
 
router.delete("/:id",crudControllers.Delete(Section))

module.exports = router