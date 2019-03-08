module.exports = {
  rate: getRate(weight, type, zip)
};

function getRate(weight, type, zip) {
  var price = 0;
  switch (type) {
    case "letters-stamped":
      price = lettersStamped(weight);
      break;
    case "letters-metered":
      price = lettersMetered(weight);
      break;
    case "lg-envelope":
      price = largeEnvelope(weight);
      break;
    case "first-class":
      price = firstClass(weight, zip);
      break;
    default:
      console.log("No type selected");
  }

  // convert price into currency form
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  price = formatter.format(price);
  
  return price;
}

function lettersStamped(weight) {
  var price;
  if(weight <= 1.0)
  {
    price = 0.55;
  }
  else if (weight <= 2.0)
  {
    price = 0.70;
  }
  else if (weight <= 3.0)
  {
    price = 0.85;
  }
  else if (weight <= 3.5)
  {
    price = 1.00;
  }
  else
  {
    // weight is greater than 3.5 oz
    price = largeEnvelope(weight);
  }

  return price;
}

function lettersMetered(weight) {
  var price;
  
  if(weight <= 1.0)
  {
    price = 0.50;
  }
  else if(weight <= 2.0)
  {
    price = 0.65;
  }
  else if(weight <= 3.0)
  {
    price = 0.80;
  }
  else if(weight <= 3.5)
  {
    price = 0.95;
  }
  else
  {
    // weight is greater than 3.5 oz
    price = largeEnvelope(weight);
  }

  return price;
}

function largeEnvelope(weight) {
  var price;

  if(weight <= 1.0)
  {
    price = 1.00;
  }
  else if(weight <= 2.0)
  {
    price = 1.15;
  }
  else if(weight <= 3.0)
  {
    price = 1.30;
  }
  else if(weight <= 4.0)
  {
    price = 1.45;
  }
  else if(weight <= 5.0)
  {
    price = 1.60;
  }
  else if(weight <= 6.0)
  {
    price = 1.75;
  }
  else if(weight <= 7.0)
  {
    price = 1.90;
  }
  else if(weight <= 8.0)
  {
    price = 2.05;
  }
  else if(weight <= 9.0)
  {
    price = 2.20;
  }
  else if(weight <= 10.0)
  {
    price = 2.35;
  }
  else if(weight <= 11.0)
  {
    price = 2.50;
  }
  else if(weight <= 12.0)
  {
    price = 2.65;
  }
  else if(weight <= 13.0)
  {
    price = 2.80;
  }

  return price;
}

function firstClass(weight, zip) {
  var price;

  if(weight <= 4.0)
  {
    price = 3.66;
  }
  else if(weight <= 8.0)
  {
    price = 4.39;
  }
  else if(weight <= 12.0)
  {
    price = 5.19;
  }
  else if(weight <= 13.0)
  {
    price = 5.71;
  }
  return price;

}