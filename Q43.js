const make_sandwich = function (...items) {
    console.log("\n Sandwich as your dessire");
    for ( i = 0; i < items.length; i++){
        console.log("  adding " + items[i] + " to your sandwich.")
    }
}
make_sandwich('grilled beef', 'sauces', 'olive', 'ketchup');
console.log("These sandwiches are ordered");