
const Listing = require("../models/listing.js") ;
const wrapAsync = require("../utils/wrapAsync.js") ;



module.exports.index = async(req , res)=>{
    let alllistings = await Listing.find({}) ;
    
   res.render("listings/index.ejs" , { alllistings : alllistings}) ;
}
module.exports.renderCreate = (req , res)=>{
  
    res.render("listings/new.ejs")
} ;

module.exports.createListing =  wrapAsync(
    async(req , res ,next)=>{
        req.flash("success" , "New listing created") ;
       let  listing= req.body.listing ;
      listing.owner = req.user._id ;
      let url = req.file.path ;
      let file = req.file.filename ;
      listing.image = { url , file} ;
     
       listing["inner"] =  req.body.image ;

      await Listing.insertMany(listing ) ;
      
     res.redirect("http://localhost:8082/listings") ; 
 
    
} ) ;

module.exports.show = wrapAsync(
    async(req , res)=>{
    let {id} = req.params ;
    console.log(req.params) ;
    let item = await Listing.findById(id)
    .populate( {path :"reviews",
     populate:{ path: "author"} })
    .populate("owner") ;
    if(!item){
        req.flash("error" , "Listing you requested for doesnot exist.") ;
        res.redirect("/listings") ;
    }
    res.render("listings/show.ejs" , {item }) ;
}) ;

module.exports.renderUpdate =    wrapAsync(
    async(req , res)=>{
    let id= req.params ;
    let item = await Listing.findById(id.id) ;
    let originalImg = item.image.url ;
  originalImg=  originalImg.replace("/upload" , "/upload/w_250") ;
    res.render("listings/update.ejs" , {item , originalImg}) ;
}) 

module.exports.Update =   wrapAsync(
   async(req , res)=>{
    let{id} = req.params ;
     
 let  item=  await Listing.findByIdAndUpdate(id ,{...req.body.listing}) ;
  if( typeof req.file !== "undefined"){
    let url = req.file.path ;
      let file = req.file.filename ;
      item.image = {url , file} ;
      await item.save();
  }
   
 if(!item){
    req.flash("error" , "Listing you requested for doesnot exist.") ;
    res.redirect("/listings") ;
}
 req.flash("success" , "Listing was updated !") ;
 
res.redirect(`/listings/${id}/show`) ;
})  
module.exports.filter =async(req, res)=>{
   console.log("request triggered");
    let {category} = req.params ;
   
    let alllistings = await Listing.find( {category: category});
    res.render("listings/filter.ejs", {alllistings : alllistings , category}) ;
}

module.exports.destroyListing =  wrapAsync(async(req , res)=>{
     let {id} = req.params ;
 let   listing=   await Listing.findById(id).populate("owner") ;
   await Listing.deleteOne(listing);
     req.flash("success" , "Listing deleted!") ;

     res.redirect("http://localhost:8082/listings") ;
     
})