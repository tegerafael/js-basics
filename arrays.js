// adding elements
const numbers = [3, 4];

// end
numbers.push(5, 6); // add in finish of array

console.log(numbers);

// beginning
numbers.unshift(1, 2); // add on start of array

console.log(numbers);

// middle
numbers.splice(2, 0, "a", "b");

console.log(numbers);

// finding elements (primitive)
number = [1, 2, 3, 1, 4];

console.log(number.indexOf(3));
console.log(number.lastIndexOf(1));

console.log(number.indexOf(1) !== -1);
console.log(number.includes(1));

// finding elements (reference type)
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// arrow functions
const course = courses.find((course) => {
  return course.name === "b";
});

console.log(course);

// removing elements
const numbers2 = [1, 2, 3, 4];

// end
const last = numbers2.pop(); // remove last
console.log(last);

// beginning
const first = numbers2.shift(); // remove first
console.log(first);

// middle
numbers2.splice(2, 1); // remove middle
console.log(numbers2);

// emptying an array
let numbers3 = [1, 2, 3, 4];
let another = numbers3;

// solucion 1
numbers3 = [];
console.log(another);

// combining and slicing arrays
const first1 = [1, 2, 3];
const second2 = [4, 5, 6];

const combination = first1.concat(second2); // combining

console.log(combination);

const slice = combination.slice(2);

console.log(slice);

// the spread operator
const combined = [...first1, "a", ...second2, "b"];

const copy = [...combined];

console.log(copy);

// iterating an array
const numbers4 = [1, 2, 3];

for (let number of numbers4) console.log(number);

numbers4.forEach((number, index) => console.log(number, index));

// joining arrays
const numbers5 = [1, 2, 3];
const joined = numbers5.join(",");
console.log(joined);

const message = "This is my first message";
const parts = message.split(" ");
console.log(parts);

const combined2 = parts.join("-");
console.log(combined2);

// sorting arrays
const numbers6 = [3, 1, 2];
numbers6.sort();
console.log(numbers6);

numbers6.reverse();
console.log(numbers6);

const courses2 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "A" },
  { id: 4, name: "b" },
];

courses2.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

console.log(courses2);

// testing the elements of an array
const numbers7 = [1, 2, -1, 3];

const all = numbers7.every((value) => {
  // all elements >= 0
  return value >= 0;
});

const one = numbers7.some((value) => {
  // one elemente >= 0
  return value >= 0;
});

console.log(all);
console.log(one);

// filtering in array
const numbers8 = [1, -1, 2, 3];

const filtered = numbers8.filter((value) => {
  return value >= 0;
});

console.log(filtered);

// mapping an array
const numbers9 = [1, -1, 2, 1];

const items = filtered.map((n) => ({ value: n }));

console.log(items);

// reducing an array
const numbers10 = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers10) sum += n;

const sum2 = numbers10.reduce(
  // new sum
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
console.log(sum2);

// exercise array from range
const numbers11 = arrayFromRange(1, 4);

console.log(numbers11);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// exercise includes
const numbers12 = [1, 2, 3, 4];

console.log(includes(numbers12, 1));

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

// exercise except
