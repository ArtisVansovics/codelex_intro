export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 * 
 */


function isBlank(text: string | null): boolean {
// check if variable is falsey or it only has blank spaces in it (remove them with .trim)
  return !text || !text.trim();
  // OR return !text || text.trim() === "";
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false

/* OR use
function isBlank(text: string) {
  if(!text || text.trim() === "") {  
  return true;
  } else {
    return false;
}
}
*/