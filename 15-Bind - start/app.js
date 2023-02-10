var user1 = {
  firstName: "John",
  lastName: "Anderson",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var user2 = {
  firstName: "Sarah",
  lastName: "West",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

var greeting = function (term, punct) {
  console.log(term + " " + this.firstName + punct);
};

var morningGreet = greeting.bind(user1, "Good Morning");
var afternoonGreet = greeting.bind(user1, "Good Afternoon");

morningGreet("!");
//Good Morning John!
afternoonGreet(".");
//Good Afternoon John!

morningGreet.call(user2, "!")
//cannot change this because bind() take precedence
//Result will still be "Good Morning John!"