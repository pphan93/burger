DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NULL,
  devoured boolean default true,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price,quantity)
VALUES ('Samsung UN65NU7100FXZC 65" 4K Ultra HD Smart LED TV', 'Electronic', 1097.99,10);

INSERT INTO products (product_name, department_name, price,quantity)
VALUES ('Playstation 4 - 1TB Slim', 'Video Games',  379.99,5);

INSERT INTO products (product_name, department_name, price,quantity)
VALUES ('ASUS GL504GV-DS74 ROG Strix Gaming Laptop, 15.6” FHD', 'Electronic', 2199.00,9);