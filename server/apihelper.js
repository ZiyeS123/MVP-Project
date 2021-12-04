const axios = require("axios");
const API_KEY = require("../config.js").API_KEY;

module.exports = {
  getBusinessList: function(req, res) {
    const { term, location, sort_by, price } = req.query;
    return axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&price=${price}&sort_by=${sort_by}`,
      { headers: { 'Authorization': API_KEY }}
    )
  }
}