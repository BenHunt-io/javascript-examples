let promise = new Promise(function(resolve, reject) {
    // Executor function, e.g, the producer, calling resolve/reject settles the promise from the pending status
    setTimeout(() => reject("Black Beans burnt in 777ms"), 1000);
});

// Can also do .catch / or (null, function) for doing only error handling
promise.then(
    // Consumers
    result => console.log(`Executor produced: ${result}`),
    error => console.log(`Executor errored producing result: ${error}`)
)
// Should not process result
.finally(() => console.log("Clean up the mess from making beans"))


// Re-resolve a promise
promise = new Promise(function(resolve, reject) {
    resolve(1); // returns 1

    resolve(setTimeout(() => resolve(2), 1000));
});

promise.then(result => console.log(result));



// Delay w/ promise
function delay(ms){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, ms);
    });
}

delay(2000).then(() => console.log("Runs after 2 seconds"));