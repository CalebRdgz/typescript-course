//want a string, number, and boolean in precise order:
const user: (string | number)[] = ["cr", 1];
const user2: (string | number)[] = [1, "cr"];
//An API call takes in data in specific order
//convert it into a tuple:
let tUser: [string, number, boolean];
tUser = ["cr", 123, true];
//Now we cant change the order:
// tUser = [true, 123, "cr"]

//tuple:
let rgb: [number, number, number] = [255, 123, 112];

//define a type in this exact order (number, string):
type User1 = [number, string];

const newUser: User1 = [112, "c@gmail.com"];
//can change the email in index 1 of the tuple^
newUser[1] = "cr.com";

//error (number not assignable to string):
// const newUser: User1 = [112, 1];

//cannot push a new boolean to User1 because it only takes in number, string with new TS update:
newUser.push(true)