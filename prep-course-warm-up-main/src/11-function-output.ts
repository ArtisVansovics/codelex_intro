export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string) {
  // Write the body of this function to concatenate three words together with space between them
  return firstWord.concat(' ', secondWord, ' ', thirdWord);
}

function concatenate2(firstWord: string, secondWord: string, thirdWord: string) {
  // Inserting parameters in string using ${} !!!
  return `${firstWord} ${secondWord} ${thirdWord}`;
}

const result = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"

const result2 = concatenate2("Hello", "from", "CODELEX");
console.log(result2); // Expected output: "Hello from CODELEX"