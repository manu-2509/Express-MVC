const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    book_name:{type:String, required:true},
    body:{type:String, required:true},
    AuthorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true
    },
    sectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true,
    }
},
{
    timestamps:true,
})

const Book = mongoose.model("book",bookSchema)


module.exports = Book