
// same thing, async function always return a promise
async function getBtcPrice(){
    return 21_521;
}

async function getBtcPrice_v2(){
    return new Promise(resolve => setTimeout(() => resolve(21_521), 2000));
}

async function getBtcPriceRounded(){

    // Can only use in async function. (modern browsers support async at top level inside modules)
    // I presume to make things non-blocking
    let price = await getBtcPrice_v2();
    return Math.floor((price / 1000)) * 1000;
}

getBtcPriceRounded()
    .then(price => console.log(`Price of btc rounded down: ${price}`));



/**
 * Javascript.info Tasks
 */

// call async from non-async
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f(){
    wait().then(result => {
        // logic here
    });
}


// rewrite the following fucntion using async/await

function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404


async function loadJsonAsync(url){

    try {
        let response = await fetch(url);

        if(response.status == 200){
            return response.json();
        }

        throw new Error(response.status);
    }catch(exception){
        console.log(`Handling exception: ${exception.message} in async function`);
    }
}

loadJsonAsync('https://javascript.info/no-such-user.json');


// ToDo: Rewrite "rethrow" with async/await