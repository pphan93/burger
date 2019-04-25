var orm = require('../db/orm')

var burger = {
    all = function (callback) {
        orm.selectAll(function (res) {
            console.log("selected!");
            callback(res);
        })
    },
    insert = function (inputvalue, callback) {
        orm.insertOne(inputvalue, function (res) {
            console.log("inserted!");
            callback(res);
        })
    },
    updateOne = function (inputvalue, callback) {
        orm.updateOne(inputvalue, function (res) {
            console.log("updated!");
            callback(res);
        })
    }
}

module.exports = burger;

