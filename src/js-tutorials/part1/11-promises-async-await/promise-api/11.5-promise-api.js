// First promise rejection, we stop processing promises
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => reject(new Error("Whoops"))),
    new Promise((resolve, reject) => resolve(3)),
    // Promise.all takes in iterable, so can pass 4 here
    4
]).catch(error => console.log(`Error:${error.message}`));


// Waits for all to finish, regardless of resolve/reject
// Can use if you still want to make use of some of the promises
Promise.allSettled([
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => reject(new Error("Whoops"))),
    new Promise((resolve, reject) => resolve(3)),
    // Promise.all takes in iterable, so can pass 4 here
    4
]).then(
    results => {
        results.forEach(result => {
            if(result.status == 'fulfilled'){
                console.log(`Resolved: ${result.value}`);
            }else{
                console.log(`Rejected value because: ${result.reason}`);
            }
        })
    }
)


// first to finish wins! Rest are ignored
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
]).then(
    result => console.log(`Value: ${result} finished first!`)
)

// In case of only errors, errors get aggregated into AggregateError obj
Promise.any([
    new Promise((resolve, reject) => reject(new Error("whoops 1"))),
    new Promise((resolve, reject) => reject(new Error("whoops 2"))),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
]).then(
    result => console.log(`First value to successfully resolve: ${result}`)
)

// Static functions: Promise.resolve, Promise.reject are rarely used
// and achieve the same thing as new Promise((resolve,reject) => resolve(5));

