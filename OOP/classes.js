// The Object,constructor discussed earlier are in ES5,in Es6 classes are introuced
// classes are similar to classes in other programming languages like C++,python 
class Book {
    constructor(_title, _author, _year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getsummary() {
        return `${this.title} was written by the ${this.author} in the year 1999`;
    }
}

// Instantiating a object 
const book1 = new Book("Harry Potter", "J.k Rowling", 1999);  