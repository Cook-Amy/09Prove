const express = require("express");
const bodyParser = require("body-parser");
var calculate = require("./calculateRate");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", "views");
app.set("view engine", "ejs");

app.post('/getRate', function(req, res) {
  console.log("Received a request for /getRate");

  // get form inputs
  var weight = Number(req.body.weight);
  var type = req.body.type;
  var zip = req.body.zip;

  console.log("Weight = " + weight + " Type = " + type + " Zip = " + zip);

  // calculate the rate based on inputs
  var rate = calculate(weight, type, zip);

  console.log("Rate = " + rate);

  // convert the type to full script
  fullType = convertType(type);

  // send everything back to user
  var param = {rate: rate, weight: weight, fullType: fullType, zip: zip};
  res.render("pages/getRate", param);
});

// access correct port
let port = process.env.PORT;
if(port == null || port == "") {
  port = 8000;
}
app.listen(port, function(){
  console.log("The server is listening on port " + port);
});



/**** Convert the string for screen output ****/
function convertType(type) {
  var converted = "";

  switch (type) {
    case "letters-stamped":
      converted = "Letters (Stamped)";
      break;
    case "letters-metered":
      converted = "Letters (Metered)";
      break;
    case "lg-envelope":
      converted = "Large Envelope (Flat)";
      break;
    case "first-class":
      converted = "First-Class Package Service--Retail";
      break;
    default:
      console.log("No type selected");
  }

  return converted;
}

