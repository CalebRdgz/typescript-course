//convert this sum function into an arrow function:
function sum(a: number, b: number) {
  return a + b;
}

//^convert to arrow function - function keyword is already assumed
//everything after the arrow is assumed to be returned:
let sum2 = (a: number, b: number) => a + b;

function isPositive(number: number) {
  return number >= 0;
}
//^convert to arrow function:
let isPositive2 = (number: number) => number >= 0;

function randomNumber() {
  return Math.random;
}

//^convert to arrow function:
let randomNumber2 = () => Math.random;

//Arrow functions really shine when creating functions with no name (anonymous functions):
document.addEventListener("click", function () {
  console.log("Click");
});

//^convert to arrow function:
document.addEventListener("click", () => console.log("Click"));

//Person class - takes in a name in the constructor
//has 2 functions - printNameArrow() and printNameFunction()
class Person {
  name: string;
  constructor(name: string) {
    //set this.name(outside the constructor^) to the name^(in this constructor)
    this.name = name;
  }

  //uses arrow function inside of a timeout that prints name after a 100 millisecond delay:
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  //same as printNameArrow function, but uses the function keyword, instead of arrow function syntax:
  printNameFunction() {
    setTimeout(function () {
      //this.name will be different in this regular function vs the arrow function:
      console.log("Function " + this.name);
    }, 100);
  }
}

let person = new Person("Caleb");
person.printNameArrow();
person.printNameFunction();

export{}