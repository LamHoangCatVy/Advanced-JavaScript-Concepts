var report1 = function (val) {
  console.log(val);
};

// var report2 = new Function("val", "console.log(val);");

report1("expression");
// report2("constructor");
report1.userName = "Steven";

var report3 = report1;
report3.userName; //result: "Steven"

report1.userName = "Thomas";
report3.userName; //result: "Thomas"

report1.showUser = function(){
    console.log(this.userName);
} 
report3.showUser //result: Thomas
report1.showUser //result:Thomas
