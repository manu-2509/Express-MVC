const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    sectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true
    }
},
{
    timestamps:true,
})

const Author = mongoose.model("author",authorSchema)

module.exports = Author