const mysql = require("mysql2");
const config = require('../config.js').mysqlConfig;

 const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("MySql database connected!");
});


const save = ({ img, business_name, rating, category, price, business_location, distance, review_count, yelp }) => {
  const query =
    `INSERT INTO favorites (img, business_name, rating, category, price, business_location, distance, review_count, yelp)
    VALUES(?,?,?,?,?,?,?,?,?)`;
  const args = [img, business_name, rating, category, price, business_location, distance, review_count, yelp];
  return connection.promise().query(query, args);
};

const getFav = () => {
  const query = 'SELECT * FROM favorites';
  return connection.promise().query(query);
}

const remove = ({ yelp }) => {
  const query = `DELETE FROM favorites WHERE yelp=?`;
  const args = [yelp];
  return connection.promise().query(query, args);
};

module.exports.save = save;
module.exports.getFav = getFav;
module.exports.remove = remove;
// module.exports.connection = connection;
// module.exports.connection.connect = connection.connect;