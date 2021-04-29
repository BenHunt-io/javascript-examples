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
 * Contextual Typing
 */
var names = ["Ben", "Benito", "Benihana"];
/**
 * Uncomment to see contextual type error
 */
// names.forEach((name) => {
//     console.log(name.toLowercase()); // "Ben" "Benito" "Benihana"
// })
/**
 * Object Types
 */
function printCar(car) {
    var _a;
    console.log("Printing car: make:" + car.make + ", model:" + car.model);
    console.log("With VIN: " + ((_a = car.vin) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
//Printing car: make:Ford, model:Fusion
// With VIN: undefined
printCar({ make: "Ford", model: "Fusion" });
// Printing car: make:Ford, model:Fusion
// With VIN: KKKKKKKKKKKKKKK
printCar({ make: "Ford", model: "Fusion", vin: "kkkkkkkkkkkkk" });
function printPerson(person) {
    console.log("Name: " + person.name + ", SSN: " + person.ssn);
}
// Name: Ben, SSN: 111-22-3333
printPerson({ name: "Ben", ssn: "111-22-3333" });
// Name: Ben, SSN: 111-22-3333
printPerson({ name: "Ben", ssn: "111-22-3333", city: "Austin", politicalFaction: "SpaceCowboy" });
var printBear = function (bear) { return console.log(JSON.stringify(bear)); };
printBear({ name: "bear", honey: true, cave: true });
/**
 * Uncomment to see type errors
 */
// printPerson({name: "Ben"});
// printPerson({name: "Ben", ssn: "111-22-3333", city:"Austin");
// type Mac = {
//     launch :
// }
// // Union Types
// let mac : Mac = {
//     launch : (app: string) => console.log(`Opening ${app}`);
//     launchUnixTerminal : () => console.log("Opening Unix Terminal");
// }
// let pc : PC = {
//     launch : (app: string) => console.log(`Opening ${app}`);
//     launchPowershell : () => console.log("Opening Powershell");
// }
// function openChrome()
