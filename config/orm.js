var connection = require("./connection.js");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
};

var orm = {
    all: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    create: function (table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (?,?)";
        console.log(queryString);
        console.log(vals);
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    update: function (table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table + " SET devoured=1 WHERE " + condition + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    delete: function (table, condition, callback) {
        var queryString = "DELETE FROM " + table + " WHERE " + condition + ";";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};




module.exports = orm;