// backend/mysql.js
const mysql = require('mysql2/promise');

async function getConnection(){
  const conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST || 'mysql',
    user: process.env.MYSQL_USER || 'mysqluser',
    password: process.env.MYSQL_PASSWORD || 'mysql_password',
    database: process.env.MYSQL_DATABASE || 'mydb'
  });
  return conn;
}

module.exports = { getConnection };
