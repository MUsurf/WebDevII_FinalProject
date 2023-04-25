const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')



const OfficerModel = require('./models/Officer')
const ArticleModel = require('./models/Article')
const PhotoModel = require('./models/Photo')

// mongodb+srv://SURF_Webmaster:2MQjduCM4U9q7eGx@mizzousurf.l9qioaf.mongodb.net/Officers


mongoose.connect('mongodb+srv://SURF_Webmaster:2MQjduCM4U9q7eGx@mizzousurf.l9qioaf.mongodb.net/Officers?retryWrites=true&w=majority')
  .then(()=>{
    console.log('Connected to database')
  })
  .catch(()=>{
    console.log('connection error')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/api/officers',(req,res,next)=>{
  OfficerModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      Officers: documents
    })
  })
})

// app.get('/api/articles',(req,res,next)=>{
//   ArticleModel.find().then(documents=>{
//     res.status(200).json({
//       message: "This is fetched data",
//       articles: documents
//     })
//   })
// })

// app.get('/api/photos',(req,res,next)=>{
//   PhotoModel.find().then(documents=>{
//     res.status(200).json({
//       message: "This is fetched data",
//       photos: documents
//     })
//   })
// })




// put in mongoose
// just app.get

module.exports = app;
