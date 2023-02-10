// var name = "global";

// var fun1 = function () {
//   var name = "fun1";
//   console.log("From fun1 ---");
//   console.log(this);
//   console.log(this.name);
//   fun2();
//   /*result:
//     From fun2 ---
//     Window object
//     global*/
// };

// var fun2 = function () {
//   var name = "fun2";
//   console.log("From fun2 ---");
//   console.log(this);
//   console.log(this.name);
// };

// fun1();
// /*result:
//     From fun1 ---
//     Window object
//     global*/

/*<------->*/

// var name = "global";

// var fun1 = function () {
//   var name = "fun1";
//   console.log("From fun1 ---");
//   console.log(this);
//   console.log(this.name);
//   return function fun2() {
//     var name = "fun2";
//     console.log("From fun2 ---");
//     console.log(this);
//     console.log(this.name);
//   };
// };
// fun1()();
// /*Results:
//     From fun1 ---
//     Window object
//     global
//     From fun2 ---
//     Window object
//     global*/

/*<------->*/

var name = "global";

var runIt = function (fn) {
  var name = "runIt";
  console.log("From runIt ---");
  console.log(this);
  console.log(this.name);
  fn();
};

runIt(function fun2() {
  var name = "fun2";
  console.log("From fun2 ---");
  console.log(this);
  console.log(this.name);
});
/*Result:
    From runIt ---
    Window object
    global
    From fun2 ---
    Window object
    glboal */