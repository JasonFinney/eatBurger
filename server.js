var express = require("express");
var bodyParser = require("body-parser");
var burger = require("./models/burger");
var mysql = require("mysql");
var orm = require("./config/orm.js");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 9000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

orm.selectAll();

orm.insertOne();

orm.updateOne();