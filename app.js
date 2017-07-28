const pug = require("pug");
var express = require("express");
const path = require('path');
var app = express();

app.use(express.static("public"));
app.set("view engine","pug");
app.set("views", "./views");
// app.set('views', path.join(__dirname, 'views'));
app.listen(1234);


app.get("/", function(req, res) {
	res.render("home");
});
app.get("/search", function(req, res) {
	res.render("search");
});