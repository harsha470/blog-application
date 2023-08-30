const mongoose = require('mongoose') ; 

const url = "mongodb+srv://harsha:harsha123@cluster0.zthjn57.mongodb.net/?retryWrites=true&w=majority" ; 

function connectToMongo(url){
    const options = {
        useNewUrlParser: true, useUnifiedTopology: true
    }

    return mongoose.connect(url,options)
}

module.exports = { connectToMongo} ; 

// mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>{
//     console.log("harsha") ; 
//     console.log("connection is established");
//     console.log("vardhan") ; 
// })
// .catch((err)=>{
//     console.log(err);
// })

