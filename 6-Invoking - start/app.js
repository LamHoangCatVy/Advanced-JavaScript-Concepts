var test = function (val) {
  console.log(this);
  console.log(val);
  console.log(arguments);
  console.log(arguments[1]);
};

//When to use arguments?
var sumIt = function () {
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum)
};
