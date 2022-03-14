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
        for (let j = 0; j < n - 1; j++) {
            line += ' '
        }
        
        for (let k = 0; k < i + 1; k++) {
            line += '#'
        }
        
        for (let l = 0; l < n - 1; l++) {
            line += ' '
        }
        console.log(line)
    }
}

export { pyramid };
