const guest = ["Waheed", "Afzal", "Ahmed", "Ikram"];

        
		const msg=" I found a bigger dinner table";
		guest.unshift("Aslam");
        guest.splice(2,0, 'Aqib');
        guest.push("Mubeen");

		console.log(msg);
		let txt ="";

		guest.forEach(myFunction);
		console.log(txt);
        

		function myFunction(value){

		txt += value+" I would like you invite to dinner \n";
		};
