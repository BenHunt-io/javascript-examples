/**
 * 
 * Function Parameters
 * 
 */
 function cookFajitas(onions, veggies=["mushrooms", "peppers"], meat){
    onions = "white onions"; // chef is picky about how he cooks his fajitas and overrides the onions to white
    if(meat === undefined){
        console.log(`Cooking a vegan fagita with ${veggies} and carmaleized ${onions}`);
    }else{
        console.log(`Cooking a nasty ${meat} fagita with ${veggies} and carmaleized ${onions}`);
    }
}

let onions = "purpleOnions";
cookFajitas(onions); // Cooking a vegan fagita with mushrooms,peppers and carmaleized white onions
cookFajitas(onions, ["zucchini", "peppers"]); // Cooking a vegan fagita with zucchini,peppers and carmaleized white onions
cookFajitas(onions, ["zucchini", "peppers"], "steak"); // Cooking a nasty steak fagita with zucchini,peppers and carmaleized white onions
 // Cooking a nasty steak fagita with zucchini,peppers and carmaleized white onions
cookFajitas(onions, ["zucchini", "peppers"], "steak", "beans", "greens", "tomatoes", "potatoes");


console.log(onions); // purple onions. Arguments are passed by value, i.e. they are copied.

function add(augend, addend){
    if(augend === undefined && addend === undefined){
        return;
    }
    return augend + addend;
}

console.log(`Adding 1 and 2 makes: ${add(1,2)}`); // 3
console.log(add()); // undefined