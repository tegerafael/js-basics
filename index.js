// This is my first Java Script code!
console.log("Hello World");

let names = "Tiago";
console.log(names);

// variables
// cannot be a reserved keyword ex: if, else, etc
// should be meaningful
// cannot start with a number ex: 1name
// cannot contain a space or hyphen ex: first-name
// are case-sensitive

// constants // const cannot alter value
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// primitive types
let name = "Tiago"; // string literal
let age = 21; // number literal
let isApproved = true; // boolean literal
let firstName = undefined; // undefined
let color = null; // null

// dynamic typing

// object
let person = {
  name: "Tiago",
  age: 21,
};

// Dot notation
person.name = "Rafael";

// Bracket notation
let selection = "name";
person[selection] = "Oliveira";

console.log(person);

// arrays
let selectedColor = ["red", "blue"];
selectedColor[2] = 1;
console.log(selectedColor.length);

// functions
function greet(name, lastName) {
  // parameter
  console.log("Hello " + name + " " + lastName);
}

greet("Tiago", "Rafael"); // Argument
greet("Alexandra", "Oliveira");

// calculating a value
function square(number) {
  return number * number;
}

console.log(square(2));

// arithmetic operators
let z = 10;
let y = 3;

console.log(z + y);
console.log(z - y);
console.log(z * y);
console.log(z / y);
console.log(z % y);
console.log(z ** y);

// increment ++
console.log(++z); // increment before console
console.log(z++); // increment after console

// decrement --
console.log(++z); // decrement before console
console.log(z++); // decrement after console

// assignment operators
let m = 10;

m = m + 5; //equals line 87
m += 5;

m = m * 3;
m *= 3;

// comparison operators
let k = 1;

// relacional
console.log(k > 0);
console.log(k >= 0);
console.log(k < 0);
console.log(k <= 0);

// equality
console.log(k === 1);
console.log(k !== 1);

// equality operators
// strict equality (type + value)
console.log(1 === 1);
console.log('1' === 1);

// lose equality (value)
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// ternary operators
// if a customer has more than 100 points they are 'gold' customer,
// otherwise, they are 'silver' customer

let points = 101;
let type = points > 100 ? "gold" : "silver";
console.log(type);

// logical operators with non-booleans
// logical and (&&)
// return true if both operands are true
console.log(true && true);

let highIncomes = true;
let goodCreditScores = true;
let eligibleForLoans = highIncomes && goodCreditScores;

console.log(eligibleForLoans);

// logical or (||)
// return true if one of operands is true
let highIncomess = false;
let goodCreditScoress = true;
let eligibleForLoanss = highIncomess || goodCreditScoress;

console.log(eligibleForLoanss);

// not (!)
let highIncomesss = false;
let goodCreditScoresss = false;
let eligibleForLoansss = highIncomesss || goodCreditScoresss;
console.log("Eligible", eligibleForLoansss);

let applicationRefused = !eligibleForLoansss;
console.log("Application refused ", applicationRefused);

// logical operators with non-booleans
// falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// anything that is not falsy -> truthy

// short-circuiting
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// bitwase operators
// 1 = 00000001
// 2 = 00000010
// R = 00000011 // or
// R = 00000000 // and

console.log(1 | 2); // bitwase or
console.log(1 & 2); // bitwase and

// read, write, execute
// 00000100
// 00000110
// 00000111

// 00000110 // 6
// 00000010 // 4
// 00000010 // 4

const readPermission = 4;
const writePermission = 2;
const executePermisson = 1;
let myPermission = 0;
myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);

// operators procedence
let x = (2 + 3) * 4;

console.log(x);

// exercise
let a = "red";
let b = "blue";
let aux;

aux = a;
a = b;
b = aux;

console.log(a);
console.log(b);