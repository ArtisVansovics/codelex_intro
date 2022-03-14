export {};

/**
 * The good ol' this.. Possibly the most confusing topic in the whole language
 * and one that interviewers often use to make you (me) feel miserable in interviews 😭
 * If you find the docs (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * also confusing, try some of these resources:
 *  - https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 *  - https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
 *  - https://www.youtube.com/watch?v=Pi3QC_fVaD0 (JavaScript this Keyword Explained In 3 Minutes)
 *  - https://www.youtube.com/watch?v=YOlr79NaAtQ (What is THIS in JavaScript? in 100 seconds)
 */

// declaring a class but implementing it with a function
declare class Circle {
  constructor(radius: number) 
}

function Circle(this: any, radius: number) {
  this.radius = radius;
  this.area = function() {
    return (Math.PI * this.radius * this.radius).toFixed(2)
  }
  this.perimeter = function() {
    return (2 * Math.PI * this.radius).toFixed(2)
  };
}

const c:any = new Circle(3); // explicit type as any
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85




function area() {
  throw new Error("Function not implemented.");
}
/**
 * This was the last exercise in this repository.
 * Congratulations on getting this far!
 * So.. looking for some more? Of course we have more!
 * Head to this repo:
 * - https://github.com/codelex-io/noob-exercises/tree/main/03-easy
 * and happy coding!
 */