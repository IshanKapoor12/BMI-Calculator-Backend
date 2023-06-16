const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function(req, res){
    var n1 = parseFloat(req.body.w);
    var n2 = parseFloat(req.body.h);
    var n = n1/(n2*n2);
    res.send("Your BMI is: " + n);
});

app.listen(3000, function(){
    console.log("The server has started on port 3000.");
});
