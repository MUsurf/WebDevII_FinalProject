const mongoose = require('mongoose')

photoSchema = mongoose.Schema({
  date: {type:Date, required: true},
  title: {type:String, required: true},
  description: {type:String, required: true}
})

module.exports = mongoose.model('Article',articleSchema)
