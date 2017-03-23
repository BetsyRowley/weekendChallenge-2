//requires and globals
var express = require("express");
var router = express.Router();

//Routes
router.post("/", function(req, res) {
    var equationSolver = req.body;
    console.log(equationSolver);
    ///run the computer logic

    var result = eval(equationSolver.value1 +
                    equationSolver.operation +
                    equationSolver.value2);


    console.log(result);
    var finalResult = result.toString();
    res.send(finalResult);
});
//exports

module.exports = router;
