const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    desc:{
        type:String,
        required:true,
        trim:true // here we are trimming the spaces before and after the first name
    },
    authorId: { 
        type: Schema.Types.ObjectId,
        ref: 'user' 
    }

} ); 
var blog = mongoose.model('blog',blogSchema); 
module.exports = blog;