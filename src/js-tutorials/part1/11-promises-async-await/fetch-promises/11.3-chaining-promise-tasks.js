
/**
 * Javascript.info tasks
 */


/**
 * Errors are passed down through the chain.
 */

// .then vs .catch
let promise = new Promise((resolve, reject) => resolve(5));
// Only handles errors from the initial promise
promise.then(result => result*2, error => console.log(error));

// Handles errors from 2nd promise after the .then
promise.then(result => 
        new Promise((resolve, reject) => reject(new Error("Error thrown manually")))
    )
    .catch(error => console.log(`Error: ${error.message}`))

