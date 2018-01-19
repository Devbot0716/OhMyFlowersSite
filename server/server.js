const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , config = require('./config.js')
    , controller = require('./serverCtrl.js')
    , cors = require('cors');
             require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db =>
    app.set('db', db)).catch((err) =>
    console.log(err));

//ENDPOINTS
app.get('/getAll', controller.getAll);
app.get('/getDetails/:ID', controller.getDetails);
app.get('/getImages/:Type', controller.getImages);

app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, x-access-token , X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const port = process.env.PORT || 3000
app.listen(port, ( )=>{
  console.log("listening on port " + port);
});
