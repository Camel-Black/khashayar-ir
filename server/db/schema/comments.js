var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var comments = new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    title:{
        required: true,
        type: String,
    },
    content:{
        required:true,
        type:String
    }
    
})


const Comments = mongoose.model('Comments',comments)

module.exports = Comments