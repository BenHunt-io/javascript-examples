
// Description only useful for debugging purposes.
let id = Symbol("identifier")
let globalID = Symbol.for("identifier")
let ben = {
    firstName: "Ben",
    lastName: "Hunt",
    [id]: 1,
    [globalID] : 99
}