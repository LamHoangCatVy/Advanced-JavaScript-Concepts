

var MAINAPP = (function(nsp, $, domU, strU) {

    /*
    Quiz Functionality
    */
    var initQuiz = function() {
            domU.assignEvent($('.fill-in-submit.btn-primary'),'click', function() {
                hideFeedback();
                checkAnswer($('#q01_ans')[0].value);
            });
        },
        checkAnswer = function(value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = strU.breakOut(domU.data($('#q01'), 'answer'), ",");
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
            domU.addClass(feedback, 'visible');
        },
        hideFeedback = function() {
            var feedback = $('.feedback.visible');
            domU.removeClass(feedback, 'visible');
        };


    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.displayFeedback = displayFeedback;

    return nsp;
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);