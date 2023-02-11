function Greeting() {
  console.log(this);
}

Greeting();
//Window Object

new Greeting();
//Greeting object

/*----------*/
//The reason that's it's recommended that all constructor functions begin with an uppercase is to remind you using "new" keyword to invoke a function using constructor
function Users(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };//To make it better, method should be placed in a prototype
}

var user1 = new Users("James", "Johnson");
user1;
//Object: Users{firstName: "James", lastName: "Johnson"}
var user2 = new Users("Mary", "Smith");
//Object: Users{firstName: "Mary", lastName: "Smith"}
//Result of the protytype property of the function of the constructor that is called
