const express = require("express");
const bodyParser = require("body-parser");
var calculate = require("./calculateRate.js");
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
  var zip = Number(req.body.zip);

  console.log("Weight = " + weight + " Type = " + type + " Zip = " + zip);

  // calculate the rate based on inputs
  var rate = calculate.rate(weight, type, zip);
  //var rate = calculateRate(weight, type, zip);

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

// function calculateRate(weight, type, zip) {
//   var rate = 0;
//   switch (type) {
//     case "letters-stamped":
//       rate = lettersStamped(weight);
//       break;
//     case "letters-metered":
//       rate = lettersMetered(weight);
//       break;
//     case "lg-envelope":
//       rate = largeEnvelope(weight);
//       break;
//     case "first-class":
//       rate = firstClass(weight, zip);
//       break;
//     default:
//       console.log("No type selected");
//   }

//   var formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });

//   rate = formatter.format(rate);
//   return rate;

// }

// function lettersStamped(weight) {
//   var price;
//   if(weight <= 1.0)
//   {
//     price = 0.55;
//   }
//   else if (weight <= 2.0)
//   {
//     price = 0.70;
//   }
//   else if (weight <= 3.0)
//   {
//     price = 0.85;
//   }
//   else if (weight <= 3.5)
//   {
//     price = 1.00;
//   }
//   else
//   {
//     // weight is greater than 3.5 oz
//     price = largeEnvelope(weight);
//   }

//   return price;
// }

// function lettersMetered(weight) {
//   var price;
  
//   if(weight <= 1.0)
//   {
//     price = 0.50;
//   }
//   else if(weight <= 2.0)
//   {
//     price = 0.65;
//   }
//   else if(weight <= 3.0)
//   {
//     price = 0.80;
//   }
//   else if(weight <= 3.5)
//   {
//     price = 0.95;
//   }
//   else
//   {
//     // weight is greater than 3.5 oz
//     price = largeEnvelope(weight);
//   }

//   return price;
// }

// function largeEnvelope(weight) {
//   var price;

//   if(weight <= 1.0)
//   {
//     price = 1.00;
//   }
//   else if(weight <= 2.0)
//   {
//     price = 1.15;
//   }
//   else if(weight <= 3.0)
//   {
//     price = 1.30;
//   }
//   else if(weight <= 4.0)
//   {
//     price = 1.45;
//   }
//   else if(weight <= 5.0)
//   {
//     price = 1.60;
//   }
//   else if(weight <= 6.0)
//   {
//     price = 1.75;
//   }
//   else if(weight <= 7.0)
//   {
//     price = 1.90;
//   }
//   else if(weight <= 8.0)
//   {
//     price = 2.05;
//   }
//   else if(weight <= 9.0)
//   {
//     price = 2.20;
//   }
//   else if(weight <= 10.0)
//   {
//     price = 2.35;
//   }
//   else if(weight <= 11.0)
//   {
//     price = 2.50;
//   }
//   else if(weight <= 12.0)
//   {
//     price = 2.65;
//   }
//   else if(weight <= 13.0)
//   {
//     price = 2.80;
//   }

//   return price;
// }

// function firstClass(weight, zip) {
//   var price;

//   if(weight <= 4.0)
//   {
//     price = 3.66;
//   }
//   else if(weight <= 8.0)
//   {
//     price = 4.39;
//   }
//   else if(weight <= 12.0)
//   {
//     price = 5.19;
//   }
//   else if(weight <= 13.0)
//   {
//     price = 5.71;
//   }
//   return price;

// }

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