const pug = require("pug");
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","pug");
app.set("views", "./views");
app.listen(1234);


app.get("/", function(req, res) {
	res.render("home");
});
app.get("/search", function(req, res) {
	res.render("search");
});