       const express = require("express") ;
       const router = express.Router( );
           const passport = require("passport") ;
 const { saveRedirectUrl } = require("../middleware.js");
 const userController = require("../controllers/user.js") ;

       router
       .route("/signup")
       .get(userController.renderSignup)
       .post( userController.signup) ;


       //LOGIN
       router
       .route("/login")
       .get( userController.renderLogin)
       .post(saveRedirectUrl,
              passport.authenticate("local" ,
                             {failureRedirect : '/login',
                             failureFlash : true ,
                            }), 
              userController.Login
       );      
       // LOGOUT     
       router.get("/logout" , 
              userController.Logout
       )
       module.exports = router ;