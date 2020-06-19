// Prototype (traditional definition) - early sample/release/model of a product/service
// Other Notes:
// - Single inheritance like Java.
// - Methods shared / object state is not

// Prototype object
let person = { 
    name: "n/a",
    age: -1,
    
    setName(name){this.name = name;}, // Comma not required in classes
    getName(){return this.name;}
}

let ben = {
    __proto__: person, // Ben subtypes Person.
    hobby: "skateboarding",
}

// for..in iterates through enumerable properties including inherited ones. (where enumerated=true)
console.log("Iterating through enumerable properties:")
for(let key in ben){
    console.log(key);
}

console.log("");
console.log(ben.name); // Automatically calls getter/setter
ben.name = "Ben";
console.log(ben.name);

