var obj = {
  type: "rectangle",
  width: 10,
  height: 5,
};

console.log(obj.propertyIsEnumerable("type"));
//true

console.log(Object.defineProperty(obj, "type", { enumerable: false }));
//return an object without any changes, but the type is set to {enumerable:false} property
console.log(propertyIsEnumerable("type"));
//false

/*CONFIGURABLE is set to true by default, it means that we can change a property of our object, specifically, delete a property of an object. Conversely, if it's set to false, we cannot delete that specific object's property*/

console.log(Object.defineProperty(obj, "type", { configurable: false }));
//return an object without any changes, but the type is set to {configurable:false} property
console.log(delete obj.width);
//console will return an array with just height and type
console.log(delete obj.type);
//false (because configurable is being set to false)
