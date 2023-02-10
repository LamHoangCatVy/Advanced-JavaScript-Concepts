var UTIL = (function(gen) {
    /*
    Other Utilities
    */

    var domReady = function(funct) {
        document.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    //Public Method
    gen.domReady = domReady;

    return gen;
})(UTIL || {});