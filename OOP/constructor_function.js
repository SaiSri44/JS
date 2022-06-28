//constructor funcitons
/*Constructor function turns into class internally */
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.summary = function () {
    return `${this.title} was written by the ${this.author} in the year ${this.year}`;
  };
  this.gettitle = () => {
    return this.title;
  };
}

const book1 = new book("Harry Potter", "J.K Rowling", 1999);
const book2 = new book("C++", "Mosh", 2000);
console.log(book1.author);
console.log(book2.author);
// /new keyword is used to create the object of the class or constructor function in java script
console.log(book1.summary());
console.log(book2.summary());
console.log(book1.gettitle());
console.log(book2.gettitle());
