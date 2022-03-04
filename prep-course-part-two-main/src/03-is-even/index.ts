/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

const EVEN_DIGITS = [0, 2, 4, 6, 8]

function isEven(n: number) {
    const nAsString = n.toString().split('.')[0]
    const lastDigit = +nAsString[nAsString.length - 1]
    return EVEN_DIGITS.includes(lastDigit)
}

export { isEven };

// "+" to turn string into a number (unary operator)