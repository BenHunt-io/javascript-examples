
// Setting Prototype on existing objects, [[prototype]] only set when "new" instance created
// Here, we're creating a property on the default prototype object.
Array.prototype.firstHalf = function(){
    return this.slice(0, this.length/2);
}

let nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.firstHalf()); // 1,2,3,4,5


// Making all new instances of Hawk have their [[prototype]] set to bird when instantiated
let bird = {
    fly: () => console.log("I'm flying!")
}

function Hawk() {
    this.hunt = () => console.log("I'm hunting rodents!");
} 

Hawk.prototype = bird;

let babyHawk = new Hawk();
let matureHawk = new Hawk();
babyHawk.fly(); // "I'm flying!"
matureHawk.hunt(); // "I'm hunting rodents!"


// Only property that the default prototype object has
function Car(){}
console.log(Car.prototype.constructor); // [Function: Car] 