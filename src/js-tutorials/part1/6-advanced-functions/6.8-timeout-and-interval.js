function sayHi(person){
    console.log(`sayHi to ${person}`);
}


let timerId = setInterval(sayHi, 500, "Ben");
setTimeout(clearTimeout, 1250, timerId);
 
// Nested setTimeout calls are more flexible than standard usage of set interval, because you can
// change after how long the nested timeout runs for. 

function printNumbers(from, to){

    let timerId = setInterval(() => {
        console.log(from);
        if(from < to){
            from++;
        }
        if(from == to){
            clearInterval(timerId);
        }
    }, 500);
}

printNumbers(5, 10);