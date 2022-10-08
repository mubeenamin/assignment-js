const guest = ["Waheed", "Afzal", "Ahmed", "Ikram"];

        removeGuest = guest.pop();
		const msg=" is not attending dinner";
		guest.push("Adil");
		console.log(removeGuest+msg);



		
		let txt ="";

		guest.forEach(myFunction);
		console.log(txt);
        

		function myFunction(value){

		txt += value+" I would like you invite to dinner \n";
		};