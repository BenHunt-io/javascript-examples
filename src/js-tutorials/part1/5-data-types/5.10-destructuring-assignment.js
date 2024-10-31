

// destructure any iterable
let beans = new Set(['kidney', 'black', 'pinto']);
let [kidney, black, pinto] = beans;

// defaults
let [first="guest", last="n/a"] = [];

// swap
let [x, y] = [1, 2];
[y, x] = [x, y];

// rest paramters - assign first elems to variable, then rest to names array
let [ben, tim, ...names] = 'ben, tim, john, chris, aaron, pablo';


// destructure objects
let userConfig = {
    handle: "therealbenji",
    privateFeed: true,
    readReceipts: true,
}

// can extract only some properties and set defaults
let {handle: username, readReceipts, lastLogin=new Date()} = userConfig;
console.log(username); // therealbenji


// nested destructuring
let appConfig = {
    
    appName: 'commitPro',
    featuresEnabled: new Set(['weight', 'run', 'swim']),
    loggingOutput: 'stdout',
    caching: {
        enabled: true,
        evictionPolicy: "lru",
        size: 1_000_024 // bytes
    }
}

let {
    appName: name,
    featuresEnabled: [weight, run, swim],
    loggingOutput,
    caching: {
        enabled,
        evictionPolicy: eviction,
        size: bytes
}} = appConfig;

console.log(`App:${name}, Features:${weight},${run},${swim}
Logging:${loggingOutput}, Caching:${enabled} with size:${bytes}`);



// destructuring entries
let user = {
    age: '26',
    name: 'ben',
    disabled: false
}
for(let [k, v] of Object.entries(user)){
    console.log(`k:${k}, v:${v}`); // k:age, v:26 \n k:name, v:ben \b k:disabled, v:false \n
}


// Practice Task -- The Maximal Salary
let max = findMaximalSalary({
    ben: 300,
    john: 500,
    sarah: 700
});

console.log(max); // sarah

function findMaximalSalary(salaries){

    let max = 0;
    let maxKey = salaries[0];
    for(let [k, v] of Object.entries(salaries)){
        if(v > max){
            max = v;
            maxKey = k;
        }
    }

    return maxKey;
}

// Smart function parameters:
// Use destructuring to remove ambiguity in function parameters

let commitId = 1;

let runCommitment = {
    name: "Run 30 miles in 30 days",
    valueCommitted: {
        value: 1,
        currency: 'btc'
    }
};

let commitment = createCommitment(runCommitment);
console.log(commitment); 

function createCommitment({name=getCommitId(), length="30", socialShame=true, valueCommitted : {currency, value}}){
    let commit = `Created commitment with name "${name}" and duration ${length} days. `;

    commit += "Upon failure ";
    if(socialShame){
        commit += "we will post a shameful loss on your social media ";
    }

    if(value && currency){
        commit += `and we charge you ${value} ${currency}`;
    }

    return commit;

}


function getCommitId(){
    return commitId;
}


// More practice destructuring with an object as a function parameter
function addEntry(map, {key, val: {height, age}}){
    map.set(key, {height:height, age:age});
}

let map = new Map();
addEntry(map, {key: "tom", val: {height:"6.0ft", age:30}});
console.log(map);