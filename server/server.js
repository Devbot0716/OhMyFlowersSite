// require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , config = require('./config.js')
    , controller = require('./serverCtrl.js')
    , cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors());
massive(config.database).then(db =>
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

app.listen(3000, ( )=>{
  console.log("listening on port 3000");
});
