// var findIt = function () {
//   var start = 1,
//     end = 100,
//     multiple = 3,
//     total = 0;
//   while (start <= end) {
//     if (start % multiple === 0) {
//       total += start;
//     }
//     start++;
//   }
//   (document.getElementById("content").innerHTML =
//     "The sum of all number divisible by 3 from 1 to 100 is:"),
//     total;
// };

/*DON"T REPEAT YOURSELF */
var sum = function (arr) {
  var total = 0;

  while (arr.length > 0) {
    total += arr.pop();
  }
  return total;
};

var findMultiple = function (start, end, multiple) {
  var results = [];

  while (start <= end) {
    if (start % multiple === 0) {
      results.push(start);
    }
    start++;
  }
  return results;
};

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("content").innerHTML =
    "The sum of all number divisible by 3 from 1 to 100 is:" +
    sum(findMultiple(1, 100, 3));
});
