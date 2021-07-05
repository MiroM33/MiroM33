const mysql = require('mysql');


const DBconnection = mysql.createConnection({
    host     : 'db-instance-programm.cofqevihhfhk.eu-central-1.rds.amazonaws.com',
    user     : 'AdminProgramm',
    password : 'hvqUVt2_QebF-fbHxkGv6mQehz',
    database : 'MerkenDB'
  });
  
 
  DBconnection.connect(function(err) {
    if (err) {
      
    console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  
//  DBconnection.end();

  module.exports = {
    DBconnection
 }