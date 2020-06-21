// More advanced class construct the doing new function()... albeit, a class IS a function
class Car {

    make = "Ford"; // member variable (created after cstr)

    constructor(model){
        this.model = model;
    }

    drive() { // method gets added to Car.prototype (for prototypical inheritance?)
        console.log(`Driving ${this.make} ${this.model}`);
        // this.model undefined.
    }

    printModel = () => console.log(this.model);
}

// Introspection for learning purposes
console.log(Car.prototype.drive);
console.log(typeof Car);

// Losing this
fordTaurus = new Car("Taurus");
fordTaurus.drive();
fordTaurus.printModel();
