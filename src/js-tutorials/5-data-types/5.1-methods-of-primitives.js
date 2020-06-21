// Javascript implicity wraps primitives like Number,String with wrapper classes when methods are called on them.
let zero = Number(0);
if(zero)
    console.log("I shouldn't print");
