var connection = require(connection)

module.exports.selectAll = function (callback) {
    return connection.query("SELECT * FROM burgers;", function (err, res) {
        if (err) throw err;
        return callback(res);
    })
};

module.exports.insertOne = function (inputvalue,callback) {
    return connection.query("INSERT INTO burgers (burger_name) VALUES ('?');",inputvalue, function (err, res) {
        if (err) throw err;
        return callback(res);
    })
};

module.exports.updateOne = function (inputvalue,callback) {
    return connection.query("UPDATE burgers SET devoured = 1 where id = ?;",inputvalue, function (err, res) {
        if (err) throw err;
        return callback(res);
    })
};
