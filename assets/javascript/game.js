
var shows = ["heMan", "smurfs", "sonic","jem",];

function begin(event) {    
    var choice = shows[Math.floor(Math.random() * shows.length)];
    console.log(choice);

    document.onkeyup = function guess(event) {

        var userGuess = event.key;
        console.log(userGuess);
        
    
        if (userGuess === choice.charAt(0)){
            alert("you got one!");
            document.getElementById("first").innerHTML = userGuess;
        }
        if (userGuess === choice.charAt(1)){
            alert("you got one!");
        }
        if (userGuess === choice.charAt(2)){
            alert("you got one!");
        }
        if (userGuess === choice.charAt(3)){
            alert("you got one!");
        }
        if (userGuess === choice.charAt(4)){
            alert("you got one!");
        }
        if (userGuess === choice.charAt(5)){
            alert("you got one!");
        }
        else {
            alert("try again!")
        }
    }
}

