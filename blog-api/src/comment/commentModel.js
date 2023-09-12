const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    blogId:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    userId:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    userName:{
        type:String ,
        required:true,
        trim:true,
    },
    commentText:{
        type:String,
        required:true
    },
    commentDate : {
        type : Date,
        required:true,
        default: ()=> new Date()
    }
} ); 
var comment = mongoose.model('comment',commentSchema); 
module.exports = comment;