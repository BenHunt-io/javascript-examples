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


// Lambdas
function createElement(attributeOne, attributeTwo){
    return "Created element " + attributeOne + " " + attributeTwo;
}

const element = createElement("button", "red");
console.log(element);

// creates a function that points to another function.
const functionElement = () => createElement("button", "green");
console.log(functionElement);
console.log(functionElement());

// "Short-hand" function
const functionElementParam = (attributeOne) => createElement(attributeOne, "yellow");
console.log(functionElementParam("paragraph"))