import {createElement} from '../element-utility/ElementFactory.js';

// Invalid URL
fetch('https://notarealbitcoinsite.com', {})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(`Error: ${error.message}`));

// Invalid request against a valid API
let url = 'https://btc.getblock.io/mainnet/';
let apiKey = '4df43249-a819-4dc2-a1ff-e3017343144a';

let blockHeightPromise = fetch(url, {
    method: 'POST',
    headers: {
        'x-api-key': apiKey,
        'Content-Type' : 'application/json;charset=utf8'
    },
    body: JSON.stringify({
        jsonrpc: 2.0,
        method: 'fakeMethod',
        params: [],
        id: 'getblock.io'
    })
});

blockHeightPromise
    // Response is a 404, but promise is not rejected
    .then(response => {
        console.log(response);
        return response.json();
    })
    // Does not run catch
    .catch(error => console.log(`Error: ${error.message}`));


// Implict try..catch
new Promise((resolve, reject) => resolve(5))
    .then(result => result*2)
    .then(result => result*2)
    .then(result => {
        throw new Error("Whoops")
    })
    .catch(error => console.log(`Error: ${error.message}`))

// Rethrowing
new Promise((resolve, reject) => resolve(5))
    .then(result => result*2)
    .then(result => result*2)
    .then(result => {
        throw new Error("Whoops")
    })
    // Rethrow error
    .catch(error => {
        if(error instanceof URIError){
            console.log(`Uri Error: ${error.message}`)
        }else{
            throw error;
        }
    })
    .then(result => result*2)
    // Process Error in generic exception handler
    .catch(error => console.log(`Generic error: ${error.message}`));


    // Unhandled Rejections
    new Promise(() => notRealFunction())
        .then(result => console.log(result));

    window.addEventListener('unhandledrejection', event => {
        // Also can access event.promise
        console.log(`An unhandled promise rejection occured: ${event.reason}`)
    })