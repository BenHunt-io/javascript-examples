

let operandOne = Number(prompt("Enter operand 1:", 1));
let operandTwo = Number(prompt("Enter operand 2:", 2));
let operator = prompt("Enter operator:", "+");
showCalculationOnDOM(operandOne,operandTwo,operator);

function add(a, b){
    return a + b;
}

function showCalculationOnDOM(a,b,operator){
    document.body.innerText = a + operator + b
        + "=" + add(a,b);
}