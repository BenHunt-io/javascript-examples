let promise = new Promise(function(resolve, reject) {
    // Executor function, e.g, the producer, calling resolve/reject settles the promise from the pending status
    setTimeout(() => reject("Black Beans burnt in 777ms"), 1000);
    // setTimeout(() => resolve("Black Beans in 1000ms"), 1000);
});

// Can also do .catch / or (null, function) for doing only error handling
promise.then(
    // Consumers
    result => console.log(`Executor produced: ${result}`),
    error => console.log(`Executor errored producing result: ${error}`)
)
.finally(() => console.log("Clean up the mess from making beans"))