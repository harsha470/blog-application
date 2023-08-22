const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    lastName:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    email:{
        type:String ,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
} ); 
var user = mongoose.model('user',userSchema); 
module.exports = user;