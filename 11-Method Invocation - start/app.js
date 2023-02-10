var name = "global";

var obj = {
  name: "obj1",
  fun1: function () {
    console.log("From fun1 in obj1 ---");
    console.log(this);
    console.log(this.name);
  },
};

obj.fun1();
/*Result:
    From fun1 in obj 1-- 
    Object
    obj1*/

var obj2 = {
  name: "obj2",
  fun2: obj1.fun1,
};

obj2.fun2();
/*Result:
    From fun1 in obj 1-- 
    Object
    obj2*/

var fun3 = function () {
  console.log("From fun 3 ---");
  console.log(this);
  console.log(this.name);
};

this.fun3();
/*Result:
    From fun3 in obj 1-- 
    Window object
    global*/

var obj3 = {
  name: "obj3",
  fun3: fun3,
};

obj3.fun3();
/*Result:
    From fun3 -- 
    Object {name:"Obj3"}
    obj3*/

var obj4 = {
  name: "obj4",
  obj5: {
    name: "obj5",
    fun5: function () {
      console.log("From obj5 fun 5 --");
      console.log(this);
      console.log(this.name);
    },
  },
};

obj4.obj5.fun5();
/*Result:
    From obj5 fun5 -- 
    Object {name:"obj5"}
    obj5*/

var fun6 = function () {
  console.log("fun6");
};
fun6.name = "fun6";
fun6.fun7 = function(){
    console.log("From fun7 in fun6")
    console.log(this)
    console.log(this.name)
}
fun6.fun7()
/*Result:
    From fun7 in fun6 
    function(){
        console.log("fun6")
    }
    fun6*/
