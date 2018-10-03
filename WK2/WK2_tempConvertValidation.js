/*This is a program that converts the temperature from fahrenheit to celsius */
alert("The Temperature Conversion application");
for(counter=0; counter<=3; counter++)
    {
//accepting the temperature in fahrenheit and saving it in a variables called F
var F = parseFloat(prompt("Enter the temperature in degrees Fahrenheit"));
if(isNaN(F)==true){
    alert("Please enter a valid number.")
}
else{
//convert the temperature from fahrenheit to celsius and store in a variable called C
var C = (F-32) * (5/9);
alert("The temperature in Celsius is = " + C.toFixed(2));
    }
}