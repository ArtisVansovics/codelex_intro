export {};

const removeFromArray = function(arr: number[], ...numExclude: number[]): number[] {
    let newArr: number[] = []
    for (let i = 0; i < numExclude.length; i++) {
        newArr = arr.filter(a => a !== numExclude[i])
    }
    return newArr
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/* 
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

// using rest parameter syntax to turn indefinite number of arguments into an array, so that number of arguments in the function can change