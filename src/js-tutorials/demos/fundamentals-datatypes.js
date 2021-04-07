// Primitives
let num = 1;
let bigInt = 1234567890123456789012345678901234567890n;
let string = "abc"; // No separate 'char' type.
let boolean = true;
let someValue = null; // 
let someUndefinedValue; // Undefined
// Non-Primitives
let obj = {
    description: "I'm an object property",
    value: 1337,
};

let funcObj = function(){
    console.log("Every Function is an Object");
}


console.log(typeof(num));
console.log(typeof(bigInt));
console.log(typeof(string));
console.log(typeof(boolean));
// Two ways to invoke typeof
console.log(typeof someValue); // Prints 'object'. Official error in typeof.
console.log(typeof someUndefinedValue);
console.log(typeof obj);
console.log(typeof funcObj); // Functions belong to object type, but this typeof behavior came from early days of JS