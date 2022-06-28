import {createElement} from '../element-utility/ElementFactory.js';

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
        method: 'getblockcount',
        params: [],
        id: 'getblock.io'
    })
});


blockHeightPromise
    // Response object is created before full response body is downloaded.
    // .json() waits for download to finish and converts body to json.
    .then(response => response.json())
    // Response object is always resolved even in errored HTTP requests
    // Here, we put it in javascripts correct Promise form
    .then(toPromise)
    .then(
        result => {
            createElement(`Block height: ${result}`)

            let blockHashReq = {
                method: 'POST',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json;charset=utf8'
                },
                body: JSON.stringify({
                    jsonrpc: 2.0,
                    method: 'getblockhash',
                    params: [result],
                    id: 'getblock.io'
                })
            }

            return fetch(url, blockHashReq);
        },
        error => createElement("Unable to fetch btc block height"))
    .then(response => response.json())
    .then(toPromise)
    .then(
        result => createElement(`Block hash: ${result}`),
        error => createElement("Unable to fetch btc block hash"))


function toPromise(response){
    if(response.error){
        return new Promise((resolve, reject) => reject(response.error));
    }else{
        return new Promise((resolve) => resolve(response.result));
    }
}