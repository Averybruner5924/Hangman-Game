
var shows = ["heman", "mario", "sonic", "shera"];

function begin(event) {    
    var choice = shows[Math.floor(Math.random() * shows.length)];
    console.log(choice);

// I wanted to create a function that would populate the predetermined span with the letters of the chosen word. The visibility would change when the user guessed the correct letter. This would be listed in the function below.  
    

    document.onkeyup = function guess(event) {

        var userGuess = event.key;
        console.log(userGuess);
            
        if (userGuess === choice.charAt(0)){
            document.getElementById("first").innerHTML = userGuess;
            
        }
        if (userGuess === choice.charAt(1)){
            document.getElementById("second").innerHTML = userGuess;
        }
        if (userGuess === choice.charAt(2)){
            document.getElementById("third").innerHTML = userGuess;

        }
        if (userGuess === choice.charAt(3)){
            document.getElementById("fourth").innerHTML = userGuess;

        }
        if (userGuess === choice.charAt(4)){
            document.getElementById("fifth").innerHTML = userGuess;

        }
        if (userGuess === choice.charAt(5)){
            document.getElementById("sixth").innerHTML = userGuess;
        }

        // I wanted to create an if that would lower the counter after each incorrect guess. Additionally I wanted to create a counter function and a if that would end the game when the counter = 0. 

        //I wanted to create a function that when the game is won would send an alert to the user and change the image of the background to one of the cartoon. 

        var targetDiv = document.getElementById("empty-div");

        targetDiv.innerHTML = "Used:";
        var newDiv = document.createElement("div");
        newDiv.innerHTML = userGuess;
        targetDiv.appendChild(newDiv);
        }

        //I wanted to create a variable here to store the used letters so that they would remain on the page for the user to see. 


    }

    //In a perfect world I would have been able to make the click me button invisible when the game is in play and visible when the game is won. Additionally I would have figured out how to have words with spaces in them so that I could add onto the shows array. 

