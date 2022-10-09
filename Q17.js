const guest = ["Waheed", "Afzal", "Ahmed", "Ikram"];


const msg = " Sorry you are not invited on dinner ";

let txt1 = ""
for (let i = 0; i < 2; i++) {

	txt1 += guest.pop() + msg + "\n";
}

console.log(txt1);
let txt = "";

guest.forEach(myFunction);
console.log(txt);
console.log(guest.splice(0, 2));
console.log(guest.length);


function myFunction(value) {

	txt += value + " Your are still invited on dinner \n";
};
