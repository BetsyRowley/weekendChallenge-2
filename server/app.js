var express = require("express");
var app = express();
var port = "8000";

var solver = require("./modules/solver.js");


//Routes static content to server
app.use(express.static("server/public", {
  index: "views/index.html"
}));


//Activate body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//Route POST request to /equationSolver
app.use("/equationSolver", solver);


//server is listening
app.listen(port);
console.log("Listening on port " + port);
