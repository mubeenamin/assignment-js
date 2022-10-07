const guest = ["Waheed", "Afzal", "Ahmed", "Ikram"];

		let txt ="";

		guest.forEach(myFunction);
		console.log(txt);
        console.log(guest[0]+ " is not coming into the dinner");

		function myFunction(value){

		txt += value+" I would like you invite to dinner \n";
		};