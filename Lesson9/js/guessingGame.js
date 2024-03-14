	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
        	var guess = new Number(document.getElementById("guess").value);
			try {
				if (isNaN(guess) || guess < 0 || guess > 100 || guess == "") {
					tries++;
					document.getElementById("guess").value="";
					throw "You must enter a valid number between 1 and 100";
				}
				if (computer==guess){
					document.getElementById("comments").value="You guessed correctly - congratulations! It only took " + tries + " tries!";
				} else if (computer<guess) {
				  document.getElementById("comments").value="Your guess is too high, try again!";
				  tries++;
				  document.getElementById("tries").value=tries;
			  	} else if (computer>guess) {
					document.getElementById("comments").value="Your guess is too low, try again!";
					tries++;
					document.getElementById("tries").value=tries;
				}
			}
			catch(err) {
				document.getElementById("comments").value = err;
			}
			finally {
				console.info("User's guess: " + guess);
				console.count("Attempts:");
			}
        });
     


