    /*This is a program that calculates the total price for two items plus the 6% sales tax */
	alert("The Total Cost application");
	//accepting total bill amount from user and saving it in a variables called bill
	var item1 = prompt("Cost of Item #1:");
    var item2 = prompt("Cost of Item #2:");
	//convert to a float below
	item1 = parseFloat(item1);
    item2 = parseFloat(item2);
    var itemTotal = item1 + item2;
    itemTotal = itemTotal.toFixed(2);
    alert("Total price of two items: " + itemTotal);
	//calculate tax
	var tax = itemTotal * .06;
    tax = parseFloat(tax);
    tax = tax.toFixed(2);
    alert("6% Sales tax = " + tax);
    
    var totalCost = itemTotal + tax;
    totalCost = totalCost.toFixed(2);
	alert("15% tip = " + tip15.toFixed(3) + " and 20% tip = " + tip20.toFixed(3));