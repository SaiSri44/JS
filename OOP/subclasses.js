// subclasses are more  like inheritence
// We get the properties, methods of one class into another class
class book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getsummary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
}

class Magazine extends book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
} 
const m1 = new Magazine("Harry Potter", "J.K Rowling", 1999,34);
console.log(m1.getsummary());
//In the above example, Magazine is the subclass and we are inherting book class into Magazine
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods