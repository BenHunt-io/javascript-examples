
/**
 * Bound function as a method
 */
function f(){
   return this;
}

console.log(`Calling default this in a function in Node, ${f()}`);

let user = {
    g : f.bind(null), // hard-fixing f to be bound to null
}

console.log(`Calling this bound to null in a function in Node, ${user.g()}`);

// console.log(user.g()); // nulls... actually prints out the global object?


/**
 * Second bind
 */

function h(){
    console.log(`${this.name}`);
}

// Prints out Undefined, Ben
h = h.bind({name:"Ben"}).bind({name:"Pablo"});
h();

/**
 * Function property after bind
 */

function m(){
    console.log(`${this.name}`);
}

m.age = 25;
m = m.bind({name:"Ben"});
console.log(m.age); // Undefined, bind returns new object.


/**
 * Fixng a function that loses "this"
 */
function askPassword(ok, fail) {
    let password = "rockstar";
    if (password == "rockstar") ok();
    else fail();
}

let person = {
    name: 'John',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

person.loginOk = person.loginOk.bind(person);
person.loginFail = person.loginFail.bind(person);

askPassword(person.loginOk, person.loginFail);


/**
 * Partial functions
 */

function askPass(ok, fail) {
    let password = "rockstar"
    if (password == "rockstar") ok();
    else fail();
}

let user1 = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

// Bind default arguments to login function. True/False get prepended to list of arguments.
askPassword(user1.login.bind(user1, true), user1.login.bind(user1, false)); 