// Function Expressions
i = 0;
let hitCount = function() {
    return i++;
}

console.log(hitCount);
console.log(hitCount);
console.log(hitCount());
console.log(hitCount());

// Callback Functions
function cookBurger(cookMethod, vegan = true){
    if(vegan)
        cookMethod("Stove");
    else
        cookMethod("Grill");
}

// Anonymous Function
cookBurger(function(cookType) { 
    if(cookType == "Stove")
        console.log("Cooking on the Stove");
    else
        console.log("Cooking on the Grill");
});



