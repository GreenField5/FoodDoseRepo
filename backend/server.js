const express=require('express');
const app=express();
const routers=require('./routes');

const bodyParser = require('body-parser');
const database = require('./db');
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname+'/../frontend/build'))

app.get('/', (req,res) => {
   
    res.json({mess :"welcome welcome"})
    
  })
app.use('/fooddose',routers)
module.exports=app;

