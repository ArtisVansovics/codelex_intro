export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(a: number, b: number) {
    return ((b - a) + 1) * (a + b) / 2
}
console.log(sumAll(1, 4)); // Expected output: 10

// OR use function below, in case if a > b 
console.log(sumAll(4, 1)); // Outputs - 5 !!!
const sumAll2 = function(a: number, b: number) {
    let arr = [a, b]
    let max = Math.max.apply(Math, arr)
    let min = Math.min.apply(Math, arr)
    let numOfIntegers = max - min + 1
    return numOfIntegers * (a + b) / 2
}
console.log(sumAll2(1, 4)); // Expected output: 10
console.log(sumAll2(4, 1)); // Expected output: 10
