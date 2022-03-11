/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
    let lastDigit: number = 0
    let result: number = 0
    while(int) {
        lastDigit = int % 10 // returns the last digit of the number
        result = (result * 10) + lastDigit
        int = int/10|0 // removes last digit and decimal values
    }
    return result
}

export { reverse };
