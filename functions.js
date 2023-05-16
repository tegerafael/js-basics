// function declaration and hoisting
walk(); // permission ok
function walk() {
  console.log("walk");
}

// anonymous function expression
// run() // not permission
let run = function () {
  console.log("run");
};

let move = run;
move();

// arguments
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4));

// the rest operator
function sum3(discount, ...price) {
  const total = price.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum3(0.1, 20, 30));

// default parameters
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5));

// getters and setters
const person = {
  firstName: "Tiago",
  lastName: "Rafael",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts2 = value.split("");
    this.firstName = parts2[0];
    this.lastName = parts2[1];
  },
};

console.log(person);

// try catch
const person2 = {
  firstName: "Tiago",
  lastName: "Rafael",
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts2 = value.split(" ");
    if (parts2.length !== 2) throw new Error("Enter a first and last name");
    this.firstName = parts2[0];
    this.lastName = parts2[1];
  },
};

try {
  person2.fullName = "";
} catch (error) {
  console.log(error);
}

console.log(person2);
