var location1 = 3;
var location1Destroyed = false;
var location2 = 4;
var location2Destroyed = false;
var location3 = 5;
var location3Destroyed;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;
	}
	
	if (guess == location1){
		if(location1Destroyed){
			// Tell user "Already destroyed"
			continue;
		}else{
			hits = hits + 1;
			location1Destroyed = true;
		}
	}
		
	if (guess == location2){
		if(location2Destroyed){
			// Tell user "Already destroyed"
			continue;
		}else{
			hits = hits + 1;
			location2Destroyed = true;
		}
	}	
		
	if (guess == location3){
		if(location3Destroyed){
			// Tell user "Already destroyed"
			continue;
		}else{
			hits = hits + 1;
			location3Destroyed = true;
		}
	}	
	
	
}

function checkHit(int xValue, int yValue){
	
	for (xCheck = numberOfTargets; xCheck > 0; xCheck-- ){
		if (xValue == target[xCheck]){
			for (yCheck = numberOfTargets; yCheck > 0; yCheck--){
				if ()
			}
		} 
	} 
	
	if (xValue = )
}