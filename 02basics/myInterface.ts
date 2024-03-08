//creating a new user with email, user_id, google login, db_id, discount code, etc.
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  //startTrial: () => string;
  getCoupon(couponname: string, value: number): number; //provide a couponname string (not literally "couponname")
}

//can also re-open the interface:
interface User { //make sure packages you have installed dont have the same interface name(User)
    githubToken: string;
}

//inheritance:
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const caleb: Admin = {
  dbId: 22,
  githubToken: "github",
  role: "admin",
  email: "c@c.com",
  userId: 123,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "caleb10", off: 10) => {
    return 10
  }
};

//update the email in caleb:
caleb.email = "cr@cr.com";
//cant change the readonly id:
// caleb.dbId = 11 //ERROR
