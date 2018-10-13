DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    id INTEGER (10) NOT NULL AUTO_INCREMENT,
    product VARCHAR(45),
    dept VARCHAR (45),
    price DECIMAL (10,2),
    quantity INTEGER(10),
    PRIMARY KEY (id)
);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Leash", "Pet", 14.99, 7);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Laundry Detergent", "Household", 8.50, 13);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Cooking Pan Set", "Kitchen", 75.60, 4);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Trashbags", "Household", 9.99, 24);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Laptop", "Electronics", 755.75, 12);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Candle", "Household", 5.67, 32);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Bicycle", "Excercise", 453.87, 3);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Dog Treats", "Pet", 34.99, 20);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Book", "Entertainment", 10.31, 48);

INSERT INTO products (product, dept, price, quantity)
VALUES ("Basketball", "Exercise", 23.69, 8);

