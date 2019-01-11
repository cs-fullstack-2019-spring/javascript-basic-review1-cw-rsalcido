// Exercise 4
// Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)
// Log the message FTEMP Fahrenheit equals CTEMP in Celcius
// Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):




    var number= parseInt(prompt("Enter the temperature as a number."));
    var FTEMP = number;
    var CTEMP = Math.round((FTEMP - 32) * 5 / 9);

    console.log(FTEMP  + " Fahrenheit equals " + CTEMP + " in Celcius ");




