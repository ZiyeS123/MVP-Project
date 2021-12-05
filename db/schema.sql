CREATE DATABASE IF NOT EXISTS mvp;

USE mvp;

DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(500),
  business_name VARCHAR(200),
  rating DECIMAL,
  category VARCHAR(200),
  price INTEGER,
  business_location VARCHAR(300),
  distance DECIMAL,
  review_count INTEGER,
  yelp VARCHAR(500)
);

