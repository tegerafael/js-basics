// basics
// object-oriented Programming (OOP)
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

circle.draw(); // method

// camel notation: oneTwoThreeFour
// pascal notation: OneTwoThreeFour

// factory functions
function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle3 = new Circle(1);

// dynamic nature of objects
const circle4 = {
  radius: 1,
};

circle4.color = "red";
circle4.draws = function () {};

delete circle4.color;
delete circle4.draws;
console.log(circle4);

// constructor property

// functions are objects
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.call({}, 1);

const another = new Circle(1);

console.log(Circle.name);

// value vs reference types
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x, y);

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

// enumarating properties of an object
const circle5 = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle5) console.log(key, circle5[key]);

for (let key of Object.keys(circle5)) console.log(key);

// cloning an object
const circle6 = {
  radius: 2,
  draw() {
    console.log("draw");
  },
};

const another1 = {};

for (let key in circle6) another1[key] = circle6[key];
another1["radius"] = circle6["radius"];

console.log(another1);
another1.draw();

// exercise address object
let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);

// exercise Factory and Constructor Function
let address2 = new Address("a", "b", "c");

console.log(address2);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// exercise Object Equality
address3 = address;

console.log(areEqual(address, address2));
console.log(areSame(address, address2));
console.log(areSame(address, address3));

function areEqual(address, address2) {
  return (
    address.street === address2.street &&
    address.city === address2.city &&
    address.zipCode === address2.zipCode
  );
}

function areSame(address, address2) {
  return address === address2;
}

// exercise Blog Post Object
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(post);

// exercise Constructor Function
const posts = new Post("a", "b", "c");

console.log(posts);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

// exercise Price Range Objects
let priceRanges = [
  {
    label: "$",
    tooltip: "Inexpensive",
    minPerPerson: 0,
    maxPerPerson: 10,
  },
  {
    label: "$$",
    tooltip: "Moderate",
    minPerPerson: 11,
    maxPerPerson: 20,
  },
  {
    label: "$$$",
    tooltip: "Expensive",
    minPerPerson: 21,
    maxPerPerson: 50,
  },
];

let restaurante = [{ averagePerPerson: 5 }];
