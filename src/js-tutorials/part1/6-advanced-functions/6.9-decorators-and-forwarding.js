

let add = (a,b) => a+b;
let addAndMultiply = (augend, addend, addFunc, multiplier) => addFunc(augend, addend) * multiplier;

console.log(addAndMultiply(5,3, add, 2));


// Spy Decorator
function work(a, b){
    console.log(a + b);
}


function spy(func){
    // function has properties
    spyFunc.calls = [];
    // Decorator function.
    function spyFunc() {
        // extra feature
        spyFunc.calls[spyFunc.calls.length] = arguments;
        // forward call
        func.apply(this, arguments);
    }
    return spyFunc;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls){
    console.log('call:' + `${args[0]} ${args[1]}`);
}

function sayHi(){
    sayHi.coolnessFactor="10";
    let coolnessFactor="10";
    console.log("hi");
}

sayHi();
console.log(sayHi.coolnessFactor);
console.log(sayHi);
