var express = require("express");
var app = express();



app.get("/", function (req, res){
	res.send("hello word");
});

app.listen(process.env.PORT || 5050);

module.exports = app;