var connection = require("./connection.js");
var burger = require("/Users/Programming 2.0/Desktop/Github/eatBurger/models/burger")
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var orm = {
    selectAll: function () {
        var queryString = "abc";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function () {
        var queryString = "abc";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function () {
        var queryString = "abc";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;