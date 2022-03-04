export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// Destructuring assignment with "..." turns values from the array into distinct variables, so that "Math.max" can read them.

const min = (array: number[]) => {
    return Math.min(...array);
};
const max = (array: number[]) => {
    return Math.max(...array);
};
console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9

//OR Use ".reduce" to compare two values. "?" works as a ternary operator, returning number "a" value, if condition is true, or "b" value, is condition is false (works as shorter "if...else" statement).

const min2 = (array: number[]) => {
    return array.reduce(function (a: number, b: number) {
        return (a < b ? a : b);
    });
};
const max2 = (array: number[]) => {
    return array.reduce(function (a: number, b: number) {
        return (a > b ? a : b);
    });
};
console.log('Results with .reduce method:')
console.log(min2([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min2([9, -3, 6])); // Expected output: -3
console.log(max2([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max2([9, -3, 6])); // Expected output: 9
