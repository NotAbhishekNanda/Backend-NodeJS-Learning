const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhishek@1',
    database: 'storesmanagement'
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('connected');
    }
    else {
        console.log('connection failed');
    }
})

module.exports = mysqlConnection;