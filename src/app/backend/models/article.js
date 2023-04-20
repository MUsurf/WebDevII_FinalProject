const mongoose = require('mongoose')

articleSchema = mongoose.Schema({
  date: {type:Date, required: true},
  title: {type:String, required: true},
  description: {type:String, required: true}
})

module.exports = mongoose.model('Article',articleSchema)
