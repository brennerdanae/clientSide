
//Using console.log for debugging purposes here
//FUNCTION		
		/*pass the id of the html tag object and 
		it will return the html tag object*/
		var $ = function(id){
			alert("$ function has started for: " + id);
			console.log("$ function is called for HTML tag with id:  " + id);
			return document.getElementById(id);
            
		}		
//FUNCTION				
		var numberFormat = function(number, decimal) {
			alert("numberFormat function has started");
			console.log("numberFormat function has started");
			return (number).toFixed(decimal);	
		}
//FUNCTION	
        var clearPage = function(){
            temp.value = "";
            answer.value = "";
            //error_temp.innerHTML = "";
            //$("temp").firstChild.nodeValue = "";
            //$("answer").firstChild.nodeValue = "";
            $("error_temp").firstChild.nodeValue = "*";
            $("temp").focus();
            $("temp").style.backgroundColor = "yellow";
        }
		var calculateTemp = function(){
            $("temp").blur();
            $("temp").style.backgroundColor = "white";
            ("temp").blur;
			alert("calculateTemp function has started");
			console.log("calculateTemp function has started");
			var isValid = true;
            


//USER INPUT
			var temp = parseFloat($("temp").value);
            alert("Temp entered is: " + temp);
            console.log("Temp entered is: " + temp);

//VALIDATE USER INPUT
			if (isNaN(temp)){
                error_temp.innerHTML = "You must enter a valid number";
				$("error_temp").firstChild.nodeValue = "You must enter a valid number";
				isValid = false;
                alert("temp entry is invalid");
				console.log("temp entry is invalid");
			}
			else{
                error_temp.innerHTML = "*";
				$("error_temp").firstChild.nodeValue = "*";
				alert("temp entry is valid");
				console.log("temp entry is valid");
			}	
			
//IF USER INPUTS ARE VALID, DO CALCULATION			
			if (isValid == true){
				alert("temp entry is valid and so the calculations begin.");
				console.log("temp entry is valid and so the calculations begin.");

				var answer = (temp-32) * (5/9);
				alert("temp: " + temp);
				console.log("temp: " + temp);
				/*passing the $ function the id (answer) of the 
				html tag object (input/textbox) once it returns the 
				html tag object (input/textbox with id answer), we 
				use the value property to set the value of the 
				textbox to the value of mpg */
				$("answer").value = numberFormat(answer, 2);
                alert("answer: " + answer);
				console.log("answer: " + answer);
			}
        }
//ONLOAD EVENT HANDLER	
		window.onload = function () {
            alert("onload function has started");
			console.log("Onload function has started");
            $("execute").onclick = calculateTemp;
            $("clear").onclick = clearPage;
            $("temp").focus();
            $("temp").style.backgroundColor = "yellow";
            
		}	