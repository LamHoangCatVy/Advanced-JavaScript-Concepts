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

greeting.call(user1, "Good Morning", "!");
//Good Morning John(!)
greeting.call(user2, "Good Afternoon", "!");
//Good Afternoon Sarah(!)

greeting.apply(user1, ["Good Morning", "!"]);
//Good Morning John(!)
greeting.apply(user2, ["Good Afternoon", "!"]);
//Good Afternoon Sarah(!)

console.log(user1.fullName.call(user2));
//Sarah West