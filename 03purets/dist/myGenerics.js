"use strict";
//create a number type array that stores scores:
const score = [];
//create a string type array that stores names:
const names = [];
//create an identity that accepts a val of boolean or number:
function identityOne(val) {
    return val;
}
//DONT USE ANY
function identityTwo(val) {
    return val;
}
//the actual topic:
//any could be ANYTHING, Type almost like any, but <Type> actually logs the type of that value
function identityThree(val) {
    return val;
}
//pass number 3 (returns the actual number type of 3):
identityThree(3);
//returns an actual boolean:
identityThree(true);
//T (or any letter) is shortcut for Type:
function identityFour(val) {
    return val;
}
//use the Bottle type we created^
identityFour({ brand: "caleb", type: 3 });
