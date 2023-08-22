const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
    title : {
        type : String
      },
      desc : {
        type : String 
      },
      author : {type :String}
} , {timestamps:true}); 
var blog = mongoose.model('blog',blogSchema); 
module.exports = blog;