var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game Logic

while (isSunk == false) {
    guess = prompt('Ready, aim... fire! (Enter a number between 0-6)')

    if (guess < 0 || guess > 6) {
        alert ("Please enter a valid number")
    }
    else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!")

            if (hits == 3) {
                isSunk = true;
                alert("Congratulations, you've sunken my ships!")
            } 
        } else {
            alert ("Miss...")
        }
    }
}

var stats = "You've sank my ships with " + guesses + " tries!" + " And your accuracy is " + (3/guesses) + "!";
alert (stats);