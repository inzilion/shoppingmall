create table customers (
  idcustomers INT NOT NULL AUTO_INCREMENT,
  id          VARCHAR(20) NOT NULL,
  name        VARCHAR(30) NOT NULL,
  phone       VARCHAR(13),
  email       VARCHAR(40),
  pw          VARCHAR(30) NOT NULL,
  address     VARCHAR(50),
  PRIMARY KEY(idcustomers));