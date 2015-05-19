var taxi = {
	make: "WebVille Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
};
var cadi = {
	make: "Ford",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	convertible: false,
	mileage: 12892
};
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000
};
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	convertible: false,
	mileage: 1021
};
function prequal(car) {
	if ((car.mileage > 10000) || (car.year > 1960)){
		console.log("You should really pass on the " + car.make + " " + car.model);
	}else{
		console.log("You gotta check out this " + car.make + " " + car.model);
	}
}
prequal(taxi);
prequal(cadi);
prequal(fiat);
prequal(chevy);
//if (worthALook) {
//	console.log("You gotta check out this " + taxi.make + " " + taxi.model);
//} else {
//	console.log("You should really pass on the " + taxi.make + " " + taxi.model);
//}