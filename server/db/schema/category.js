var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var category = new Schema({

    badge:[String]

})

const Category = mongoose.model('Category', category)

module.exports = category