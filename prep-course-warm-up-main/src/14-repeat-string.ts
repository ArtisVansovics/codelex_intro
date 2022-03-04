export {};

const repeatString = (str: string, times: number): string => {
    return str.repeat(times);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

// Needed to copy tsconfig.json file from /prep-course-part-two-main to /prep-course-warm-up-main to make .repeat() method run!!!

const repeatString2 = (str: string, times: number): string => {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += str; 
    }
    return result;
};

console.log(repeatString2("a", 4)); // Expected output: 'aaaa'
console.log(repeatString2("b", 5)); // Expected output: 'bbbbb'