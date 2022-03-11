const mongoose = require('mongoose');

const sectionSchema = mongoose.Schema({
    section_name:{type:String, required:true}
},
{
    timestamps:true,
})

const Section = mongoose.model("section",sectionSchema)


module.exports = Section