var connection = require("./connection.js");

var orm = {
    all: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    create: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString();
        queryString += ") VALUES (?);";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    update: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table + " SET ";
        queryString += objColVals;
        queryString += " WHERE " + condition + ";";
        console.log(queryString);
    }
}




module.exports = orm;