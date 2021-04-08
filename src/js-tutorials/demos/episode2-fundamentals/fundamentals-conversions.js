/**
 * Numeric Conversions:
 * undefined -> NaN 
 * null -> 0
 * true and false -> 1 and 0
 * string -> 0 if empty string, NaN if error parsing, or the number parsed
 */

console.log("Numeric Conversion Output:");

let val;
console.log(Number(val));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("123wombo"));
console.log(Number("123"));

/**
 * Boolean Conversion:
 * see control flow section.
 */

/**
 * String Conversion:
 */
console.log("String Conversion Output:");
console.log(String(true));
console.log(String(123));
console.log(String(null));