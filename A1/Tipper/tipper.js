    /*This is a program that calculates the 15% and 20% tip for  bill */
	alert("The Tip Calculator application");
	//accepting total bill amount from user and saving it in a variables called bill
	var bill = prompt("Enter total bill:");
	//since bill is in string format, converting it to a float below
	bill = parseFloat(bill);
	//calculating miles per gallon
	var tip15 = bill*.15;
    var tip20 = bill*.2;
	alert("15% tip = " + tip15.toFixed(3) + " and 20% tip = " + tip20.toFixed(3));