const {
    PriorityQueue,
    MinPriorityQueue,
    MaxPriorityQueue,
  } = require('@datastructures-js/priority-queue');

let ben = {
    name : "Ben",
    age : 26,
}

let tim = {
    name : "Tim",
    age : 30,
}

main();

function main(){
    let minHeap = new MinPriorityQueue(person => person.age);
    minHeap.enqueue(ben);
    minHeap.enqueue(tim);

    console.log(minHeap.toArray().map(person => person.age)); // [26, 30]

    let arrHeap = new MinPriorityQueue(arr => arr[0]);
    let arr = [1, 2];
    let arrOther = [3, 4];
    arrHeap.enqueue(arr);
    arrHeap.enqueue(arrOther);

    console.log(arrHeap.toArray().map(arr => arr[0])); // [1, 3]

    let map = new Map([
        [1, 3],
        [2, 2],
    ])
    let entryHeap = new MinPriorityQueue(entry => entry[1]);
    for(let entry of map){
        entryHeap.enqueue(entry);
    }

    console.log(entryHeap.toArray().map(entry => entry[0])); // [2, 1]


}