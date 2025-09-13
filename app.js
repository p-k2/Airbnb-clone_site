
if( process.env.NODE_ENV != "production"){
require("dotenv").config() ;

}
const mongoose = require("mongoose") ;

console.log( process.env.CLOUD_NAME);

const express = require("express") ;
const ejsMate = require("ejs-mate") ;
const ExpressError = require("./utils/expresserror.js") ;
const path = require("path") ;
const methodOverride= require("method-override") ;

const app = express();
const session = require("express-session") ;
const MongoStore= require("connect-mongo") ;
const flash = require("connect-flash") ;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy ;
const User= require("./models/user.js") ;
const listingsRouter = require("./routes/listing.js") ;
const reviewsRouter = require("./routes/reviews.js") ;
const UserRouter = require("./routes/user.js") ;




const dbUrl = process.env.ATLASDB_URL ;
let hasConnected = false;

async function main() {
  if (hasConnected) return;
  hasConnected = true;
  await mongoose.connect(dbUrl);
  console.log("connection is successful");
}

main().catch((err) => {
  console.log(err);
});



app.use(express.urlencoded({extended : true})) ;
app.use(express.static(path.join(__dirname , "public"))) ;
app.use(methodOverride("_method")) ;
app.set("view engine" , "ejs") ;
app.set("views", path.join(__dirname, "views"));
app.engine("ejs" , ejsMate) ;

const store = MongoStore.create({
    mongoUrl : dbUrl ,
   crypto :{
    
    secret : process.env.SECRET
   } , 
   touchAfter : 24 *3600 ,
})
store.on("error" , ()=>{
    console.log("error in mongo session store", err) ;
})
 
const sessionOptions = {
    store,
    secret : process.env.SECRET ,
    resave : false ,
    saveUninitialized : true ,
    cookie : {
        expires : Date.now() + 7*24*60*60*1000 ,
        maxAge :7*24*60*60*1000 ,
        httpOnly : true ,

    }
}


app.use(session(sessionOptions)) ;
app.use(flash()) ;
app.use(passport.initialize()) ;
app.use(passport.session()) ;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()) ;
passport.deserializeUser(User.deserializeUser()) ;


    



app.use((req , res , next)=>{
    res.locals.success = req.flash("success") ;
     res.locals.error = req.flash("error") ;
     res.locals.currUser = req.user ;
    next();
})

app.get("/demouser" , async (req, res)=>{
    let fakeUser = new User({
        email : "abc@gmail.com", 
        username : "Greta" , 
    }) ;
  let registeredUser = await  User.register(fakeUser ,"helloworld" ) ;
  res.send(registeredUser) ;
})

app.use("/" ,listingsRouter );
app.use("/listings/:id/reviews" , reviewsRouter ) ;
app.use("/" , UserRouter ) ;

 app.all("*" , (req , res , next)=>{

        next(new ExpressError(404 , "Page not found")) ;
    })

app.use((err , req , res , next)=>{
   let {statuscode=500 , message} = err;
res.render("error.ejs" , {err}) ;

})
port = process.env.PORT ||  8082 ;

app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`) ;
});
