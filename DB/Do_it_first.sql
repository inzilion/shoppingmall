path PATH=C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;c:\Program Files (x86)\Microsoft SQL Server\100\Tools\Binn\;c:\Program Files\Microsoft SQL Server\100\Tools\Binn\;c:\Program Files\Microsoft SQL Server\100\DTS\Binn\;C:\Program Files\nodejs\;C:\Program Files\Git\cmd;C:\Program Files\MySQL\MySQL Shell 8.0\bin\;C:\Users\admin\AppData\Local\Microsoft\WindowsApps;C:\Program Files\Bandizip\;C:\Users\admin\AppData\Local\Programs\Microsoft VS Code\bin;C:\Users\admin\AppData\Roaming\npm;C:\Program Files\MySQL\MySQL Server 8.0\bin

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