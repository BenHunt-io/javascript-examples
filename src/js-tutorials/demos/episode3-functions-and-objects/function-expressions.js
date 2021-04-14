/**
  * 
  * Function Expressions
  * 
  * "A function is a value representing an 'action'"
  * https://javascript.info/function-expressions
  * 
  */

// Functions are values that can be assigned
 let sayHi = function(){
    console.log("Hi");
 };

let func = sayHi;
sayHi(); // Hi
func(); // Hi

console.log(sayHi);


/**
 * Callbacks
 */

// Set are a way to structure data. Will go over later.
let usernameDatabase = new Set(); 

// Pretend the function createUser is some service we are using in our project
// and the userCreationCallback is some action we want to happen after a user 
// is successfully created
function createUser(username, userCreationCallback){
    if(!usernameDatabase.has(username)){
        usernameDatabase.add(username);
        if(userCreationCallback !== undefined){
            userCreationCallback(username);
        }
    }
    else{
        console.log("User could not be created, this username already exists in the system.")
    }

}

function sendConfirmationEmail(username) {
    console.log(`Sending ${username} a confirmation email`);
}

createUser("Ben", sendConfirmationEmail); // Sending Ben a confirmation email

// User could not be created, this username already exists in the system.
createUser("Ben", function(username) {
    console.log(`Sending ${username} a confirmation email`);
})

// Sending Chris a confirmation email
createUser("Chris", sendConfirmationEmail);
