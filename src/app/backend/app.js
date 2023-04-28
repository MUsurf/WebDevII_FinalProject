const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const OfficerModel = require('./models/Officers')
// const ArticleModel = require('./models/News')
const PhotoModel = require('./models/Media')


mongoose.connect('mongodb+srv://SURF_Webmaster:2MQjduCM4U9q7eGx@mizzousurf.l9qioaf.mongodb.net/SURF?retryWrites=true&w=majority')
  .then(()=>{
    console.log('Connected to database')
  })
  .catch(()=>{
    console.log('connection error')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  console.log('Middleware');
  next();
})


app.get('/api/officers',(req,res,next)=>{
  OfficerModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      Officers: documents
    })
  })
  console.log("in route /api/officers")
})

app.get('/api/photos',(req,res,next)=>{
  PhotoModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      photos: documents
    })
  })
})

app.post("/api/officers",(req,res,next)=>{
  const officer = new OfficerModel({
    name: req.body.name,
    title: req.body.title,
    email: req.body.email,
    picture: req.body.picture,
    description: req.body.description
  })
  officer.save()
  console.log(officer)
  res.status(201).json({
    message: 'Officer Created Successfuly'
  });
});

app.get('/api/articles',(req,res,next)=>{
  ArticleModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      articles: documents
    })
  })
})


// put in mongoose
// just app.get


module.exports = app;
