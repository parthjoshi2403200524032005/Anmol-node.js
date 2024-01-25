const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    
    rating:{
        type: mongoose.Schema.Types.Number,
        required: true,
    }, 
    blogid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog",
        required: true
    },
    feedback:{
        type: mongoose.Schema.Types.String,
        required: true
    }

})


module.exports = mongoose.model("review", reviewSchema);