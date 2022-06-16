const mongoose = require('mongoose');


const connect=()=>{
    return mongoose.connect("mongodb+srv://9061202920:9061202920@cluster0.4vy0z.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;