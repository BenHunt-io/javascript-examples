/**
 * 
 * Variable scope
 * 
 * PREFER STATELESS FUNCTIONS
 * 
 */
 let userName = "Ben"; // "Global Variable"
 showMsg();
 
 function showMsg(){ // function declaration
     let msg = `Hello ${userName}`;
     console.log(msg); // Hello Ben
 }