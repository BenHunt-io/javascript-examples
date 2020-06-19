// NodeJS CommonJS module import format
const math = require('./13.1-modules-nodejs-math.js');
const {capitalize} = require('./13.1-modules-nodejs-stringutils')

// Language-level modules don't work with NodeJS
//import {math2} from './13.1-modules-math.js';

console.log(math.add(5,2));
console.log(capitalize("ben"));

// Language-level modules don't work with NodeJS
//console.log(math2(5,2));