function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  //only returns this case if its 100% sure its not a string:
  return val + 3;
}

//id cound be a string or null(no id)
function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return; //return the method here
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  //DO NOT DO THIS!!:
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin; //account is 100% in Admin interface type
  }
}

//x can be a Date or a string, how can we find a Date?

// new Array() - anything that can use this "new" keyword (Objects, etc.)
function logValue(x: Date | string) {
  //if x is an instance of Date type:
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    //the x value is 100% a string here after checking for the Date type:
    console.log(x.toUpperCase());
  }
}

//definig a type of the Fish:
type Fish = { swim: () => void };
//birds fly, not swim
type Bird = { fly: () => void };

//validate if the input value is a fish or bird type:
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined; //if swim function is not in Fish, then it is not type Fish
  //^this is returning a boolean, not a type of Fish or Bird
}

//get food for either fish or bird:
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

//Discriminated Unions:
interface Circle {
  kind: "circle";
  raidus: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

//creating a shape:
type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    //check if shape is square or circle:
    if (shape.kind === "circle") {
        return Math.PI * shape.raidus ** 2
    }
    //if it is not a circle, it is a square:
    // return shape.side * shape.side
}

//creating a function to get the area of circle or square:
function getArea(shape: Shape) {
    //exhaustive check:
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.raidus ** 2

        case "square":
            return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width
        //should always have a default case for when you add another interface (like Rectangle):
        //default case with never type, because this should NEVER happen:
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}