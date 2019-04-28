var connection = require("../config/connection.js");

var orm = {
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers;", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    insertOne: function(inputvalue,callback) {
         connection.query("INSERT INTO burgers (burger_name) VALUES (?);",inputvalue, function (err, res) {
            if (err) throw err;
             callback(res);
        })
    },
    updateOne: function(inputvalue,callback) {
         connection.query("UPDATE burgers SET devoured = 1 where id = ?;",inputvalue, function (err, res) {
            if (err) throw err;
             callback(res);
        })
    }
}

module.exports = orm;
