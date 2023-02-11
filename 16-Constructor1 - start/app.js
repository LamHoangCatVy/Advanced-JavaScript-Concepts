var Greeting = function () {};

var greet1 = Greeting();
var greet2 = Greeting();

console.log((greet1 = greet2));
//false

console.log(greet1 instanceof Greeting);
//true

console.log(greet2 instanceof Greeting);
//true

console.log(greet1);
//Greeting OBJECT and the prototype is object

console.log(greet2);
//Greeting OBJECT and the prototype is object

dir(Greeting)
//prototype: Object
//__proto__: function()
//Basically what happens is all objects created when that funciton is used as  constructor receive the object as its prototype