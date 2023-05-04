const mongoose = require('mongoose')

photoSchema = mongoose.Schema({
  picture: {type:String, required: true },
  date: {type:Date, required: true},
  description: {type:String, required: true},
  tags: {type:[String], required: true}
})

module.exports = mongoose.model('Photo',photoSchema)
