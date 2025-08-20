const { ref } = require("joi");
const mongoose = require("mongoose");



    const { Schema } = mongoose; 
    const listingSchema = new Schema({
         title: {
             type: String,
        required: true,
     },
        reviews :[{
             type : Schema.Types.ObjectId ,
              ref :"Review",

        }],
        owner : {
            type : Schema.Types.ObjectId , 
            ref : "User"
        },
        category:{
            type: "String" ,
            enum: ["Rooms", "Iconic Cities" , "Mountains" , "Amazing Pools", "Boats", "Camping", "Farms", "Arctic" ,"Domes" , "Castles"]
        } ,
        description: 
        { type: String, 
            required: true, }

        , image: { 
          
            url : String ,
            file : String ,
} ,
          price: { type: Number, required: true, }, 
          location: { type: String, required: true, }, 
          country: { type: String, required: true, }, }, 
          { timestamps: true });
           
            
 listingSchema.post("findOneAndDelete" , async(listing)=>{
             if(listing){
                await Review.deleteMany({_id : {$in : listing.review}})
             }})
const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing ;