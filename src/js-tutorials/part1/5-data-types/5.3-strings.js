
// Same as using /n
let multilineStr = `I'm
a multiline
string`;

// length
let length = multilineStr.length;

// accessing characters
let firstChar = multilineStr[0];
let lastChar = multilineStr[length-1];

// Strings are immutable
// multilineStr[0] = "b"; Doesn't work. need copy.

// searching for a substring
let str = "Quick Brown Fox";
let indexOfRow = str.indexOf("row");
let indexOfO = str.indexOf("o", 9);
console.log(`Index of row: ${indexOfRow} and index of 2nd o: ${indexOfO}`);


// bitwise NOT trick, indexOf returns -1 if no match. bit trick makes it 0.
// As a result, it's truthy if there is a match.
let bear = "bear";
if(~bear.indexOf("bear")){
    console.log("Found bear string");
}