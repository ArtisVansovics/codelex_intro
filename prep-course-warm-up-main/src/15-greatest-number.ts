export {};

function greatest(x: number, y: number): number {
    if (x > y) {
        return x;
    }else {
        return y;
    }
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
