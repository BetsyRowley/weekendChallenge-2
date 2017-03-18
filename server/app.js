var express = require("express");
var app = express();
var port = "8000";


//Routes static content to server
app.use(express.static("server/public", {
  index: "views/index.html"
}));


//server is listening
app.listen(port);
console.log("Listening on port " + port);
