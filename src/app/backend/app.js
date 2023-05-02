const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var passport = require('passport')

const OfficerModel = require('./models/Officers')
// const ArticleModel = require('./models/News')
const PhotoModel = require('./models/Media')
const User = require('./models/users') //?
require('./config/passport'); //?


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
app.use(passport.initialize()); //?
// app.use('/api', routesApi); //?


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
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

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


app.post("/api/photos",(req,res,next)=>{
  const photo = new PhotoModel({
    picture: req.body.picture,
    date: req.body.date,
    description: req.body.description,
    tags: req.body.tags
  })
  photo.save()
  console.log(photo)
  res.status(201).json({
    message: 'Photo Created Successfuly'
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

//Need to require some kind of secred code. Don't want just anyone to be able to make an account
app.post('/api/register',(req,res,next)=>{
  var user = new User();

  user.username = req.body.name;
  user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
})

app.post('/api/login',(req,res,next)=>{
  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
})




// put in mongoose
// just app.get


module.exports = app;
