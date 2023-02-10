

var MAINAPP = (function(nsp, $, domU, strU) {

    /*
    Quiz Functionality
    */
    var contentObj = {},
        questionsArray = [],
        navigationProto = {}, //Setup in setUpNavigation()
        prevBtn, 
        nextBtn;

    var loadJSON = function(path) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
        xobj.open('GET', path);
        xobj.onreadystatechange = function() {
            if (xobj.readyState === 4) {
                contentObj = JSON.parse(xobj.responseText);
                //console.log(contentObj);
                parseData(contentObj);
            }
        };
        xobj.send(null);
    },
    parseData = function(cObj) {
        questionsArray = cObj.questions;
        //set button text
        domU.setHTML($('.fill-in-submit'), cObj.buttonText);
        
        for (let i = 0; i < questionsArray.length; i++) {
            
        }
        console.log(questionsArray);
    },

    initQuiz = function() {
        loadJSON("../JSON/content.json");
    };

    

    

    /*
    Setup
    */
    UTIL.domReady(function() {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.initQuiz = initQuiz;
    
    return nsp;
    
})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, UTIL.string);