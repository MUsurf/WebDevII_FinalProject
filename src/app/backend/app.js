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


app.get('/', (req, res) => {
  const officers = new OfficerModel({
    name: req.body.name,
    title: req.body.title,
    picture: req.body.picture,
    email: req.body.email,
    description: req.body.description
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// put in mongoose
// just app.get
