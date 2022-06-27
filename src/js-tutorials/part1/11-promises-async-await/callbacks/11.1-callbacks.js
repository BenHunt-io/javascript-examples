
// Callbacks are a way to pass a function around for execution
// after something completes.
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);
    script.onload = () => callback(null);
    script.onerror = () => callback(new Error(`Failed to load script for ${src}`));
};

/**
 * Calling loadScript(file, callback) after the current script finishes flattens
 * the asynchronous callback hierarchy. It's similar in nature to the .then paradigm
 */

// Loads function to get btc prices then calls that function and averages the result
// with the callback
loadScript("11.1-callback-get-btc-prices.js", getBtc);

// step 1
function getBtc(error){
    if(error){
        console.log(`Error occured: ${error.message}`);
    }else{
        let avgPriceLast3Months = getBtcPrices(12)
        .slice(9, 13)
        .map(coin => coin.price)
        .reduce((a,b) => a+b, 0) / 3;
        createPriceElement(avgPriceLast3Months, 'BTC');

        // Loads function to get eth prices then calls that function and averages the result
        // with the callback
        loadScript("11.1-callback-get-eth-prices.js", getEth);
    }
};

// step 2
function getEth(error){
    if(error){
        console.log(`Error occured: ${error.message}`);
    }
    let avgPriceLast3Months = getEthPrices(12)
        .slice(9, 13)
        .map(coin => coin.price)
        .reduce((a,b) => a+b, 0) / 3;
    createPriceElement(avgPriceLast3Months, 'ETH');

    // Tries to load a script that does not exist. Callback handles the error.
    loadScript("11.1-scriptThatDoesNotExist.js", getNullScript);
};

// step 3
function getNullScript(error){
    if(error){
        console.log(`Error occured: ${error.message}`);
    }
}

function createPriceElement(price, ticker){
    priceParagraphElem = document.createElement("p");
    priceParagraphElem.innerHTML = `${ticker} price: ${price}`;
    priceParagraphElem.style = "color:yellow; background:black;";
    document.body.appendChild(priceParagraphElem);
}

// Can have a "pyramid of doom" or "callback-hell" if we nest asynchronous functions.
// We need promises for this to handle them neatly. Will clutter namespace if using toplevel functions.
