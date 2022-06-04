// ... [three free dots] is known as spread/rest operator
// Based upon the usage of the operator spread or rest name is used

// ---------------spread(...)----------------------------
// spread operator is used to split up array elements Or objects properties
// That mean we can use this operator to spread up the elements of array or properties of object into another array or objects
// let's look an example

// ---------------spreading the array elements-----------

const oldarray = [1, 2, 3, 4, 5];
const newarray = [...oldarray, 6, 7, 8]
console.log(newarray)
// newarray = [1,2,3,4,5,6,7,8]
// spread operator spreaded the all the elements of the old array into the newarray, hence all the elements of oldarray are copied into newarray  
const newarray1 = [oldarray, 6, 7, 8]
console.log(newarray1)
console.log(newarray === newarray1)
// newarray and newarray1 are not same, newarray1 oldarray elements are grouped as single element, they are not spreaded inside the newarray1

// ---------------spreading the object properties--------------
const oldobject = {
    Name: 'SaiSri',
    age: 21
}
const newobject = {
    ...oldobject,
    gender: 'value'
}
console.log(newobject)
// All the properites of the oldobject are spreaded inside the newobject,hence newobject also has the properties of oldobject and some additonal properties


// --------------------rest(...)-------------------------
// rest operator is used to merge a list of function arguments into an array
// when ... operator used inside a fucntion then it is known as rest operator
// What it does is,it merges all the arguments passed to the function and makes a array
//We can access these arguments like we acess array elements, and we can perform all kinds of array functions on these arguments array 
function func(...args) {
    for (let i = 0; i < args.length; i++)
        console.log(args[i]);
    return args.sort();
}
console.log(func('SaiSri', 'Angajala', 21, 'Male'));
// Inside the function we are printing the arguments and returning the sorted version of arguments 