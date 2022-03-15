/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    const words: string[] = str.split(' ')
    let output: any = {}
    for (let i = 0; i < words.length; i++) {
      let wordCount = output[words[i]]
      let count = wordCount ? wordCount : 0
      output[words[i]] = count + 1
    }
    return output
  }
}

export { Words };
