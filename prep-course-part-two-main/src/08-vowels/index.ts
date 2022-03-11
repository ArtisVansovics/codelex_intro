/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const isAVowel: string[] = ['a', 'e', 'i', 'o', 'u']

function vowels(s: string) {
    const cleanString: string = (s.replace("'", "").replace(/[^A-Za-z]/g, " ")).toLowerCase()
    const splitString: string[] = cleanString.split('')
    const vowelsInString: string[] = splitString.filter(n => isAVowel.includes(n)) // filters any value from string that is the same value as values in isAVowel
    return vowelsInString.length
}

export { vowels };
