function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

//turn the value into an upper case:
function getUpper(val: string) {
  return val.toUpperCase;
}

//signup
function signUpUser(name: string, email: string, isPaid: boolean) {}

//arrow function takes in name, email, isPaid (isPaid false by default)
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

addTwo(5);
getUpper("caleb");

signUpUser("caleb", "caleb@email.dev", false);

loginUser("c", "c@c.com");

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

//pass whatevers being passed to this functionn:
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

//pass whatevers being passed to this functionn:
//use "never" to NEVER return anything (good for throwing error messages)
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};
