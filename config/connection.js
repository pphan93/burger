var mysql = require('mysql');

var config = {
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "burgers_db"
};


var connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;