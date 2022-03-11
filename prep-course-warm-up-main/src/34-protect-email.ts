export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */


const protectEmail = (email: string) => {
    let beforeAt = (email.split("@"))[0] 
    let hide = "..."
    return email.substring(0, 3) + hide + email.substring(beforeAt.length)
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com

// use .split to split email into to two string array at "@" and then use the length of the first string (at index 0) to know where to insert the second .substring
