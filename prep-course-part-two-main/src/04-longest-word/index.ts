/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string): string {
    const cleanString: string = sen.replace(/[^A-Za-z ]/g, "")
    const words: string[] = cleanString.split(" ")
    const result = words.reduce((a: string, b: string) => {
        return a.length >= b.length ? a : b
    })
    return result
}

export { longestWord };
