
// inner function has access to outer functions variable.
// Lexical Environment gets created when counter() is called
function counter(){
    let count = 0;
    // function definition is returned, but it is not called yet.
    return function(){
        return count++;
    }
}


// Lexical Environment for counter() gets created
let counterFuncOne = counter();
// Another Lexical Environment for counter() gets created
let counterFuncTwo = counter();

// 1, Nested Lexical Environment gets created pointing back to the Lexical Environment in which it was defined. 
console.log(counterFuncOne());
// 2  Points back to the same L.E. as above
console.log(counterFuncOne());

// This one points back to a different Lexical Environment since a different lexical environment created the function definition.
// Functions have a hidden property [[Environemnt]] which points back to the L.E. in which they were made.
console.log(counterFuncTwo());



// Summary:
//  - All functions in javascript as closures. That is, they are functions that can access and remember their outer variables.

function sum(a){
    return function(b){
        return a+b;
    }
}


console.log(sum(1)(2));


let name = "John";
function sayHi(){
    console.log(name);
    // let name = "Ben"; Same error as trying to declare the same variable twice with let. The outer declaration is reachable.
}

sayHi();

