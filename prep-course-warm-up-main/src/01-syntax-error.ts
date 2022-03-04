export {};

function addNumbers(a: number, b: number, c: number): number {
    return a + b + c;
}

const result = addNumbers(1, 3, 4);
const result2 = addNumbers(2, 4, 5);
console.log(result); // Expected output: 8
console.log(result2); // Expected output: 11
