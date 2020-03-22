var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var user = new Schema({
    image:String,
    username:String,
    password:String,
    email:String
})


const User = mongoose.model('User',user)

module.exports = User