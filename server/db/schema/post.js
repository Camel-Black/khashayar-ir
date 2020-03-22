const mongoose = require('mongoose')
var Schema = mongoose.Schema

var post = new Schema({
    image:String,
    title:String,
    image:String,
    content:String,
    author:String,
    comments:[String],
    slug:{
        required: true,
        type:String,
        unique:true
    },
    timestamp: String,
    category:[String]

})

const Post = mongoose.model('Post',post)
module.exports = Post