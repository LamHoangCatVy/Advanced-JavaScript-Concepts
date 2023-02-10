
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
};

var greeting = "good morning everyone.";

console.log(greeting.capitalize());