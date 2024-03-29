const mysql = require('mysql2');
const pwFile = require('../hidden/pwFile.json')
// Connect to database
const db = mysql.createConnection(
    {
      //local host 
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password obscured with gitignored file
      password: pwFile.dbPassword,
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
  module.exports = db;