/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
    const maxNum: number = Math.max(...array)
    let result: number = 0
    let func = array.reduce((previousValue, currentValue) => {
        if (currentValue > previousValue && currentValue !== maxNum) {
            result = currentValue
        }
        return result
    })
    return result
}

export { secondLargest };
