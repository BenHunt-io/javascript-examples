let obj = {}; // Obj Literal syntax
let person = {
    firstName : "Ben",
    lastName : "Hunt",
    "middle name" : "n/a",
}
console.log(person["middle_name"]);

function createPerson(firstName, lastName){
    return {
        firstName,
        lastName,
    };
}

let ben = createPerson("Ben","Hunt")
console.log(ben);
for(let prop in person){
    console.log(prop + ": "+ person[prop]);
}

let benClone = Object.assign({}, ben);
// Must use string to access with []'s
console.log("Ben clone firstName: " + benClone["firstName"]);
console.log("Ben clone lastName: " + benClone.lastName);
