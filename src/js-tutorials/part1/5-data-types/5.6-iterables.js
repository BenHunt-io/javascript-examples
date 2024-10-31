let range = {
    from: 1,
    to: 5
};

range[Symbol.iterator] = function() {

    // Iterator Object
    return {
        current: this.from,
        last: this.to,

        // Define the iteration
        next() {
            if(this.current <= this.last){
                // Object iterator returns
                return {done: false, value: this.current++};
            }else{
                return {done: true};
            }
        }
    }
}

for(let num of range){
    console.log(num); // 1 \n 2 \n 3 \n 4 \n 5 \n
}


// Integrated Iterator (also infinite iterator)
let fib = {
    num1: 0,
    num2: 1,

    [Symbol.iterator]()  {
        this.beforeCurrent = this.num1;
        this.current = this.num2;
        return this;
    },

    next() {
        let temp = this.current;
        this.current = this.current + this.beforeCurrent;
        this.beforeCurrent = temp;
        return {done: false, value: this.current};
    }
}

let count = 0;
let fibNums = [];
for(let n of fib){

    fibNums.push(n);

    if(count == 30){
        break;
    }
    count++;
}
console.log(fibNums); // fib sequence to fib(20) = 17711

// Strings iterate
console.log("Iterating through string:");
let food = "Beans";
for(let char of food){
    console.log(char); // B \n e \n a \n n \n s \n
}


// Calling iterator explicitly
console.log("Calling iterator explicitly:");
foodIterator = food[Symbol.iterator]();
let next = foodIterator.next();
while(!next.done){
    console.log(next.value); // B \n e \n a \n n \n s \n
    next = foodIterator.next();
}


// Converting iteratable or array-like objects into actual arrays.
let arr = Array.from(range);
console.log(arr[3]); // 4
