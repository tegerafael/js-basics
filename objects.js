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
