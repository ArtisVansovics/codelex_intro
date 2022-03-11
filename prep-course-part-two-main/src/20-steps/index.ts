/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    for (let i = 0; i < n; i++) {
        let line: string = ''
        for (let j = 0; j <= i; j++) {
            line = line + '#'
        }
        for (let k = 0; k < n - i - 1; k++) {
            line = line + ' '
        }
        console.log(line)
    }
}

export { steps };
 /*
 function steps(n: number) {
    for (let i = 0; i < n; i++) {
        let line = ''
    for (let j = 0; j < n; j++) {
        if (j <= i) {
            line += '#'
        } else {
            line += ' ';
        }
    }
    console.log(line)
    }
}

for (let i = 1; i <= n; i++) {
        let whiteSpace = ' '.repeat((n - i));
        console.log('#'.repeat(i) + whiteSpace);
    }


 */