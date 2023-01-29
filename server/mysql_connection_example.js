const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'PUT HERE YOUR HOST ADDRESS',
    user: 'PUT HERE YOUR MYSQL OR MARIADB USER',
    password: 'PUT HERE YOUR MYSQL OR PASSWORD',
    database: 'sol_example'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log('An error ocurred when trying to connect into the database ', err);
    } else {
        console.log('Database connected successfully');
    }
});

module.exports = mysqlConnection;
