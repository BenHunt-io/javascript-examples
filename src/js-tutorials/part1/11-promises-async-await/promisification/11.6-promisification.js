import {add} from './11.6-script-to-load.js'

/**
 * A function that uses a callback can be converted
 * into a promise by wrapping that function in another
 * function that returns a promise. The promise executor
 * logic calls the original function
 */



// function using callback
function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error("Whoops!"));
}


/**
 * 1. Wrapper function that returns a promise
 * 
 * 2. We make the callback passed to loadScript just resolve/reject
 * a promise. So that we can define the callback logic in the
 * .then format later.
 * 
 */
function promisfy(f){
    return function(...args){
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                if(err){
                    reject(err);
                }else{
                    resolve(result)
                }
            }

            // append callback
            args.push(callback);
            
            // original function (loadScript) is called with src & callback
            f.call(this, ...args);
        })
    }
}

let loadScriptPromise = promisfy(loadScript);
loadScriptPromise('11.6-script-to-load.js')
    .then(result => console.log(add(2,3)));