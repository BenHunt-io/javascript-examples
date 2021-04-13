// A way to define functions as Strings.. Can use this to execute functions retrieved from a server.
// Function is created in the global lexical enviornment and cannot access outer variables.
let func = new Function(["arg1, arg2"], "console.log(`arg1: ${arg1}, arg2: ${arg2}`)")
func("Ben", "isCool");

let add = ({a},b) => console.log(a);

add({b:"Ben"},2);
