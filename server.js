const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
var url = require('url');
var cookieParser = require('cookie-parser')    //for cookie parsing
var csrf = require('csurf')    //csrf module
var csrfProtection = csrf({ cookie: true })

const app = express();
const port = process.env.PORT || 3000;


const db = require("./db");
const dbName = "Movies_db";
const collectionName = "movies";

var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectID;

app.use(cookieParser());
// EJS view template engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        res.render('index', {contents:JSON.stringify(result)});
       
  
    });
});
});
app.get('/', function(req, res) {
 
res.render('index');
 
  
});