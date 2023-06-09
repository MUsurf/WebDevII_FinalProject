const mongoose = require('mongoose')

officerSchema = mongoose.Schema({
  name: {type:String, required: true },
  title: {type:String, required: true},
  picture: {type:String, required: true},
  email: {type:String, required: true},
  description: {type:String, required: true}
})

module.exports = mongoose.model('Officer',officerSchema)

