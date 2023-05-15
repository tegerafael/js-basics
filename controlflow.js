// if and else
// hour
// if hous is between 6am and 12pm: good morning
// if it is between 12pm and 6pm: good afternoon
// if otherwise: good evening
let hour = 18;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// switch and case
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest user!");
    break;
  case "moderator":
    console.log("Moderator user!");
    break;
  default:
    console.log("Unknown user!");
}

// for

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// while
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// do-while // always execute at least one time
let j = 0;
do {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
} while (j <= 5);

// infinite loops
// let k = 0;
// while (k < 5) {
//   console.log(k);
// }

// for in
const person = {
  name: "Tiago",
  age: 21,
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

// for of
for (let color of colors) {
  console.log(color);
}

// break and continue
let t = 0;
while (t <= 10) {
  if (t === 5) break;
  if (t % 2 === 0) {
    t++;
    continue;
  }
  console.log(t);
  t++;
}

