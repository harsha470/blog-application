const {connectToMongo} = require('./database/mongodb')
const express = require('express') ; 
const jwt = require('jsonwebtoken') ; 
const secretKey = "harshavardhan"  ; // used in jwt tokenisation ; 
const mongoose = require('mongoose') ; 
const cors  = require('cors') ;
const bodyparser = require('body-parser')  ;
const app = express()  ;

const url = "mongodb+srv://harsha:harsha123@cluster0.zthjn57.mongodb.net/?retryWrites=true&w=majority" 
 
connectToMongo(url).then(()=>{
    console.log("connection is established");
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json()) ; 
app.use(cors()) ; 

app.get("/ping", (req,res)=> res.send("pong"))
    
const loginRouter = require('./routes/loginRouter') ; 
app.use('/login',loginRouter) ; 
const registerRouter = require('./routes/registerRouter');
app.use('/register' , registerRouter);
const blogRouter = require('./routes/blogRouter') ; 
app.use('/blog', blogRouter) ; 
const userRouter = require('./routes/userRouter'); 
app.use('/user', userRouter) ; 


app.listen(3000,()=>{
    console.log("server is listening") ; 
   
})  


