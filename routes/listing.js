const express = require("express") ;
const router = express.Router() ;
const {listingSchema } = require("../schema.js") ;
const ExpressError = require("../utils/expresserror.js") ;
const joi = require("joi") ;
const {isloggedIn ,isOwner} = require("../middleware.js") ;
router.use(express.urlencoded({extended : true})) ;
const listingController = require("../controllers/listing.js") ;
const multer = require("multer") ;
const {storage} = require("../cloudconfig.js")
const upload = multer( {storage}) ;

const validateListing = ( req , res , next)=>{
    let {error} = listingSchema.validate(req.body) ;
  
      if(error){
      // let errMsg = error.details.map((el)=> el.message.join(",")  ) ;
      // throw new ExpressError(400 , errMsg)
      const errorMessages = error.details.map(el => Array.isArray(el.message) ? el.message.join(', ') : el.message);
       throw new ExpressError(400 , errorMessages ) ;
    }
    
    if(!error){
      next();
    }
}

//index route
router.get("/listings" ,  listingController.index );


//create route
router
.route("/listings/new")
.get(isloggedIn, listingController.renderCreate)
.post(isloggedIn,upload.single('listing[image]'), listingController.createListing ) ;

//filter
router.get("/listings/filter/:category", listingController.filter );

//show route
router.get("/listings/:id/show" , listingController.show );

 //update route
router
.route("/listings/:id/update")
.get(
    isloggedIn,
    isOwner ,
  listingController.renderUpdate)
.put( isOwner ,
     upload.single('listing[image]') ,
   listingController.Update 
) ;

//delete route
router.delete("/listings/:id/delete" 
  ,  isloggedIn,
    isOwner ,
    listingController.destroyListing );

module.exports = router ;