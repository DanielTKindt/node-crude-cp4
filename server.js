console.log("Node is running (in the server.js dir)!");
const express = require("express");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express();
var db;

app.set('view engine', 'ejs');

MongoClient.connect("mongodb://localhost/", (err, database) => {
  if (err) return console.warn(err)
  db = database
});

app.listen(3000, function() {
    console.log('listening on 3000')
});

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.warn(err)
      res.render('index.ejs', {quotes: result})
    })
});

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.warn(err)
      console.log('saved to database')
      res.redirect('/');
    })
});


