const Listing = require("./models/listing.js")
const Review = require("./models/reviews.js") ;

const ExpressError = require("./utils/expresserror.js") ;
const {reviewSchema} = require("./schema.js") ;


module.exports.isloggedIn = (req , res , next) =>{

     if( !req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl ;
        
        req.flash("error" , "You must be logged in!") ;
        return  res.redirect("/login");
    }
    
    next() ;
}

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl) {
      
        res.locals.redirectUrl = req.session.redirectUrl ;
    }
    next() ;
}
module.exports.isOwner= async(req, res , next) =>{
     let{id} = req.params ;
    let listing = await  Listing.findById(id) ;
   if ( !listing.owner.equals(res.locals.currUser._id)){
    req.flash("error" , "You are not the owner of this listing") ;
   return  res.redirect(`/listings/${id}/show`) ;
   }
   next() ;
}
module.exports.isAuthor= async(req, res , next) =>{
     let{id, reviewId} = req.params ;
    let review= await  Review.findById(reviewId) ;
   if ( !review.author.equals(res.locals.currUser._id)){
    req.flash("error" , "You are not the author of this review") ;
   return  res.redirect(`/listings/${id}/show`) ;
   }
   next() ;
}

module.exports.validateReview = ( req , res , next)=>{
    let {error} = reviewSchema.validate(req.body) ;
    if(error){
      let errMsg = error.details.map((el)=> el.message.join(", ")  ) ;
      throw new ExpressError(400 , errMsg)
    }
    if(!error){
      next();
    }
}