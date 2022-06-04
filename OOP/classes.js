// The Object,constructor discussed earlier are in ES5,in Es6 classes are introuced
// classes are similar to classes in other programming languages like C++,python 
class Book {
    constructor(_title, _author, _year) {
        this.title = _title;
        this.author = _author;
        this.year = _year;
    }
    getsummary() {
        return `${this.title} was written by the ${this.author} in the year 1999`;
    }
}

//Another notation of declaring class without using the constructor.
//This is most feasible way of declariation, this is avaibale in ES7
class book {
    title = "C++";
    autbor = 'Mosh';
    year = 2000;
    getsummary = () => {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}
// Instantiating a object 
const book1 = new Book("Harry Potter", "J.k Rowling", 1999);
const book2 = new book();
console.log(book1.getsummary());
console.log(book2.getsummary()); 