export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // OR return str[0].toUpperCase() + str.slice(1);
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(tidyUpString).map(capitalise); // You are allowed to edit this line
console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
