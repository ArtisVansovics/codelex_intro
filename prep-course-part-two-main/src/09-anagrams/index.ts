/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function cleanString(str: string): string[] {
    const strClean: string = (str.replace(/[^A-Za-z]/g, "")).toLowerCase()
    return strClean.split("")
}

function anagrams(stringA: string, stringB: string): boolean {
    const stringAClean: string[] = cleanString(stringA).sort() // sorting all the values in the array
    const stringBClean: string[] = cleanString(stringB).sort()
    const stringAStr: string = stringAClean.join("") // joining the sorted array values into a string
    const stringBStr: string = stringBClean.join("")
    return stringAStr === stringBStr ? true : false
}

export { anagrams };
