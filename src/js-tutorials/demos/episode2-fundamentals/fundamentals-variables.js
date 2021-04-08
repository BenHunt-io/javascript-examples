'use strict' // opt out of sloppy mode, introduced in ecma5

/**
 * Variables
 */

num0 = 0; // only works in non-strict mode. 
var num1 = 1; // old, var has no block scope and can be declared anywhere. (Hoisting)
let num2 = 2; // new way
const num3 = 3; // constant


// Var pierces through for/if blocks. Does not pierce through functions.
// function/global scoped.
if (true) {
    for(let i = 0; i<1; i++){
        console.log(x); // variable hoisted to top of function
        var x = 5;
        var x = 6; // Can't redeclare using let.
    }
}

console.log(x);
