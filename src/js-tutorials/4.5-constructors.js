// function constructor (convetion captial first letter)
function Car(make, model) {
    // implict this = {};
    this.make = make;
    this.model = model;

    this.drive = () => console.log("driving");
    // return {this.make = "Chevy"}; can return a different object than this. Maybe external object.
    // implicitcly returns this
}

fordTaurus = new Car("Ford","Taurus");
console.log(fordTaurus.make);