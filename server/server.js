const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const config = require('./config.js')
const controller = require('./serverCtrl.js')
const cors = require('cors')

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var app = express()
app.use(bodyParser.json())
app.use(cors());
app.get('/getAll', controller.getAll)
app.get('/getDetails/:ID', controller.getDetails)
app.get('/getImages/:Type', controller.getImages)

app.listen(3000, function(){
  console.log("listening on port 3000")
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, x-access-token , X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
