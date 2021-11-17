// Optional function parameters typescript
function printFourParametersTs(a, b, c, d) {
    console.log("a:" + a + ", b:" + b + ", c:" + c + " d:" + d);
}
printFourParametersTs("A", "D");
// typescript compiler error, required a parameter 
printFourParametersTs();
