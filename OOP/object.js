/*--------------Objects-----------------------*/
// objects are similar to that of in another programming languages
// In js objects are like dictonaries in python
// objects takes key value pairs
let person = {
    Name: 'SaiSri Angajala',
    age: 20,
}

// Accessing the properties of object
// There are two ways to access the properties of object
// 1.Using Dot Notation
// 2.using the braces [] {similar to that of dictonary}

console.log(person.Name)
console.log(person['age'])
// Both the approaches have pros and cons

const book = {
    title: "Harry potter",
    author: "j.k Rowling",
    year: 1999,
    summary() {
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
        //example of string literal
    }
}
console.log(book.title);
console.log(book.year);
console.log(book.summary());

// if we want to get all the values of the objects we can use the object.values(Objectname) similarly for the keys Object.keys(objectname) 
console.log("The vlaue of the book object is : ");
console.log(Object.values(book));
console.log("The keys of the book object is : "); 
console.log(Object.keys(book));