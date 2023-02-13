//2 ways of using global variable as an object's property
var multiple = 5;

var obj1 = {
  start: 1,
  end: 100,
  multiple: multiple, //5
};

var obj2 = {
  start: 1,
  end: 1000,
  multiple, //5
};

//Object using object literal notation
var obj3 = {
  firstName: "Steven",
  lastName: "Smith",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName); //Steven Smith
  },
};

var obj4 = {
  firstName: "Steven",
  lastName: "Smith",
  fullName() {
    console.log(this.firstName + " " + this.lastName); //Steven Smith
  },
};

//Static method in setting a prototype

var objProto = {
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

var obj5 = {
  firstName: "Joe",
  lastName: "Biden",
};

//Object.setPrototype(mainObject, objectPrototype)
Object.setPrototypeOf(obj5, objProto);
console.log(obj5.fullName()); //Joe Biden

//Using Object.assign: multiple objects -> single object
var obj6 = {
  start: 0,
};

var obj7 = {
  a: 5,
};

var obj8 = {
  b: 10,
};

var obj9 = {
  c: 15,
};

//Object.assign(mainObject, assignObject)
Object.assign(obj6, pbj7, obj8, obj9);
console.log(obj6)
//Object with properties: start, a, b, c

/*Object literal extensions */