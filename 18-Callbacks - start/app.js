document.addEventListener("DOMContentLoaded", function () {
  var logo = document.querySelector("logo");
  logo.addEventListener("click", function () {
    console.log("Clicked");
  });
}); // Determine whether the DOM is loaded and begin to act on DOM

var firstName = "James";
lastName = "West";

var user1 = {
  firstName: "Cory",
  lastName: "Sikahema",
};

var user2 = {
  firstName: "Hailey",
  lastName: "Smith",
};

var fullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

fullName();
//James West

fullName.call(user1);
//Cory Sikahema

fullName.call(user2);
//Hailey Smith

/*----------*/
var fullName = function () {
  setTimeout(function () {
    console.log(this.firstName + " " + this.lastName);
  }, 2000);
};

fullName.call(user1);
fullName.call(user2);
//Twice prited "James West"



/*----------*/
var fullName = function () {
    //TRICK TRICK TRICK TIME
    var that = this;
  setTimeout(function () {
    console.log(that.firstName + " " + that.lastName);
  }, 2000);
};

fullName.call(user1);
//Cory Sikahema
fullName.call(user2);
//Hailey Smith



/*----------*/
var fullName = function () {
  setTimeout(function () {
    console.log(this.firstName + " " + this.lastName);
  }.bind(this), 2000);
};

fullName.call(user1);
//Cory Sikahema
fullName.call(user2);
//Hailey Smith

