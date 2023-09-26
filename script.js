const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	// Initialize a count for read books
  let count = 0;

  // Loop through the library array
  for (const book of library) {
    // Check if the readingStatus is true
    if (book.readingStatus === true) {
      count++;
    }
  }

  // Return the count of read books
  return count;
};

// Do not change the code below

alert(numberOfBooksRead());
