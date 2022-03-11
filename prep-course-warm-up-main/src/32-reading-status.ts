export {};
interface libraryObj {
  [i: number]: {
    title: string,
    author: string,
    isRead: boolean
  };
}
const library: libraryObj = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

const showStatus = (obj: libraryObj) => {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (obj[i].isRead == true) {
      console.log(`Already read '${obj[i].title}' by ${obj[i].author}.`)
    } else {
      console.log(`You still need to read '${obj[i].title}' by ${obj[i].author}.`)
    }
  }
}

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/