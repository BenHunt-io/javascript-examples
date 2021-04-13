// functions are objects and can have properties 

let add = (a,b) => a+b;
// prints out function name (contextual name) & parameter count
console.log("Function name: "+add.name+" Length: "+add.length);

// New Function properties
function makeCounter(){
    // instead of let couunt = 0;

    function counter(){
       return counter.count++;
    }
    counter.count = 0;

    return counter;
}

let counter = makeCounter();
// 0
console.log(counter());
counter.count = 1337;
// 1337
console.log(counter());

// Named Function Expression
// Allows for recusion and reassignment of function expressions
let subFunc = function sub(a,b){
    return a - b;
}

let tmp = subFunc;
subFunc = null;

console.log(tmp(5,2));
