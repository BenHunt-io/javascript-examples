/**
 * Implement the loadscript logic with promises.
 * 
 * 1. Load BTC prices
 * 2. Then Load ETH prices
 * 3. Then Load Null Script (errors out)
 * 4. Finally, clean up any lingering state
 */

function loadScript(src){
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        document.head.append(script);
        
        script.onload = () => resolve();
        script.onerror = () => reject("Error loading script");
    })
}

let btcPromise = loadScript('11.2-callback-get-btc-prices.js');

// Each .then handler waits for the script to be loaded,
// i.e waits for the promise to be settled.
btcPromise
    .then(result => {
        let price = reduce(getBtcPrices());
        createPriceElement(price, 'BTC');
        return loadScript('11.2-callback-get-eth-prices.js');
    })
    .then(
        result => {
            let price = reduce(getEthPrices());
            createPriceElement(price, 'ETH');
            return loadScript('11.2-scriptThatDoesNotExist.js');
        })
   .then(
        error => {
            console.log(`Error occured loading script: ${error.message}`);
        }
    );

function createPriceElement(price, ticker){
    priceParagraphElem = document.createElement("p");
    priceParagraphElem.innerHTML = `${ticker} price: ${price}`;
    priceParagraphElem.style = "color:yellow; background:black;";
    document.body.appendChild(priceParagraphElem);
}


function reduce(prices){
    return prices.slice(9, 13)
    .map(coin => coin.price)
    .reduce((a,b) => a+b, 0) / 3;
}



/**
 * Javascript.info tasks
 */

// Re-resolve a promise. Only first resolve counts, subsequent
// resolves are ignored.
let promise = new Promise(function(resolve, reject) {
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