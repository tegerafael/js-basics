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
