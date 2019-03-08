function rate(weight, type, zip) {

  console.log("function rate() called");

  // call the correct function based on type of mail
  var rate = 0;
  switch (type) {
    case "letters-stamped":
      rate = lettersStamped(weight);
      break;
    case "letters-metered":
      rate = lettersMetered(weight);
      break;
    case "lg-envelope":
      rate = largeEnvelope(weight);
      break;
    case "first-class":
      rate = firstClass(weight, zip);
      break;
    default:
      console.log("No type selected");
  }

  // format rate for currency
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  rate = formatter.format(rate);

  return rate;
}


  /**** Stamped Letter prices ****/
  function lettersStamped(weight) {

    console.log("function lettersStamped() called");

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

  /**** Metered Lettered Prices ****/
  function lettersMetered(weight) {

    console.log("function lettersMetered() called");
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

  /**** Large Envelope Prices ****/
  function largeEnvelope(weight) {

    console.log("function largeEnvelope() called");
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

  /**** First Class Package Prices ****/
  function firstClass(weight, zip) {

    console.log("function firstClass() called");
    var price;

    // determine the zone based on zip code
    var zone = getZone(zip);
    console.log("Zone = " + zone);

    switch (zone) {
      case 1:
      case 2:
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
        break;
      case 3:
        if(weight <= 4.0)
        {
          price = 3.70;
        }
        else if(weight <= 8.0)
        {
          price = 4.44;
        }
        else if(weight <= 12.0)
        {
          price = 5.24;
        }
        else if(weight <= 13.0)
        {
          price = 5.78;
        }
        break;
      case 4:
        if(weight <= 4.0)
        {
          price = 3.74;
        }
        else if(weight <= 8.0)
        {
          price = 4.49;
        }
        else if(weight <= 12.0)
        {
          price = 5.30;
        }
        else if(weight <= 13.0)
        {
          price = 5.85;
        }
        break;
      case 5:
        if(weight <= 4.0)
        {
          price = 3.78;
        }
        else if(weight <= 8.0)
        {
          price = 4.53;
        }
        else if(weight <= 12.0)
        {
          price = 5.35;
        }
        else if(weight <= 13.0)
        {
          price = 5.93;
        }
        break;
      case 6:
        if(weight <= 4.0)
        {
          price = 3.82;
        }
        else if(weight <= 8.0)
        {
          price = 4.57;
        }
        else if(weight <= 12.0)
        {
          price = 5.40;
        }
        else if(weight <= 13.0)
        {
          price = 5.99;
        }
        break;
      case 7:
        if(weight <= 4.0)
        {
          price = 3.94;
        }
        else if(weight <= 8.0)
        {
          price = 4.69;
        }
        else if(weight <= 12.0)
        {
          price = 5.53;
        }
        else if(weight <= 13.0)
        {
          price = 6.13;
        }
        break;
      case 8:
      case 9:
        if(weight <= 4.0)
        {
          price = 4.06;
        }
        else if(weight <= 8.0)
        {
          price = 4.81;
        }
        else if(weight <= 12.0)
        {
          price = 5.66;
        }
        else if(weight <= 13.0)
        {
          price = 6.27;
        }
    }

    return price;

  }

  /**** zip code zone for packages mailed from 27540 ****/
  function getZone(zip) {

    console.log("function getZone() called");

    var zone;
    if ((zip >= "28300" && zip <= "28699") ||
        (zip >= "27000" && zip <= "27999") ) {
      zone = 1;
    }
    else if ((zip >= "22400" && zip <= "22599") ||
            (zip >= "22800" && zip <= "24199") ||
            (zip >= "24300" && zip <= "24599") ||
            (zip >= "28000" && zip <= "28299") ||
            (zip >= "29700" && zip <= "29799") ) {
      zone = 2;
    }
    else if ((zip >= "15500" && zip <= "15599") ||
            (zip >= "15700" && zip <= "15999") ||
            (zip >= "16600" && zip <= "16699") ||
            (zip >= "16800" && zip <= "16899") ||
            (zip >= "19300" && zip <= "19399") ||
            (zip >= "19700" && zip <= "22399") ||
            (zip >= "22600" && zip <= "22799") ||
            (zip >= "24200" && zip <= "24299") ||
            (zip >= "24600" && zip <= "25399") ||
            (zip >= "25500" && zip <= "25999") ||
            (zip >= "26100" && zip <= "26499") ||
            (zip >= "26600" && zip <= "26899") ||
            (zip >= "28700" && zip <= "29699") ||
            (zip >= "29800" && zip <= "29999") ||
            (zip >= "30800" && zip <= "30999") ||
            (zip >= "37600" && zip <= "37999") ||
            (zip >= "40700" && zip <= "40999") ||
            (zip >= "41100" && zip <= "41299") ||
            (zip >= "41500" && zip <= "41899") ||
            (zip >= "42500" && zip <= "42699") ) {
      zone = 3;
    }
    else if ((zip >= "00500" && zip <= "00599") ||
            (zip >= "01000" && zip <= "02999") ||
            (zip >= "05500" && zip <= "05599") ||
            (zip >= "06000" && zip <= "15499") ||
            (zip >= "15600" && zip <= "15699") ||
            (zip >= "16000" && zip <= "16599") ||
            (zip >= "16700" && zip <= "16799") ||
            (zip >= "16900" && zip <= "19299") ||
            (zip >= "19400" && zip <= "19699") ||
            (zip >= "25400" && zip <= "25499") ||
            (zip >= "26000" && zip <= "26099") ||
            (zip >= "26500" && zip <= "26599") ||
            (zip >= "30000" && zip <= "30799") ||
            (zip >= "31000" && zip <= "32999") ||
            (zip >= "33500" && zip <= "33899") ||
            (zip >= "34200" && zip <= "34799") ||
            (zip >= "35000" && zip <= "36499") ||
            (zip >= "36700" && zip <= "36899") ||
            (zip >= "37000" && zip <= "37499") ||
            (zip >= "38400" && zip <= "38599") ||
            (zip >= "39800" && zip <= "40699") ||
            (zip >= "41000" && zip <= "41099") ||
            (zip >= "41300" && zip <= "41499") ||
            (zip >= "42000" && zip <= "42499") ||
            (zip >= "42700" && zip <= "49599") ||
            (zip >= "60900" && zip <= "60999") ||
            (zip >= "61700" && zip <= "61999") ||
            (zip >= "62400" && zip <= "62499") ) {
      zone = 4;
    }
    else if ((zip >= "03000" && zip <= "05499") ||
            (zip >= "05600" && zip <= "05999") ||
            (zip >= "33000" && zip <= "33499") ||
            (zip >= "33900" && zip <= "34199") ||
            (zip >= "34900" && zip <= "34999") ||
            (zip >= "36500" && zip <= "36699") ||
            (zip >= "36900" && zip <= "36999") ||
            (zip >= "37500" && zip <= "37599") ||
            (zip >= "38000" && zip <= "38399") ||
            (zip >= "38600" && zip <= "39799") ||
            (zip >= "49600" && zip <= "50999") ||
            (zip >= "51400" && zip <= "56199") ||
            (zip >= "60000" && zip <= "60899") ||
            (zip >= "61000" && zip <= "61699") ||
            (zip >= "62000" && zip <= "62399") ||
            (zip >= "62500" && zip <= "66899") ||
            (zip >= "68000" && zip <= "68999") ||
            (zip >= "70000" && zip <= "72999") ||
            (zip >= "74000" && zip <= "74799") ||
            (zip >= "74900" && zip <= "74999") ||
            (zip >= "75500" && zip <= "75699") ) {
      zone = 5;
    }
    else if ((zip >= "51000" && zip <= "51399") ||
            (zip >= "56200" && zip <= "58899") ||
            (zip >= "66900" && zip <= "67999") ||
            (zip >= "69000" && zip <= "69399") ||
            (zip >= "73000" && zip <= "73999") ||
            (zip >= "74800" && zip <= "74899") ||
            (zip >= "75000" && zip <= "75499") ||
            (zip >= "75700" && zip <= "79799") ||
            (zip >= "88100" && zip <= "88299") ) {
      zone = 6;
    }
    else if ((zip >= "00600" && zip <= "00999") ||
            (zip >= "59000" && zip <= "59399") ||
            (zip >= "59700" && zip <= "59799") ||
            (zip >= "79800" && zip <= "83299") ||
            (zip >= "83400" && zip <= "83499") ||
            (zip >= "84000" && zip <= "84799") ||
            (zip >= "86500" && zip <= "88099") ||
            (zip >= "88300" && zip <= "88599") ||
            (zip >= "89800" && zip <= "89899") ) {
      zone = 7;
    }
    else if ((zip >= "59400" && zip <= "59699") ||
            (zip >= "59800" && zip <= "59999") ||
            (zip >= "83300" && zip <= "83399") ||
            (zip >= "83500" && zip <= "83899") ||
            (zip >= "85000" && zip <= "86499") ||
            (zip >= "88900" && zip <= "89799") ||
            (zip >= "90000" && zip <= "96899") ||
            (zip >= "97000" && zip <= "99999") ) {
      zone = 8;
    }
    else if ((zip >= "96900" && zip <= "96999") ) {
      zone = 9;
    }
    // invalid zip codes are not checked at this time
    else {
      zone = 1;
    }

    return zone;
  }

module.exports = rate;