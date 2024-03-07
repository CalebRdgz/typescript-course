// //object of a User:
// const User = {
//     name: "caleb",
//     email: "caleb@email.com",
//     isActive: true
// }

// //use objects by passing them through a function:
// //taking in an object with name and isPaid properties:
// function createUser({name: string, isPaid: boolean}) {}

// //creating a new user with newUser variable taking in more properties:
// let newUser = { name: "caleb", isPaid: false, email: "c@c.com" };

// createUser(newUser);

// function createCourse (): {name: string, price: number} {
//     return {
//         name: "reactjs",
//         price: 399
//     }
// }

// //create an app where we onboard a user, user has some properties well go through
// //when someone takes a parameter, they need all the info of the user itself
// //create a types of and define the user:
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// //giving these types^ we created to the input user in this function:
// //return type is also User((user: User): "User"):
// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true };
// }

// createUser({name: "", email: "", isActive: true})

type User = {
  //MongoDB - devs cant change this _id (using readonly):
  readonly _id: string;
  name: string;
  email: string;
  //check if a user is active over some days:
  isActive: boolean;
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "c",
  email: "c@c.com",
  isActive: false,
};

//specific example for now, would make more sense if these types had much more properties in them:
type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    dardDate: string;
}

//combine all of the separate types (cardNumber, cardDate, and now cardDetails):
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "c@gmail.com";
// myUser._id = "ada";

export {};
