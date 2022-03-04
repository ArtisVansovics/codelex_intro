export {};

function s(w1: string, w2: string): string {
  return w1.concat(' ', w2);
}

const result = s('hello', 'world'); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
