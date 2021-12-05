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


const save = ({ id, business_name, rating, category, price, business_location, distance, review_count, yelp }) => {
  const query =
    `INSERT INTO favorites (id, business_name, rating, category, price, business_location, distance, review_count, yelp)
    VALUES(?,?,?,?,?,?,?,?,?)`;
  const args = [id, business_name, rating, category, price, business_location, distance, review_count, yelp];
  return connection.promise().query(query, args);
};

// const remove = ({ id, title, release_date, vote_count }) => {
//   const query = "DELETE FROM movies WHERE id=?";
//   const args = [id];
//   return connection.promise().query(query, args);
// };

module.exports.save = save;
// module.exports.remove = remove;
// module.exports.connection = connection;
// module.exports.connection.connect = connection.connect;