// Assignment statement w/ Function EXPRESSION. (available after executed)
let add = function (a,b) {
    return a+b;
};

console.log(add); // [Function: add]
console.log(addFxn); // [Function: addFxn]
console.log("\n");

let addResult = addFxn(3,2); // assigns the result 
let addCopy = addFxn // assigns the function. (Stores the action)
addResult = addCopy(3,2);

// Statement w/ Function DECLARATION (available globally within script)
function addFxn (a,b){
    return a+b;
}

// Recursion within Function Expression
let printer = function recursiveMsg(msg){

    if(msg == "stop"){
        return "Done";
    }

    return recursiveMsg("stop");
}

// Have to give function a name, "recursiveMsg" to be able to reference it within
// the function
console.log(printer("testMsg"));


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