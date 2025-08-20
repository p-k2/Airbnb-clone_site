const mongoose = require("mongoose");
const Schema = mongoose.Schema ;


    const reviewsSchema =  new Schema({
        comment : String ,

        createdAt : {
                   type : Date ,
                   default : Date.now() ,
        } ,
        rating : {
            type : Number ,
            min : 1 ,
            max : 5 ,
        },

        author : {
            type : Schema.Types.ObjectId ,
            ref : "User",
        },

    })
    const Review = mongoose.model("Review" , reviewsSchema) ;
    module.exports = Review ;