const favCar = ["Honda", "Suzuki", "Tesla", "Ferrari"];

let txt = "";

favCar.forEach(myFunction);
console.log(txt);


function myFunction(value) {

	txt += "I would like to own " + value + " car\n";
};