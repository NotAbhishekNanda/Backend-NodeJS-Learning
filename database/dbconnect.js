var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abhishek@1"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE myfirstdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});