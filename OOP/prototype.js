// -----------------Prototype-----------------
// prototype is used declare the methods outside the constructor function, like in c++
// but here we need not to declare the function inside in constructor like we do in the c++

function book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
// let's declare a method of the book object,outside the constructor using the prototype
// Syntax is constructor.prototype.functioname
// let's create a getsummary,gettitle,and getyear methods using the prototype

book.prototype.getsummary = function () {
    return `${this.title} was written by ${this.author} in the year 
    ${this.year}`;
}
book.prototype.gettitle = function () {
    return this.title;
}
// /We can manipulate the properties of the class inside the methods
// let's change the year 
book.prototype.changeyear = function () {
    this.year = 2000;
}
const book1 = new book("Harry Potter", "J.K Rowling", 1999);
console.log(book1.getsummary());
console.log(book1.title);
console.log("book published year before changing ", book1.year);
book1.changeyear();
console.log("book published year after changing ", book1.year);
