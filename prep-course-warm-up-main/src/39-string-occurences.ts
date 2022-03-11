export {};

const count = (str: string, word: string) => {
    let lowerCase = str.toLowerCase()
    return (lowerCase.match(new RegExp(word, "g")) || []).length
};


console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1

// .toLowerCase() because .match is case sensitive, need to add "|| []" because .match returns "null"