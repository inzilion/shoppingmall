CREATE SCHEMA shoppingmall;

USE shoppingmall;

CREATE TABLE customers (
  idcustomers INT NOT NULL AUTO_INCREMENT,
  id          VARCHAR(20) NOT NULL,
  name        VARCHAR(30) NOT NULL,
  phone       VARCHAR(13),
  email       VARCHAR(40),
  pw          VARCHAR(30) NOT NULL,
  address     VARCHAR(50),
  PRIMARY KEY(idcustomers));

INSERT INTO customers (id, name, pw) VALUES ('tester', '테스터훈', '1234');

CREATE USER 'shoppingmall'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON shoppingmall.* TO 'shoppingmall'@'%';