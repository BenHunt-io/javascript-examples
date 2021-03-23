// ... = rest parameters, which is the same as varargs in java and maps them to an array
// Works with any iterable like a String
let add = (a,b) => a+b;
console.log(add(1,2,3,4,5)); // Works bc excessive args doesn't cause error.

// Example using it 
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

