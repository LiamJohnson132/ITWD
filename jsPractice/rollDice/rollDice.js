// roll exactly 1 numSides-sided die
function rollDice(numSides) {
	return Math.floor(Math.random() * numSides) + 1;
}


// roll numDice number of numSided sided dice
numSides = prompt("What kind of die do you want to roll?");
numDice = prompt("How many dice do you want to roll?");

for (var i = 0; i < numDice; i++) {
	console.log(rollDice(numSides));
}