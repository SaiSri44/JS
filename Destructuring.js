// Destructing is used to easily extract array elements or object properties and store them in variables
//In case of spread and rest operators,we are extracting all the elements/properties and distrubuting them into another array/object,we cannot extract only some particular elements/properties, but destructing allows us to do that.

// -------------Array Destructuring---------------
const array = [1, 2, 3, 4, 5, 6];
// let's extract 1,2,3 numbers from array and store it in a,b,c variables.this can be done using destructuring 
[a, b, c] = array;
console.log(a, b, c);
// so we have successfully extracted only 1,2,3 from the array numbers

// -----------object destructuring---------------
// object destructuring is not avaible in this js version

// syntax is { Name } = {Name :'Saisir',age : 21}
// console.log(Name) //Saisir
// console.log(age) //undefined 