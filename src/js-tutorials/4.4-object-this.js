let ben = {
    firstName: "Ben",
    lastName: "Hunt",
    eat: function() {
        console.log(this.firstName + " " + this.lastName + " is eating");
    }
}

ben.eat();



// This is not bound to a particular object. If it is called without
// an object, it is undefined in strict mode.

// "this" is determined at runtime
function sayHi(){
    console.log(this.name);
}

let ben = {name: "Ben"};
let chris = {name: "Chris"};


ben.hi = sayHi;
chris.hi = sayHi;
