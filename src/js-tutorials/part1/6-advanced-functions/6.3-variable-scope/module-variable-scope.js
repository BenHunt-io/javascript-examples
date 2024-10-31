import { count, increment } from "./add.js";

increment();
increment();
increment();

console.log(count);


let topLevelCount = 0;
export function topLevelIncrement() {
    console.log(++topLevelCount);
}