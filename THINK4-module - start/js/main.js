var MAINAPP = MAINAPP || {};

(function(nsp) {

    /*
    DOM Functionality
    */
    var doc = document,
        $ = function(domElement) {
            if (!singleSelector(domElement)) {
                try {
                    return doc.querySelectorAll(domElement);
                } catch(e) {
                    console.log(e);
                }
            } else {
                if (domElement.indexOf('#') === 0) {
                    try {
                        return [(doc.getElementById(domElement.substring(1,domElement.length)))];
                    } catch(e) {
                        console.log(e);
                    }
                } else if (domElement.indexOf('.') === 0){
                    try {
                        return doc.getElementsByClassName(domElement.substring(1,domElement.length));
                    } catch(e) {
                        console.log(e);
                    }
                } else {
                    try {
                        return doc.getElementsByTagName(domElement);
                    } catch(e) {
                        console.log(e);
                    }
                }
            }
        },

        singleSelector = function(str) {
            var arr;
            
            arr = str.split(" ");
            if (arr.length === 1 && numChar(str, "#") <= 1 && numChar(str, ".") <= 1) {
                return true;
            } else {   
                return false;
            } 
        },
        assignEvent = function(de, event, funct) {
            //use for loop since node list is not an array
            try {
                for (let i = 0; i < de.length; i++) {
                    de[i].addEventListener(event, funct);
                }
            } catch(e) {
                console.log(e);
            }
            
        },
        data = function(de, term) {
            var arr = [];
            if (de.length > 1) {
                for (let i = 0; i < de.length; i++) {
                    arr[i] = de[i].getAttribute('data-' + term);
                }
            } else {
                return de[0].getAttribute('data-' + term);
            }
        },
        addClass = function(de, cls) {
            for (let i = 0; i < de.length; i++) {
                if (de[i].classList) {
                    de[i].classList.add(cls);
                } else {
                    de[i].className += ' ' + cls;
                }
            }
        },
        removeClass = function(de, cls) {
            for (let i = 0; i < de.length; i++) {
                if (de[i].classList) {
                    de[i].classList.remove(cls);
                } else {
                    de[i].className.replace(/\bcls\b/,'');
                }
            }
        };

    /*
    String Functionality
    */
      var numChar = function(str, char) {
                //return (str.match(new RegExp(char, 'g')) || []).length;
                return (str.split(char).length - 1);
            },

            breakOut = function(str, delim) {
                var arr = str.split(delim);
                return arr.map(function(val) {
                    return val.trim();
                });
            };

    /*
    Other Utilities
    */

    var domReady = function(funct) {
        doc.addEventListener('DOMContentLoaded', function(){ 
            if (typeof funct === "function") {
                funct();
            }
        }, false);
    };

    /*
    Quiz Functionality
    */
    var initQuiz = function() {
            assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                hideFeedback();
                checkAnswer($('#q01_ans')[0].value);
            });
        },
        checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = breakOut(data($('#q01'), 'answer'), ",");
                correct = ans.every(function(val) {
                    return (value.indexOf(val) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        displayFeedback = function(result) {
            var feedback = $('.feedback.' + result);
            addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            removeClass(feedback, 'visible');
        };


    /*
    Setup
    */
    domReady(function() {
        initQuiz();
    });
    
})(MAINAPP);