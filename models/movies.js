const mongoose = require("mongoose")

const movies = new mongoose.Schema({
    title:{type:String},
    rating :{type:Number},
    releaseDate:{type:String},
    is_active:{type:Number},
    image:{type:String}
})


module.exports = mongoose.model("movies",movies)