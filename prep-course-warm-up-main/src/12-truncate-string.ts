export {};

function truncateString(text: string, lenght: number): string {
    return text.substring(0, lenght);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
