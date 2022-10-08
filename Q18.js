let favPlaces = ["Madina", "Lahore", "Jaddah", "Istanbul"];
const arrNew = favPlaces.slice(0).sort();
console.log(arrNew);
console.log(favPlaces);
const favPlaces1 = favPlaces.sort(function(a,b){
    return a.localeCompare(b);
});
console.log(favPlaces1);
console.log(arrNew.reverse());
console.log(arrNew.reverse());
console.log(favPlaces.sort().reverse());
console.log(favPlaces.sort().reverse());
console.log(favPlaces);