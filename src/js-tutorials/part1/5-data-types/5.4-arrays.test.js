// Arrays are Objects!

// Creating empty collection;
let items = new Array();
items = [];

// Can add new elems
// items[0] = "Bronze Longsword";
// items[1] = "Mithril Scimitar";
items[2] = "Amulet of Glory";
console.log(items); // [undefined, undefined, Amulet of Glory]
// Find its length
console.log(items.length); // 3

let count = [5];
console.log(`Array initialization with numbers: ${count}`); // [5]

// Arrays can store elements of anytime type all in the same array.

// Can be used as a Stack (pop/push) or Queue (shift/push).. Technically a Deque

console.log("Demonstration Stack/Queue functionality with Push/Pop/Shift/Unshift")
// Push/Pop can act as a stack operating at the end of the array.
let bensInventory = ["Amulet of Defence"];
console.log(`Ben's Inventory: ${bensInventory}`);
bensInventory.push("Lobster", "Shark"); 
console.log(`Push: ${bensInventory}`); // [Amulet of Defence, Lobster, Shark]
bensInventory.pop();
console.log(`Pop: ${bensInventory}`); // [Amulet of Defence, Lobster]

// Shift/Unshift can act as a stack at the beginning of the array.
bensInventory.shift(); 
console.log(`Shift: ${bensInventory}`); // [Lobster]
bensInventory.unshift("Bronze Longsword");
console.log(`Unshift: ${bensInventory}`); // [Bronze Longsword, Lobster]

// Push/Shift can act as a queue. Shift removes elem from beginning, Push adds elem to end

/**
 * Internals: Javascript engines optimizes storage of elements in contiguous area of memory.
 * Push/Pop run fast (Bc end of array). Shift/Unshift slow.
 */



console.log("Looping through all items:")
for(let item of items){
    console.log(item);
}

// ToString
console.log(items);

// Initialize a 2D array
let text1 = "Apple";
let text2 = "Bagel";
let mutliDimArr = new Array(text1.length).fill(0)
    .map(val => new Array(text2.length).fill(0));
console.log(mutliDimArr);

// Initialize 2D array with no values.
let twoDArr = new Array(10).fill(0).map(v => []);
console.log(`Initialize empty 2d array: ${twoDArr}`);

// Push elements to nested array
let elems = [];
elems.push([]);
elems[0].push("val1");
elems[0].push("val2");
console.log(elems[0]); // [[val1,val2]]
console.log(elems.length);

let vals = [1,2,3];
vals[2]++;
console.log(vals);

// Joining elements
let args = [5, "yellow", 10, "car"];
console.log(args.join());

test('Deep copy of array containing primitive values', () => {

    let nums = [1,2,3];
    let copy1 = nums.slice();
    let copy2 = [...nums];

    copy1[0] = 3;
    copy2[0] = 4;

    expect(nums).toStrictEqual([1,2,3]);
    expect(copy1).toStrictEqual([3,2,3]);
    expect(copy2).toStrictEqual([4,2,3]);
})

test('Shallow copy of array containing objects', () => {

    let nums = [{v:1},{v:2},{v:3}];
    let copy1 = nums.slice();
    let copy2 = [...nums];

    copy1[0].v = 3;
    copy2[0].v = 4;

    // Shallow copy, all arrays point to same objects
    expect(nums).toStrictEqual([{v:4},{v:2},{v:3}]);
    expect(copy1).toStrictEqual([{v:4},{v:2},{v:3}]);
    expect(copy2).toStrictEqual([{v:4},{v:2},{v:3}]);
})

/**
 * Array functional programming operations
 */

test('Reduce edges of graph into adjacency matrix', () => {

    // reduce (collect) edges into an adjacency matrix
    let edges = [[1,2], [0,3], [2,5]];
    let n = 6;
    let adjMatrix = edges.reduce((container, [v1, v2]) => {
        container[v1].push(v2);
        container[v2].push(v1);
        return container;
    }
    , new Array(n).fill(0).map(v => []));

    expect(adjMatrix).toStrictEqual([[3], [2], [1, 5], [0], [], [2]]);
});
