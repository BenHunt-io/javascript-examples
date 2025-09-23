/**
 * Javascript has a "microtask" queue that promises get
 * queued up in. When a rejected promise gets dequeued 
 * and the queue is empty, it becomes an unhandledrejection event.
 * 
 * The v8 engine only dequeues when there's no work to be done,
 * that is after the main script finishes.
 */


// The queue is empty after this is dequeued.
// If were were to chain the .then, the catch task would've been queued up.
let promise = Promise.reject(new Error("Whoops!"));
setTimeout(() => promise.catch(error => console.log("Caught!")), 2000);

// This code runs first
window.addEventListener('unhandledrejection', event => console.log(event.reason));
