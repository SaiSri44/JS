// In Js function keyword is used to declare the function
function Greet(Name) {
  console.log("Hello " + Name);
}
Greet("SaiSri");
/*Arrow function*/
const Greet2 = (Name) => {
  console.log("Hello " + Name);
};
Greet2("Yamuna");
console.log(Greet("Anuradha"));
/*If there is no return statement, or function doesn't encounter return statement, then it returns the undefined.*/

/* If there is only single argument, we can exclude the brackets 
Note that we can exclude brackets only when there is single argument, we cannot exclude brackets if arguments are lesser or greater than 1
*/
const greet3 = Name => {
  console.log("Hello " + Name);
};
greet3("SaiSri Angajala");
