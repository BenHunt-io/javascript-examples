
// Boolean conversion is performed for conditional statements.
// 6 falsy values: 0, "", null, undefined, NaN evaluate to false.
if(0 || "" || null || undefined || NaN || false){
    console.log("I'll never executed because I evaluate to falsy");
}
else if(1 && true && "nonEmptyString"){
    console.log("true");
}


// Conditional branching based on defined vs undefined properties.
let error = {};

if(error.msg){
    console.log("The error does not have a msg property defined.");
}

error.msg = "Could not perform calculation due to incomplete input";

if(error.msg){
    console.log(`Calculation failed: ${error.msg}`);
}

// Nullish coalescing operator (86% browser support as of 2021-04-08)

let num1;
let num2 = null;
let num3 = 1337;

// finds first defined value (not null nor undefined)
let num4 = num1 ?? num2 ?? num3;
console.log(num4);

// alternative to nullish coalescing
if(num1){
    num4 = num1;
} else if(num2){
    num4 = num2;
} else if(num3){
    num4 = num3;
}



// while, do-while, for
let i = 0;
while(i<3){
    console.log(`printing value from while loop ${i}`);
    i++;
}

// do will execute once regardless of the while condition
do {
    console.log(`printing value from do-while loop ${i}`);
    i++;
}
while(i<6);

for(let i = 0; i<3; i++){
    console.log(`printing value from for loop ${i}`);
}

outer : for(let i = 0; i<3; i++){
    console.log(`printing value from for loop break example ${i}`);
    for(let j = 0; j<3; j++){
        console.log(`printing value from for loop break example ${j}`);
        for(let k=0; k<3; k++){
            console.log(`printing value from for loop break example ${k}`);
            // can't use labels to jump to arbitary places in the code.
            // needs to be within a code block
            break outer;  
        }
    }
}

// switches
switchExample('2');
switchExample('3');

function switchExample(input){
    // switches have strict equality matching. No conversions.
    switch(input){
        case '0':
        case '1':
            console.log("Case 0 or 1");
            break;
        case '2':
            console.log("Case 2");
            break;
        case 3:
            console.log("never executes");
        break;
    }
}