var firstName = "James",
    lastName = "West";

var user1 = {
    firstName: "Cory",
    lastName: "Sikahema"
};

var user2 = {
    firstName: "Hailey",
    lastName: "Smith"
};

var fullName = function() {
    setTimeout(function() {
        console.log(this.firstName + " " + this.lastName);
    }, 2000);
};

fullName.call(user1);

fullName.call(user2);