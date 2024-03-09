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
//take an input as an array (define as generic <T>):
//return type T is one value inside the array of products
// function getSearchProducts<T>(products: T[]): T {
//   //do some database operations
//   const myIndex = 3;
//   return products[myIndex];
// }
//convert this exact function^ into an arrow function:
//<T> is an indecation that this will be a generic
// <T,> mentions that this is a syntax for generics, not for JSX syntax
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
//Generic taking in two inputs, with return type of object:
//inputs to this function are (T, U)
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
//this class will handle some of these cases:
//<T> = Generic class (can take any type of values up here^)
class Sellable {
    constructor() {
        //cart is an array of items of type T:
        this.cart = [];
    }
    addToCart(products) {
        //add these products^ (type T):
        this.cart.push(products);
    }
}
