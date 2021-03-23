// Assignment statement w/ Function EXPRESSION. (available after executed)
let add = function (a,b) {
    return a+b;
};

// Statement w/ Function DECLARATION (available globally within script)
addFxn = function (a,b){
    return a+b;
}

console.log(add);
console.log(addFxn);
console.log("\n");

let addResult = addFxn(3,2); // assigns the result 
let addCopy = addFxn // assigns the function. (Stores the action)
let addResult = addCopy(3,2);




// Anonymous functions
function skate(trick){
    console.log("Push");
    trick();
    console.log("Push");
}

skate(
    () => console.log("Kickflip") // action
);

// Lambads (arrow fxns) 2.17 are exactly like Java