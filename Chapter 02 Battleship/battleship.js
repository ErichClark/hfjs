var numberOfTargets = 3;
var targetHit = [];

for (a = 1; a <= numberOfTargets; a++){
	targetHit[a] = false;
}

var xGuess;
var hits = 0;
var guesses = 0;

var isSunk = false;

var randomLoc = Math.floor(Math.random() * 5);

var targetLocation = [];
targetLocation[1] = randomLoc;
// var initializeArray1 = "The value of targetLocation 1 is " + targetLocation[1];
// alert(initializeArray1);

for (x = 2; x <= numberOfTargets; x++){
 targetLocation[x] = (targetLocation[x - 1] + 1);
 // var initializeArray2 = "The value of targetLocation " + x + " is " + targetLocation[x];
 // alert(initializeArray2);
}

while (!isSunk) {
	xGuess = prompt("Ready, aim, fire! (enter a number 0-6):");
	
	if (xGuess < 0 || xGuess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		guesses++;
		var missedCount = 0;
		for (i = 1; i <= numberOfTargets; i++ ){
			if (xGuess == targetLocation[i]){
				if (targetHit[i]){
					var alreadyHitAlert = "ALREADY HIT"; //+ i + " location with " + xGuess;  
					alert(alreadyHitAlert);
					break;
				}else{
										
					hits++;
					var hitAlert = "HIT"; // + i + " location with " + xGuess; 
					alert(hitAlert);
					targetHit[i] = true;
					
					if (hits == numberOfTargets) {
						isSunk = true;
						alert("You sank my battleship!");
						break;
					}
					
				}
			
			}else{
				missedCount++;
				if(missedCount == numberOfTargets){
					var missedAlert = "MISS "; // + missedCount + " locations with " + xGuess;
					alert(missedAlert);
				}
			}
		}
	}
}

var scorePercentage = Math.floor((numberOfTargets/guesses) * 100);
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + scorePercentage +"%";
alert(stats);
