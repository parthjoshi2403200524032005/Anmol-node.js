const mongoose = require('mongoose')


const blogSchema = new mongoose.Schema({

    title:{
        type: mongoose.Schema.Types.String,
        trim:true,
        required:true,
        unique:true,
    } ,
    discription:{
        type: mongoose.Schema.Types.String,
    },
    category: {
        type: mongoose.Schema.Types.String,
    },
    subcategory: {
        type: mongoose.Schema.Types.Number,
        
    },
    authorid:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:"author"
    },
  

},{timestamps:true})

module.exports = new mongoose.model("Blog",blogSchema,"blog")
