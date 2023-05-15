// exercise Max of Two Numbers
function max(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

let numbers = max(2, 2);
console.log(numbers);

// exercise Landscape or Portrait
function isLandscape(width, height) {
  return width > height;
}

let x = isLandscape(800, 600);
console.log(x);

// exercise FizzBuzz
// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both 3 or 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number => "Not a number"

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return NaN;
  } else {
    if (input % 3 === 0 && input % 5 === 0) {
      return "FizzBuzz";
    } else if (input % 3 === 0) {
      return "Fizz";
    } else if (input % 5 === 0) {
      return "Buzz";
    } else {
      return input;
    }
  }
}

console.log(fizzBuzz("4"));

// exercise Demerit Points
// speed limit = 70
// 5 => 1 point
// 12 => suspended
// Math.floor()

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("License suspended");
  } else {
    console.log("Points", points);
  }
}

// exercise Even and Odd Numbers

showNumbers(8);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}

// exercise Exercise- Count Truthy
const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// exercise String Properties
const movie = {
  title: "How i met your mother",
  releaseYear: 2018,
  rating: 4.5,
  director: "Tiago",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

// exercise Sum of Multiples 3 and 5
console.log(sum(10));

function sum(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
}

// exercise Grade avg
const marks = [80, 100, 100];

// avg = 70

// 1-59 => F
// 60-69 => D
// 70-79 => C
// 80-89 => B
// 90-100 => A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const avg = calculateAvg(marks);
  if (avg < 60) return "F";
  if (avg < 70) return "D";
  if (avg < 80) return "C";
  if (avg < 90) return "B";
  return "A";
}

function calculateAvg(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / array.length;
}

// exercise stars

showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// exercise prime numbers
showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}
