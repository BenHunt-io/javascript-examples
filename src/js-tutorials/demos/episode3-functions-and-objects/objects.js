const prompt = require('prompt-sync')();

/**
 * Objects - organizing data and behavior
 * 
 * 
 * Designing cohesive code.
 */

let obj = {}; // object literal
obj = new Object();

// objects in js are set of key-value pairs known as 'properties'.
// they can be any value. they can be added, deleted, modified, and even 'computed'.
let house = {
    year : 1990,
    foundation : "slab",
    cost : 350_000,
    ['square feet'] : 2150,
}

// {"year":1990,"foundation":"slab","cost":350000}
console.log(`A house with all its properties: ${JSON.stringify(house)}`);
delete house.year;
// {"foundation":"slab","cost":350000}
console.log(`A house without the year: ${JSON.stringify(house)}`);
house.owner = "Ben";
// {"foundation":"slab","cost":350000,"owner":"Ben"}
console.log(`A house with an assigned owner: ${JSON.stringify(house)}`);
house.cost = house.cost * 2; // To account for Austin.
// {"foundation":"slab","cost":700000,"owner":"Ben"}
console.log(`A house with appreciation: ${JSON.stringify(house)}`);

// add computed property based on input
let propName = prompt('What property name would you like to add? -> ');
let propValue = prompt(`What property value would you like to add for property ${propName} ? -> `);

house[propName] = propValue;

let propNameToQuery = prompt('What property name would you like to query for? -> ');
console.log(`Querying for property ${propNameToQuery}: ${house[propNameToQuery]}`);

// shorthand properties

let year = 1990;
let foundation = "slab";
let cost = 350_000;

house = {
    year,
    foundation,
    cost,
}

// {"year":1990,"foundation":"slab","cost":350000}
console.log(`A house with all its properties: ${JSON.stringify(house)}`);

// checking for existence

if(house.pool === undefined){
    console.log("I have no pool"); // :(
}

house.pool = "Wombo sized pool";

if("pool" in house){
    console.log("Yay, I now have a pool"); // :(
}

// looping properties of object
for(prop in house){
    console.log(`Printing all properties of the house: ${house[prop]}`);
}

