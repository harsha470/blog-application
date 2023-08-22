const express = require('express') ; 
const jwt = require('jsonwebtoken') ; 
const secretKey = "harshavardhan"  ; // used in jwt tokenisation ; 
const mongoose = require('mongoose') ; 
const cors  = require('cors') ;
const bodyparser = require('body-parser')

const routes = require('./routes/routes') ; 
const url3 = "mongodb+srv://harsha:harsha123@cluster0.zthjn57.mongodb.net/?retryWrites=true&w=majority" ; 
const url = 'mongodb://127.0.0.1:27017/Blog-Data' ; 
const url2 = "mongodb://localhost:27017/temporary"
const app = express()  ;
mongoose.connect(url3,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("harsha") ; 
    console.log("connection is established");
    console.log("vardhan") ; 
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json()) ; 
app.use(cors()) ; 
app.use(routes) ; 
app.get("/jwt",(req,res)=>{
    res.json({
        message : "a sample api"
    })
})

app.post("/create",(req,res)=>{
    const user = {id : 1, username : "harsha" , email : "abc@test.com"} ; 

    jwt.sign({user},secretKey,{expiresIn: '1500s'},(error,token)=>{
        res.json({token}) ; 
    })
})

app.post("/profile",verifyToken,(req,res)=>{
})


function verifyToken(req,res,next) {
    const bearerHeader = req.headers['Authorization'] ; 
    if(typeof bearerHeader === 'undefined')
    {
      
    }
    else
    {
        res.send(({
            result :'invalid token'  
        }))
        res.send({
            result : 'token validated successfully'
        })
    }
    
}

// const registerRouter = require('./routes/registerRouter');
// const bodyParser = require('body-parser');
// app.use('/register' , registerRouter);


app.listen(3000,()=>{
    console.log("server is listening") ; 
   
})


