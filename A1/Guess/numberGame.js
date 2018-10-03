/*This is a program that asks a user to guess a random number */
alert("The Number Guess Application");
	//generate a random number
var num = parseInt(Math.floor((Math.random() * 10) + 1));
alert(num);
var counter = parseInt(0);
//alert(counter);

alert("Welcome to the Guess My Number Game.");
alert("I am going to guess a number between 1 and 10.");
alert("You will have ten chances to guess.");

    while(counter < 11){
    counter++;
    //alert(counter);    
        var guess = parseInt(prompt("Please take guess #" +counter));
        //validate the user entered a number
        while((isNaN(guess)==true) || (guess < 1 || guess > 10)){
            alert("You must enter a number between 1 and 10.");
            guess = prompt("Please enter a number between 1 and 10.");
        }
      /*  while(guess < 1 || guess > 10){
                alert("You must enter a number between 1 and 10.");
                guess = prompt("Please guess a number between 1 and 10.");
        }*/
        
        if(guess === num){
            alert("Congratulations. You guessed it! " +num + "!");
            counter = counter + 11;
          }
    }

