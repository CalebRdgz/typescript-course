//create a number type array that stores scores:
const score: Array<number> = [];
//create a string type array that stores names:
const names: Array<string> = [];

//create an identity that accepts a val of boolean or number:
function identityOne(val: boolean | number): boolean | number {
  return val;
}

//DONT USE ANY
function identityTwo(val: any): any {
  return val;
}

//the actual topic:
//any could be ANYTHING, Type almost like any, but <Type> actually logs the type of that value
function identityThree<Type>(val: Type): Type {
  return val;
}

//pass number 3 (returns the actual number type of 3):
identityThree(3);
//returns an actual boolean:
identityThree(true);

//T (or any letter) is shortcut for Type:
function identityFour<T>(val: T): T {
  return val;
}

//create your own Bottle type:
interface Bottle {
  brand: string;
  type: number;
}

//use the Bottle type we created^
identityFour<Bottle>({ brand: "caleb", type: 3 });

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
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}
