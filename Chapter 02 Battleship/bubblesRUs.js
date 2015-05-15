var scores = [0, 60, 50, 60, 58, 54, 54, //starts with intentional 0
			58, 50, 52, 54, 48, 69,
			34, 55, 51, 52, 44, 51,
			69, 64, 66, 55, 52, 61,
			46, 31, 57, 52, 44, 18,
			41, 53, 55, 61, 51, 44];
			
var costs = [0, .25, .27, .25, .25, .25, .25, //starts with intentional 0
			.33, .31, .25, .29, .27, .22,
			.31, .25, .25, .33, .21, .25,
			.25, .25, .28, .25, .24, .22,
			.20, .25, .30, .25, .24, .25,
			.25, .25, .27, .25, .26, .29];
			
var highestScore = 0;
var numberOfTests = scores.length; 
var listForPrint = "";
var bestSolutions = [];
var bestValue = 1; //intentionally overshot
var winningSolution = 0;

 function printList(){
	// USE LATER var listForPrint = "";
	for (i = 1; i < numberOfTests; i++){
		listForPrint += "Bubble solution #" + i + " score: " + scores[i] + " cost: $" + costs[i] + "\n";
	}
	listForPrint += "\n \n";

}

function findHighestScore(){
	for (i = 1; i < numberOfTests; i++){
		if (scores[i] > highestScore){
			highestScore = scores[i];
		}
	}
	listForPrint += "Bubbles tests: " + numberOfTests + "\n \nHighest bubble score: " + highestScore + "\n";
}


function findWinners(){
	
	for (i = 1; i < numberOfTests; i++){
		if (scores[i] == highestScore){
			bestSolutions.push(i);
		}
	}
	listForPrint += "\nSolutions with the highest score: " + bestSolutions;
}

function findBestValue(){
	for (i = 0; i < bestSolutions.length; i++){
		if (costs[(bestSolutions[i])] < bestValue){
			bestValue = costs[(bestSolutions[i])];
			winningSolution = bestSolutions[i];
		}
	}
	listForPrint += "\nThe winning solution is : #" + winningSolution + "\n cost: $" + bestValue;
}

printList();
findHighestScore();
findWinners();
findBestValue();
alert(listForPrint);

