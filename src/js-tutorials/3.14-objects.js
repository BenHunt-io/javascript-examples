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

console.log(createPerson("Ben","Hunt"));
for(let prop in person){
    console.log(person[prop]);
}
