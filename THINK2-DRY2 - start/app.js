
function init(eObj) {
    var content = document.querySelector("#content"),
        listeners = [],
        listenersEnabled = false,
        printIt = true, 
        lastevent;

    //Write info to the div. Includes event object information
    var loadInfo = function(message, eventObj) {
        content.insertAdjacentHTML("afterbegin", message + " -- event type: " + eventObj.type + " -- target object: " + eventObj.target.nodeName + "<br>");
    };

    //Adds listeners to the document.
    var addListeners = function() {
        var keyDownHandler = function(e) {
            loadInfo("A key was pressed: " + e.keyCode + " -- " + e.key, e);
            if (e.keyCode === 83 && e.ctrlKey) {
                toggleEventListeners();
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        listeners.push(keyDownHandler, "keydown");


        var clickHandler = function(e) {
            loadInfo("Mouse button was clicked: ", e);
        };
        document.addEventListener("click", clickHandler);
        listeners.push(clickHandler, "click");

        var mouseMoveHandler = function(e) {
            lastevent = e;
            if (printIt) {
                printIt = false;
                loadInfo("Mouse move recorded at coordinates: " + e.pageX + ", " + e.pageY, e);
                setTimeout(function() {
                    printIt = true;
                }, 500);
            }
        };
       
        document.addEventListener("mousemove", mouseMoveHandler);
        listeners.push(mouseMoveHandler, "mousemove");

        //Use this structure to add your own events for testing.
        /*var [variableName] = function(e) {
            loadInfo("Mouse button was clicked: ", e);
        };
        document.addEventListener("[event]", [variableName]);
        listeners.push([variableName], "event");*/

        //Once listeners are added, sets this to true for toggle function
        listenersEnabled = true;
        console.log(mouseMoveHandler);
    };

    //Removes listeners from document so user can examine data
    var removeEventListeners = function() {
        while (listeners.length > 0) {
            document.removeEventListener(listeners.pop(), listeners.pop());
        }
    };

    //Called to initialize. Determines whether to add or remove listeners based on current state.
    var toggleEventListeners = function() {
        if (listenersEnabled) {
            removeEventListeners();
            console.log("Event listeners removed");
        } else {
            addListeners();
            console.log("Listeners Added");
        }
    }; 

    //Logs information for document load event.
    loadInfo("Document was loaded: ", eObj);

    //Sets up listeners
    toggleEventListeners();

}

window.addEventListener("load", init);



