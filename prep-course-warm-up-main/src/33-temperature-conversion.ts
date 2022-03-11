export {};

/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = (tempInFahrenheit: number) => {
    let temp = (tempInFahrenheit - 32) * 5/9
    return parseFloat(temp.toFixed(1))
}
const celsiusToFahrenheit = (tempInCelsius: number) => {
    let temp = tempInCelsius * 9/5 + 32
    return parseFloat(temp.toFixed(1))
}

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
console.log(fahrenheitToCelsius(100)); // Expected result: 37.8

// use parseFloat() to get rid of trailing zeros, by turning .toFixed result string back into a number