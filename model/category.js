var mongoose = require('mongoose');


var categorySchema = new mongoose.Schema({
  category:  String,
  imageurl: String,
});

module.exports=mongoose.model('Category',categorySchema)