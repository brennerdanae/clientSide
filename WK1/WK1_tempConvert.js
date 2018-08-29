/*This is a program that converts the temperature from fahrenheit to celsius */
alert("The Temperature Conversion application");
//accepting the temperature in fahrenheit and saving it in a variables called F
var F = prompt("Enter the temperature in degrees Fahrenheit");
//since miles is in string format, converting it to a float below
F = parseFloat(F);
//convert the temperature from fahrenheit to celsius and store in a variable called C
var C = (F-32) * (5/9);
alert("The temperature in Celsius is = " + C.toFixed(2));