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
    console.log(`Hi ${this.name}`);
}

ben = {name: "Ben"};
let chris = {name: "Chris"};


ben.hi = sayHi;
chris.hi = sayHi;
ben.hi(); // Hi Ben
chris.hi(); // Hi Chris


// Defining new property to be a function on bird binds "this" in the function to the object.
let bird = {
    food: "Rat",
    fly : () => console.log("I'm flying")   
}

bird.eat = function (){
    console.log(`Eating ${this.food}`);

    // When this function is called, "this" is set to bird.
    this.inner = function() {
        console.log(`Eating ${this.food}`);
    }

    // "this" is lost.
    function inner(){
        console.log(`I'm not sure what I'm eating ${this.food}`);
    }
}

bird.eat(); // Eating Rat

