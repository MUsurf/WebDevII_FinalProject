const express = require('express')
const app = express()
const port = 3000

const OfficerModel = require('./models/Officer')
const ArticleModel = require('./models/Article')
const PhotoModel = require('./models/Photo')



mongoose.connect('mongodb+srv://SURF_Webmaster:2MQjduCM4U9q7eGx@mizzousurf.l9qioaf.mongodb.net/test')
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
      posts: documents
    })
  })
})

app.get('/api/articles',(req,res,next)=>{
  ArticleModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      posts: documents
    })
  })
})

app.get('/api/photos',(req,res,next)=>{
  PhotoModel.find().then(documents=>{
    res.status(200).json({
      message: "This is fetched data",
      posts: documents
    })
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// put in mongoose
// just app.get
