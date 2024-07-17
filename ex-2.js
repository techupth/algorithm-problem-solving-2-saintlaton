function findBookIndex(books, searchTitle) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === searchTitle) {
      return i;
    }
  }
  return -1;
}

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

const searchBook1 = "Gone with the Wind";
console.log(findBookIndex(books, searchBook1));

const searchBook2 = "The Master Mind";
console.log(findBookIndex(books, searchBook2));
