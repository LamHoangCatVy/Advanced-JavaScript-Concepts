var obj1 = {
  firstName: "Steven",
  lastName: "Smith",
  startDate: "January 10, 2015",
  type: "admin",
};

var obj2 = {
  firstName: "Duck",
  lastName: "Biden",
  startDate: "January 10, 2015",
  type: "admin",
};

// 1. Writable attribute of properties
Object.defineProperty(obj1, "startDate", {
  writable: false,
});

obj1.firstName = "Steve";
//It changes the obj1.firstName to Steve

obj1.startDate = "January 5, 2016";
//It changes nothing of the obj
//This will throw an error in "use strict" mode: Cannot assign to read only property 'startDate' of Object '#<Object>'

//  -  -  -
// 2. Sealing an object -- cannot add, cannot delete, but can change properties that are already existing
Object.seal(obj1);

obj1.newProp = true;
//This will throw an error in "use strict" mode: Can't add property newProp, object is not extensible

delete obj1.type;
//This will throw an error in "use strict" mode

obj1.firstName = "Joe";
//It changes the obj1.firstName to Joe

//  -  -  -
// 3. Freezing an object (1. + 2.) -- strictest case
Object.freeze(obj2);

obj2.newProp = true;
//This will throw an error in "use strict" mode: Can't add property newProp, object is not extensible

delete obj1.type;
//This will throw an error in "use strict" mode

obj1.firstName = "Joe";
//This will throw an error in "use strict" mode
