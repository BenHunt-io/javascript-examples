// Optional function parameters typescript
function printFourParametersTs(a: string, b?: string, c?: string, d?: string){
    console.log(`a:${a}, b:${b}, c:${c} d:${d}`);
}

printFourParametersTs("A", "D");

// typescript compiler error, required a parameter 
// printFourParametersTs();