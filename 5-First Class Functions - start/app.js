var sum = function (x, y) {
  return x + y;
};

var run = function (fn, a, b) {
  console.log(fn(a, b));
};

run(sum, 10, 5); //result: 15
run(
  function (x, y) {
    return x * y;
  },
  10, 
  5 
); //result: 50
