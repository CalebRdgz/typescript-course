//score might be a number or a string as well (use pipes carefully):
let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let caleb: User | Admin = {
  name: "caleb",
  id: 334,
};

//can redefine caleb also using Admin properties (because User | Admin):
caleb = {
  username: "cr",
  id: 334,
};

// function getDbId(id: number | string) {
//     //making some API calls:
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  //error if not checking typeof id:
  if (typeof id === "string") {
    id.toLowerCase();
  }
  if (typeof id === "number") {
    id + 2;
  }
}

//arrays with union types:
//number type(cant have string):
const data: number[] = [1, 2, 3, "4"]; //ERROR
//string type(cant have number):
const data2: string[] = [1, 2, 3, "4"]; //ERROR
//can either be ALL string or ALL number:
const data3: string[] | number[] = ["1", "2", 3] //ERROR
//now can have both types in the array:
const data4: (string | number)[] = ["1", 2, "3"];
//string number AND boolean in an array:
const data5: (string | number | boolean)[] = ["1", 2, true]

//airplane application, three types of seating:
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
//crew not available in seatAllotment type:





seatAllotment = "crew"; //ERROR