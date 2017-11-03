console.log("Node is running (in the server.js dir)!");
const express = require("express");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log('req.body')
})
