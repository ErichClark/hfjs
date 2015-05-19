var numberOfTargets = 3;
var widthOfShip = 3;
var widthOfSea = 7;

// Boolean array for tracking targets which were already hit
var targetHit = [];
for (a = 1; a <= numberOfTargets; a++){
	targetHit[a] = false;
}

var xGuess; // x value of guess
var hits = 0;
var guesses = 0;

var isSunk = false;

// randomizes first x coordinate between 0 and 4
var xRandomLoc = Math.floor(Math.random() * (widthOfSea - widthOfShip + 1));

// initializes the x variable array stores the first x value for the array. I skipped [0]
var xTargetLocation = []; 
xTargetLocation[1] = xRandomLoc; 

// DEBUG
// var initializeArray1 = "The value of xTargetLocation 1 is " + xTargetLocation[1];
// alert(initializeArray1);

// x coordinate array initialization loop
for (b = 2; b <= numberOfTargets; b++){
 xTargetLocation[b] = (xTargetLocation[b - 1] + 1); 
 
 // DEBUG
 // var initializeArray2 = "The value of xTargetLocation " + x + " is " + xTargetLocation[x];
 // alert(initializeArray2);
}

while (!isSunk) {
	xGuess = prompt("Ready, aim, fire! (enter a number 0-" + (widthOfSea - 1) + "):");
	
	if (xGuess < 0 || xGuess > widthOfSea) {
		alert("Please enter a valid cell number!");
	} else {
		guesses++;
		var missedCount = 0;
		for (i = 1; i <= numberOfTargets; i++ ){
			if (xGuess == xTargetLocation[i]){
				if (targetHit[i]){
					var alreadyHitAlert = "ALREADY HIT"; // DEBUG + i + " location with " + xGuess; 
					alert(alreadyHitAlert);
					break;
				}else{
										
					hits++;
					var hitAlert = "HIT"; // DEBUG + i + " location with " + xGuess; 
					alert(hitAlert);
					targetHit[i] = true; // marks this target as hit in boolean array
					
					if (hits == numberOfTargets) {
						isSunk = true; // marks battleship as hit
						alert("You sank my battleship!");
						break;
					}
					
				}
			
			}else{
				missedCount++;
				if(missedCount == numberOfTargets){
					var missedAlert = "MISS "; // DEBUG + missedCount + " locations with " + xGuess; 
					alert(missedAlert);
				}
			}
		}
	}
}

var scorePercentage = Math.floor((numberOfTargets/guesses) * 100);
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + scorePercentage +"%";
alert(stats);
