var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abhishek@1",
  database: "myfirstdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customersinfo (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), contact INT(12))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});