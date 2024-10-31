// Can use scientific notation to shorten writing big numbers
let billion = 1e9;
console.log(billion);
// Supports HEX, binary, octal
console.log(0xFF + " " + 0xff); // 255, case insensitive
// Use double dot notation to signify that you are not using the fractional numbers
console.log(123..toString(2));
// Precision / Loss
console.log(.1);
console.log(.1.toFixed(25)); // Returns String
// Use Objects.is instead of === for best accuracy in comparing strict values. (works with NaN and 0,-0)

// Parsing Binary
console.log(Number.parseInt("111", 2)); // 7