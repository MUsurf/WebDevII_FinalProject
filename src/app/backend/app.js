const express = require('express')
const app = express()
const port = 3000

const HomeModel = require('./models/Officer')
const ArticleModel = require('./models/Article')
const PhotoModel = require('./models/Photo')
//home, news, media

mongoose.connect('mongodb+srv://SURF_Webmaster:2MQjduCM4U9q7eGx@mizzousurf.l9qioaf.mongodb.net/test')
  .then(()=>{
    console.log('Connected to database')
  })
  .catch(()=>{
    console.log('connection error')
})


app.get('/', (req, res) => {

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// put in mongoose
// just app.get
