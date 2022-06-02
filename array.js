/*Array is similar to the list in python*/
let array = ['saisri', 'Angajala', 1, 2, 3];
console.log(array);
/*Accessing the array elements */
console.log(array[0]);
console.log(array[1]);
/*properties of array*/
// Using dot operator we can get all the properties of array
//Negative indexes are not allowed in js
// -----------length [returns length of array]-----------
console.log("lenght of the array is ", array.length);  
//-----------push()[Pushes new element and returns length of array]---
array.push('Anuradha');
console.log(array);
//-----------pop() [popes last elemnt of array,and returns array]----------
array.pop();
console.log(array);
// -----------reverse() [reverses the array,and returns reference to the array]-------------
array.reverse();
console.log("Array afer reversing ", array);
//------------sort() [sort the array in place,returns the reference to the array]-------------
array.sort();
console.log("Array after sortig ", array);
