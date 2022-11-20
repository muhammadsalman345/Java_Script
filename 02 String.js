// String

let abc = "Salman"

console.log(abc[3]);
console.log(abc[abc.length-2]);
// index start with zero 0 
//  S      A     L      M     A       N
// [0]     [1]   3      4     5       6

let cde = abc.length


console.log(cde);
let abcd = "           Salman    "
console.log(abcd);
let cdef = abcd.length

console.log(cdef);// with space


// how to remove space
// immutible hai new string dayga

let newstring = abcd.trim()
console.log(newstring); 
console.log(newstring.length); 



const a = 'a';
const b = 'b';
if (a < b) { // true
  console.log(`${a} is less than ${b}`)
} else if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} and ${b} are equal.`)
}

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); //



const s1 = '2 + 2';              // creates a string primitive
const s2 = new String('2 + 2');  // creates a String object
console.log(eval(s1));           // returns the number 4
console.log(eval(s2));   


const num1 = "salman";
const lastDigit1Str = String(num1).slice(-1); // 👉️ '9'
const lastDigit1Str2 = String(num1).slice(0,2); // sa start se end thak day ga
console.log(lastDigit1Str);
console.log(lastDigit1Str2);