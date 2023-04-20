const mongoose = require('mongoose')

articleSchema = mongoose.Schema({
  date: {type:Date, required: true},
  title: {type:string, required: true},
  description: {type:string, required: true}
})

module.exports = mongoose.model('Article',articleSchema)
