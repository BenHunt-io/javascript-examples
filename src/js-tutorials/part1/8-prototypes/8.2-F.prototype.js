
function Ben(name){
    this.name = name;
}

let ben  = new Ben("BenHunt");
let benTwo = ben.constructor("BigBean");
console.log(Ben.constructor);