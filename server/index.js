const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));
app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
