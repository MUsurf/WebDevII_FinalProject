const mongoose = require('mongoose')

officerSchema = mongoose.Schema({
  name: {type:string, required: true },
  title: {type:string, required: true},
  picture: {type:string, required: true},
  email: {type:string, required: true},
  description: {type:string, required: true}
})

module.exports = mongoose.model('Officer',officerSchema)

