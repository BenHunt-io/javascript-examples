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
let beans : string = "HEB Salt Free Black Beans";


/**
 * Functions
 */
function calculateInterest(principle: number, rate: number, years: number): number {
    return principle * rate ** years; 
}

let interest = calculateInterest(10000, 1.05, 5);
console.log(interest); // $12762.815..

/**
 * Contextual Typing
 */
const names = ["Ben", "Benito", "Benihana"];

/**
 * Uncomment to see contextual type error
 */
// names.forEach((name) => {
//     console.log(name.toLowercase()); // "Ben" "Benito" "Benihana"
// })


/**
 * Object Types
 */

function printCar(car: {make: string, model: string, vin?: string}){
    console.log(`Printing car: make:${car.make}, model:${car.model}`);
    console.log(`With VIN: ${car.vin?.toUpperCase()}`);

}

//Printing car: make:Ford, model:Fusion
// With VIN: undefined
printCar({make:"Ford", model:"Fusion"});
// Printing car: make:Ford, model:Fusion
// With VIN: KKKKKKKKKKKKKKK
printCar({make:"Ford", model:"Fusion", vin:"kkkkkkkkkkkkk"});



/**
 * Union Types
 */

// If they have an ssn and a name, likely they're a person.
type Person = {
    name : string;
    ssn : string;
}

type American = {
    name: string;
    ssn: string;
    city: string;
    politicalFaction: string;
}

function printPerson(person : Person | American){
    console.log(`Name: ${person.name}, SSN: ${person.ssn}`);
}

// Name: Ben, SSN: 111-22-3333
printPerson({name: "Ben", ssn: "111-22-3333"})
// Name: Ben, SSN: 111-22-3333
printPerson({name: "Ben", ssn: "111-22-3333", city:"Austin", politicalFaction:"SpaceCowboy"})


/**
 * Interface vs Type
 */


 interface Animal {
    name: string
  }
  
  interface Bear extends Animal {
    honey: boolean
  }
  
//   printBear({name:"bear", honey:true});

  interface Bear {
    cave: boolean
  }

  let printBear = (bear : Bear) =>   console.log(JSON.stringify(bear)); 
  printBear({name:"bear", honey:true, cave:true});


  /**
   * Uncomment to see type functionality
   */

//   type Animal = {
//     name: string
//   }
  
//   type Bear = Animal & { 
//     honey: Boolean 
//   }





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
