/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
    const arr: string[] = str.split('')
    const obj = arr.reduce((a,i) => (a[i] = a[i] + 1 || 1, a), {})
    let max = Math.max(...Object.values(obj))
    return Object.entries(obj).reduce((a,[k,v]) => v === max ? a + k : a, '')
}

export { maxChar };
