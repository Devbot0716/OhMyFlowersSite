const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config.js')

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var app = express()
app.use(bodyParser.json())

app.listen(3000, function(){
  console.log("listening on port 3000")
})
