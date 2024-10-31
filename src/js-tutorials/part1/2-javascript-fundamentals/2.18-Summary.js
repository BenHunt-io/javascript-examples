// (number);
// (bigint);
// (string);
// (boolean);
// (null); -- for unknown values, have to assign it to null
// (undefined); -- value not assigned
// (object);
// (symbol);

let person = {
    "name" : "bob",
    "age" : 25,
    "address" : null
}

let car;

if(typeof(car) == undefined){
    console.log("car is undefined");
}
if(typeof(person.address) == Object){
    console.log("Official bug in typeof(), person.address should be of type null");
}

// runtime error, can't reference undeclared variable.
// if(chris == undefined){
// }

// ?? coalescing operation, a ?? b. 

// Comparisons convert to numbers, unless used === for strict comparison
console.log(0 == false); // true
console.log(0 == ''); // true

console.log(3*'2');