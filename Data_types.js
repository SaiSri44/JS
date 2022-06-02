/*Data Types in java Script : 
There are two types of Data types  :
Primitive/Value Types                      Reference Types
1.String                                   1.object
2.Number                                   2.Array
3.Boolean                                  3.Functions
4.undefined
5.null
*/

/*------------Primitive/value Types---------------------*/
let Name = 'SaiSri' //string
let age = 21 //number {int,floats all come under numbers only}
let inIIT = true //boolean
let college //for a variable if no value is assigned, then automatically it's value is undefined. We can explictly declare the undefined value too.
college = undefined
let isselected = null

//typeof() function is used to find the type of variable.
console.log(typeof Name)
console.log(typeof age)
console.log(typeof college)

age = 21.535
console.log(typeof age)

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
