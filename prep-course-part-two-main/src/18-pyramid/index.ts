/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    for (let i = 0; i < n; i++) {
        let line: string = ''
        for (let j = 0; j < n - i - 1; j++) { // number of spaces decreases as i gets bigger
            line += ' '
        }
        for (let k = n; k < n + i; k++) { // always prints at least one #
            line += '#'
        }
        for (let l = n - 1; l < n + i; l++) {
            line += '#'
        }
        for (let m = 0; m < n - i - 1; m++) {
            line += ' '
        }
        console.log(line)
    }
}

export { pyramid };
