
// Addititon, Subtraction, Multiplication, Division, Remainder, Exponentiation.
let num = 1 + 2 - 3 * 4 / 5 % 6 ** 7;
console.log(num);


// Add two numbers using bitwise ops
let a = new Number(0b1111);
let b = new Number(0b11);

let xor = (a^b).toString(2); // no-carry
let and = ((a&b) << 1).toString(2); // carry

console.log(`xor: ${xor} and: ${and}`);

// Can finish the adding by peforming xor + and


// 0 -> 1
let val = 0b0;
val = val + 0b1
console.log(val.toString(2)); // 1

// 1 -> 10
val = 0b1;
val = val << 1;
console.log(val.toString(2)); // 10

// zero-fill right shift (removes sign bit) >>>

val = -0b1;
val = (val >>> 1);
console.log(val); // positive integer, sign bit in 2s complement removed.