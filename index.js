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
