const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const PORT = 5000;
const API_KEY = require("../config.js").API_KEY;
const { getBusinessList } = require("./apihelper.js");


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