// Create an array of book objects where each book has:

// { title: "Book Name", author: "Author Name", isAvailable: true }

// Write functions to:
//     List all books.
//     Mark a book as borrowed (isAvailable = false).
//     Return a book (isAvailable = true).
//     Find books by a specific author.

const books = [
  { title: "Book1", author: "Author1", isAvailable: false },
  { title: "Book2", author: "Author2", isAvailable: true },
  { title: "Book3", author: "Author4", isAvailable: false },
  { title: "Book4", author: "Author4", isAvailable: true },
  { title: "Book5", author: "Author1", isAvailable: true },
  { title: "Book6", author: "Author6", isAvailable: false },
];

function listBooks() {
  // Write your code here
  // don't use callback and arrow function
  for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
  }
}

function markAsBorrowed(title) {
  //     // Write your code here
  //     for (let i = 0; i < books.length; i++) {
  //       if (books[i].title === title && books[i].isAvailable) {
  //         books[i].isAvailable = false;
  //         console.log("Has been borrowed");
  //         return;
  //       }
  //    }
  for (let book of books) {
    if (book.title === title && book.isAvailable) {
      book.isAvailable = false;
      console.log(`${title} has been borrowed.`);
      return;
    }
  }
}

function returnBook(title) {
  // Write your code here
  for (let book of books) {
    if (book.title === title && book.isAvailable) {
      book.isAvailable = true;
      console.log(`${title} has been borrowed.`);
      return;
    }
  }
}

function findBooksByAuthor(author) {
  // Write your code here
  for (let book of books) {
    if (book.author === author) {
      console.log(book);
    }
  }
}

console.log(listBooks());
console.log(markAsBorrowed("Book1"));
console.log(returnBook("Book1"));
console.log(findBooksByAuthor("Author1"));