import { topLevelIncrement } from "./module-variable-scope";

export let count = 0;
export function increment() {
    console.log(++count);
}