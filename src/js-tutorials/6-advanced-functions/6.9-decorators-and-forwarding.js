

let add = (a,b) => a+b;
let addAndMultiply = (augend, addend, addFunc, multiplier) => addFunc(augend, addend) * multiplier;

console.log(addAndMultiply(5,3, add, 2));