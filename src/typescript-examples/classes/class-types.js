function printGenericObject(obj) {
    console.log("Object: ".concat(obj));
    console.log("Constructor name: ".concat(obj.constructor.name));
}
var Money = /** @class */ (function () {
    function Money() {
    }
    return Money;
}());
printGenericObject(new Money());
