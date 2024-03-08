//creating a User:
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "Dallas";
//   constructor(email: string, name: string) {
//     this.email = email; //this.email = email in line 3
//     this.name = name; //this.name = name in line 4
//   }
// }

class User {
  //when a User registers, gets an intro course(private = cant access outside this class):
  protected _courseCount = 1;
  //readonly = cant change the city, only read it:
  readonly city: string = "Dallas";
  //constructor = called once when the objects created
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {
    this.email = email; //this.email = email in line 19
    this.name = name; //this.name = name in line 20
    this.userId = userId; //this.userId = userId in line 21
  }

  private deleteToken() {
    console.log("Token deleted");
  }
  //designing apple software:
  get getAppleEmail(): string {
    //append the exisiting email with apple in front of it:
    return `apple${this.email}`;
  }

  get courseCount(): number {
    //return the private _courseCount in this User class:
    return this._courseCount;
  }

  //in setter, NO RETURN TYPE:
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}
//create a sub-user from the User class:
//extends inherits the parent User class:
class SubUser extends User {
  //private variables (private _courseCount) in User class NOT accessible here
  // get courseCount(): number {
  //     // _courseCount is only accesssible in the User class:
  //     return this._courseCount
  // }
  isFamily: boolean = true;
  //if this function is called, it changes the courseCount:
  changeCourseCount() {
    //protected _courseCount is accessible from any inherited class:
    this._courseCount = 4;
  }
}

//creating a new user with the User class:
const caleb = new User("c@c.com", "caleb", "userId");

//can only change the name to a string, not any other type:
caleb.name = "David";

//cant access the private readonly city, only accessible within the User class:
caleb.name;
