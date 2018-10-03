/*This is a program that allows a user pick between five fortunes */
	alert("The Fortune Cookie Application");

	//accept a number 1-5 from the user
	var num = prompt("To hear your fortune, select a number 1-5");
	//validate the user entered a number
while(isNaN(num)==true){
        alert("You must enter a number.");
        num = prompt("To hear your fortune, select a number 1-5");
    }
while(num < 1 || num > 5){
        alert("You must enter a either 1, 2, 3, 4, or 5.");
        num = prompt("To hear your fortune, select a number 1-5");
}
    num = parseInt(num);
    if(num==1){
        alert("The fortune cookie you seek is another cookie.");
    }
    else if(num==2){
        alert("A foolish man listens to his heart. A wise man listens to cookies.");
    }
    else if(num==3){
        alert("You will live long enough to open many fortune cookies.");
    }
    else if(num==4){
        alert("Some men dream of fortunes, others dream of cookies.");
    }
    else{
        alert("We don’t know the future, but here’s a cookie.");
    }  