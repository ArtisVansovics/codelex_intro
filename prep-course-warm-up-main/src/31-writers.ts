export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */
 interface writerObj {
  [i: number]: {
    firstName: string,
    lastName: string,
    occupation: string,
    age: number,
    alive: boolean
  };
}

const writers: writerObj = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function intro(obj: writerObj): void {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (obj[i].alive === true) {
      console.log(`Hi, my name is ${capitalize(obj[i].firstName)} ${capitalize(obj[i].lastName)}. I am ${obj[i].age} years old, and work as a ${obj[i].occupation}.`)
    } 
  }
}

intro(writers)