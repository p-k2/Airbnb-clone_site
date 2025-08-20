       const express = require("express") ;
       const router = express.Router({mergeParams : true} );
       const methodOverride= require("method-override") ;
       const {validateReview, isloggedIn, isAuthor} = require("../middleware.js")
       const reviewController = require("../controllers/review.js") ;
      router.use(express.urlencoded({extended : true})) ;
      router.use(methodOverride("_method") ) ;


//create review
    router.post("/" ,
      isloggedIn,
      validateReview,
        reviewController.createReview) ;


     //delete review 
    router.delete("/:reviewId" ,
      isloggedIn,
      isAuthor,
      reviewController.destroyReview) ;
     module.exports= router ;