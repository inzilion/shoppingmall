const mysql = require('mysql2');
const mysqlConfig = require('../config/mysql');
module.exports = mysql.createPool(mysqlConfig);

