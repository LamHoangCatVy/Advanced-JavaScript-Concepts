var person1 = {
  firstName: "Steven",
  lastName: "Hancock",
  email: "shancock@allthingsjavascript.com",
  type: "admin",
  active: true,
  address: {
    street: "100 N. Main",
    zip: 10001,
  },
};


for (var prop in person1) {
  console.log("Name: " + prop);
  console.log("Value: " + person1[prop]);
}
//Name: firstName, lastName,...
//Value: Steven, Hancock,...


person1.propertyIsEnumerable("firstname");
//true
person1.propertyIsEnumerable("toString");
//false


var properties = Object.keys(person1);
console.log(properties)
//["firstName", "lastName",.....]