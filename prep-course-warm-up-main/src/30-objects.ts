export {};

/**
 * Ah, objects...
 * One of the most important concepts to understand in programming,
 * especially in JavaScript since the whole language is pretty much just objects 🤯
 *
 * Luckily they're not so difficult to learn. As always w3schools will help:
 *  - https://www.w3schools.com/js/js_objects.asp
 */

 interface ExampleObject {
  [index: number]: {
    title: string;
    author: string;
  };
}
// Using "index signature", as the value consisting of "title" and "author" doesn't have a named key 
const books: ExampleObject = [
  {
    title: "4 hour work week",
    author: "Tim Ferris"
  },
  {
    title: "Tools of Titans",
    author: "Tim Ferris"
  }
];

const getTheTitles = (obj: ExampleObject) => {
  let result: string[] = [];
  for (let i = 0; i < Object.keys(obj).length; i++) { // Object.keys returns an array of property names
    result.push(obj[i].title);
  }
  return result;
};

console.log(getTheTitles(books)); // Expected output: ['4 hour work week', 'Tools of Titans']
