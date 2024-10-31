let person = {
    firstName : "Ben",
    lastName : "Smith",
    _age: undefined,

    get fullName(){
        console.log(`Getting full name virtual property`);
        return this.firstName + " " + this.lastName;
    },

    set fullName(value){
        console.log(`Setting full name virtual property: ${value}`);
        [this.firstName, this.lastName] = value.split(' ');
    },

    set age(age){
        console.log(`Setting age: ${age}`);
        this._age = age;
    },

    get age(){
        return this._age;
    }
}

let fullName = person.fullName; // getting full name virtual property
console.log(fullName); // John Smith
console.log(person.firstName); // getting first name \n John
person.age=26;
console.log(`Age: ${person.age}`); // Age: 26
person.fullName = "Tiger Woods"; // Setting full name virtual property: Tiger Woods