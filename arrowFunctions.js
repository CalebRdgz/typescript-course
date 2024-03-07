//convert this sum function into an arrow function:
function sum(a, b) {
    return a + b;
}
//^convert to arrow function - function keyword is already assumed
//everything after the arrow is assumed to be returned:
var sum2 = function (a, b) { return a + b; };
function isPositive(number) {
    return number >= 0;
}
//^convert to arrow function:
var isPositive2 = function (number) { return number >= 0; };
function randomNumber() {
    return Math.random;
}
//^convert to arrow function:
var randomNumber2 = function () { return Math.random; };
//Arrow functions really shine when creating functions with no name (anonymous functions):
document.addEventListener("click", function () {
    console.log("Click");
});
//^convert to arrow function:
document.addEventListener("click", function () { return console.log("Click"); });
//Person class - takes in a name in the constructor
//has 2 functions - printNameArrow() and printNameFunction()
var Person = /** @class */ (function () {
    function Person(name) {
        //set this.name(outside the constructor^) to the name^(in this constructor)
        this.name = name;
    }
    //uses arrow function inside of a timeout that prints name after a 100 millisecond delay:
    Person.prototype.printNameArrow = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Arrow: " + _this.name);
        }, 100);
    };
    //same as printNameArrow function, but uses the function keyword, instead of arrow function syntax:
    Person.prototype.printNameFunction = function () {
        setTimeout(function () {
            //this.name will be different in this regular function vs the arrow function:
            console.log("Function " + this.name);
        }, 100);
    };
    return Person;
}());
var person = new Person("Caleb");
person.printNameArrow();
person.printNameFunction();
