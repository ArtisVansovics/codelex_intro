export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

const map = (arr: number[], func: (x: number) => number): number[] => {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(func(arr[i]));
  }
  return newArr
};

const numbers = [1, 2, 3];
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]

// create epmty array, .concat the result of func() to previous results with for 