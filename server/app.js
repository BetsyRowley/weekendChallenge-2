var express = require("express");
var app = express();
var port = "8000";


//Routes static content to server
app.use(express.static("server/public", {
  index: "views/index.html"
}));


//Activate body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

//Route POST request to /equationSolver
app.post("/equationSolver", function(req, res) {
    var equationSolver = req.body;
    console.log(equationSolver);
    ///run the computer logic
    var result = parseInt(equationSolver.value1) + parseInt(equationSolver.value2);
    console.log(result);
    var finalResult = result.toString();
    res.send(finalResult);
    // res.sendStatus(200);

}); //ends post request


//server is listening
app.listen(port);
console.log("Listening on port " + port);
