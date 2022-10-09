// make a function that will get an array and print of each elements


function show_megician(megician = []) {
    for (i = 0; i < megician.length; i++) {
        console.log(megician[i])
    }
}


function great_megician(megician = []) {
    for (i = 0; i < megician.length; i++) {
        console.log(megician[i] + ' is a Great Megician')
    }
}

let arrMegician = ['mohid', 'saeed', 'irfan', 'furqan']
great_megician(arrMegician)


const newArrayMegician = show_megician(arrMegician);
console.log(newArrayMegician)