/**
 * 
 * Arrow Functions
 * 
 * (lambda's in java)
 */


/**
 * let add = function(augend, addend){
 *    if(augend === undefined && addend === undefined){
 *        return;
 *    }
 *    return augend + addend;
 * }
 */

// Short-hand for the above
// (arg1, arg2, ...) => expression;
let add = (augend, addend) => augend + addend;
console.log(add(1,2)); // 3

// multi-line
let addAndLog = (augend, addend) => {
    let result = add(augend, addend);
    console.log(result);
};

addAndLog(3,4); // 7

