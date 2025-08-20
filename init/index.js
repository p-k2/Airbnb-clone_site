const Listing = require("../models/listing.js") ;
const initData = require("./data.js")  ;
const mongoose = require("mongoose");
const dbUrl = process.env.ATLASDB_URL ;

    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/test') ;
    }
    main().then(()=>{
        console.log("connection is succesful");
    }).catch((err)=>{
    console.log(err) ;
    })

    const initDB = async()=>{
        await Listing.deleteMany({}) ;
        // initData.data = initData.data.map( (obj) => ({...obj , owner: "688f3b7f6c00a6c753dc7798" }) )
        await Listing.insertMany(initData.data) ;
    } ;
    initDB();
  