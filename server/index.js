const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const PORT = 5000;
const API_KEY = require("../config.js").API_KEY;
const { getBusinessList } = require("./apihelper.js");
const db = require('../db');


app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});

app.get('/restaurants', (req, res) => {
  getBusinessList(req, res)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log('ERROR IN app.get /restaurants: ', err);
    })
})


app.get('/restaurants/fav', (req, res) => {
  db.getFav()
  .then((results) => {
    res.send(results[0])
  })
  .catch((err) => {
    console.log('ERROR IN app.get /restaurants/fav: ', err)
  })
})

app.post('/restaurants/add', (req, res) => {
  db.save(req.body)
  .then((results) => {
    res.send(results)
  })
  .catch((err) => {
    console.log('ERROR IN app.post add: ', err)
  })
})

app.post('/restaurants/remove', (req, res) => {
  //console.log(req.body);
  db.remove(req.body)
  .then((results) => {
    res.send(results)
  })
  .catch((err) => {
    console.log('ERROR IN app.post /restaurants/remove: ', err)
  })
})