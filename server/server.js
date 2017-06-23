const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config.js')
const controller = require('./serverCtrl.js')

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var app = express()
app.use(bodyParser.json())

app.get('/getAll', controller.getAll)
app.get('/getDetails/:ID', controller.getDetails)
app.get('/getImages/:Type', controller.getImages)

app.listen(3000, function(){
  console.log("listening on port 3000")
})
