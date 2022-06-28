
import {createPreElement} from '../element-utility/ElementFactory.js';
let txHash = "e61819d0d1d39c220cc805a7c650cd035b0aae1dd07b734d90e2cb2ddb79b74b.json";
let baseUrl = `https://btc.getblock.io/mainnet`;
let apiKey = '4df43249-a819-4dc2-a1ff-e3017343144a';


let txPromise = fetch(`${baseUrl}/rest/tx/${txHash}`, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey,
        'Content-Type' : 'application/json;charset=utf8'
    }
});

let blockHash = '000000000000000000095e563e316daa3b59542fdef3b2db774d1db30de166f7.json';
let blocksUrl = `${baseUrl}/rest/block/${blockHash}`;

let blocksPromise = fetch(blocksUrl, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey,
        'Content-Type' : 'application/json;charset=utf8'
    }
})


let mempoolUrl = `${baseUrl}/rest/mempool/info.json`;

let mempoolPromise = fetch(mempoolUrl, {
    method: 'GET',
    headers: {
        'x-api-key': apiKey,
        'Content-Type' : 'application/json;charset=utf8'
    }
})

// Wait for all requests to finish before proceeding
Promise.all([txPromise, blocksPromise, mempoolPromise])
    // .then(result => console.log(result))
    .then(promises => Promise.all(promises.map(promise => promise.json())))
    .then(results => results.forEach(result => createPreElement(JSON.stringify(result, null, 2))))


