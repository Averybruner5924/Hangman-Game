
var shows = ["heman", "mario", "sonic", "shera"];

function begin(event) {    
    var choice = shows[Math.floor(Math.random() * shows.length)];
    console.log(choice);
    

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


        var targetDiv = document.getElementById("empty-div");

        targetDiv.innerHTML = "Used:";
        var newDiv = document.createElement("div");
        newDiv.innerHTML = userGuess;
        targetDiv.appendChild(newDiv);
        }


    }

