var user1 = {
    firstName: "John",
    lastName: "Anderson",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var user2 = {
    firstName: "Sarah",
    lastName: "West",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var greeting = function(term, punct) {
    console.log(term + " " + this.firstName + punct);
};

