var funct1 = function() {
    var a = 2,
        b = 3;

    var funct2 = function() {
        console.log(a + b);
    };

    funct2();
};