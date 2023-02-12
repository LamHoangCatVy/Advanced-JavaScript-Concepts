var content = document.querySelector("#content");

content.innerHTML =
  "President " +
  pres.fullName() +
  " was president number " +
  pres.order +
  " of the United States of America.";

for (var prop in pres) {
  console.log(prop + " is " + typeof pres[prop]);
}

console.log("_____Another way to know if object have OWNED Property_____");
for (var prop in pres) {
  if (pres.hasOwnProperty(prop)) {
    console.log(prop + "is " + typeof pres[prop]);
  }
}

console.log("_____One more to know if object have OWNED Property_____");
var arr = Object.keys(pres);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + " is " + typeof pres[arr[i]]);
}
