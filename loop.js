let arr = ['takeuforward', 'codeunity', 1, 2, 3]
//For loop
console.log('Printing arr elements using for loop')
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
//while loop
console.log('Printing arr elements using while loop')
let i = 0
while (i < arr.length) console.log(arr[i++])
//Itearting over strings
console.log('Iterating through the string')
let Name = 'Codeunity'
for (let j = 0; j < Name.length; j++) console.log(Name[j])
// for each loop
console.log('Printing Using For each loop')
for (let value of arr) console.log(value)

//forEach,map,filter.
// forEach,map,and filter are the higher order array methods. Let's look at one by one

// -----------------forEach----------------
// forEach takes a function and applies the function to every elemnt of arr
console.log('Printing using forEach array method')
arr.forEach(function (val) {
  console.log(val)
})

// -----------map--------------
// map takes the function as argument, and maps the function with every element of the arr,and returns the new array
//In this code,we are getting boolean array which says whether the array element is of type string or not
let bool_arr = arr.map(function (val) {
  return typeof val == 'string'
})
console.log(bool_arr)

// ----------filter-----------
// filter takes the function as argument and applies function on every element of the array,and if the functions returns true it includes the element in the new array else not,and returns the array 
// let's get a new array which contains only string elements 
let str_arr = arr.filter(function (val)
{
    return typeof (val) == "string";
}) 
console.log(str_arr); 