let x = '10';
if (x == 10) {
    console.log("The value of x is ", 10);
}
/*== matches only the value, not the datatype, use === to match the data type also.
'10' == 10 (true)
'10'=== 10 (false)
*/
if (x === 10)
    console.log("The data type is also matched.");
else
    console.log("The Data type not matched");
/*It is always better to use === */

let y = 3;
if (y === 3)
    console.log("y is equal to 3");
else if (y > 3)
    console.log("y is greater than 3");
else
    console.log("y is less than 3");

// -----or(||), and (&&)------------
if (y > 1 && y < 3)
    console.log("y is greater than 1 and less than 3");
else if (y == 3 || y > 3)
    console.log("y is either equal or greater than 3");
else
    console.log("y is less than 1");

// ---Ternary operator ------------
let color = y > 3 ? 'red' : 'blue';
console.log(color);

//------switch statements---------
switch (color) {
    case 'red':
        console.log("Color is red");
        break;
    case 'blue':
        console.log("color is blue");
        break;
    default:
        console.log("color is neither blue nor red");
        break;
}  