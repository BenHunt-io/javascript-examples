"use strict";
/**
 *
 * Primitives: string, number, boolean
 * Arrays: string[], number[], boolean[], etc
 * any
*/
/**
 * Variables
 */
// Can Infer Type
var beans = "HEB Salt Free Black Beans";
/**
 * Functions
 */
function calculateInterest(principle, rate, years) {
    return principle * Math.pow(rate, years);
}
var interest = calculateInterest(10000, 1.05, 5);
console.log(interest); // $12762.815..
/**
 * Contextual Typing, anonymous function in forEach can contextualize what the type for name is
 * with the inferred string[] type from names.
 */
var names = ["Ben", "Benito", "Benihana"];
names.forEach(function (name) {
    console.log(name.toLowerCase()); // "Ben" "Benito" "Benihana"
});
/**
 * Object Types
 *  - can have optional properties. Allows for mixed ordering of optional args!
 */
function printCar(car) {
    console.log("Car: price:" + car.price + ", make:" + car.make + ", model:" + car.model + ", vin:" + car.vin);
}
// Error
// printCar({ make: "Ford"});
printCar({ make: "Ford", model: "Fusion" });
printCar({ make: "Ford", model: "Fusion" });
printCar({ make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk" });
printCar({ price: 20000, make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk" });
printCar({ make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk", price: 20000 });
/**
 * Union Types
 */
function printIdentifier(id, car) {
    // narrowing
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    console.log("Car make: " + car.make + " model: " + car.model);
}
printIdentifier(10, { make: "Tesla", model: "CyberTruck" });
printIdentifier("ten", { make: "Tesla", model: 550102020 });
function printOnlyCars(car) {
    console.log(car);
}
printOnlyCars({ id: 1, make: "Tesla", model: "CyberTruck" });
function printBear(bear) {
    console.log(bear);
}
printBear({ name: "black bear", "class": "mammal", honey: true });
var bear = { name: "black bear", "class": "mammal", honey: true };
var dog = { name: "chase", owner: "Jesse's Dad" };
// error
// dog = <Bear>dog;
/**
 * Literal Types
 */
function walk(direction) {
    console.log("Walking in the " + direction + " direction");
}
walk('FORWARD');
// Error
//walk('SIDEWAYS');
/**
 * Literal Type Inference
 */
function processReq(url, method) {
    console.log(method + " " + url);
}
var req = { url: "http://localhost:3000/coin/1", method: "GET" };
// ERROR
// req.method = 'PUT';
processReq(req.url, req.method);
/**
 * Strict Null Checks
 *  - should be on to avoid Null Pointer errors.
 */
function printDangeriousValue(value) {
    console.log(value.toUpperCase());
}
