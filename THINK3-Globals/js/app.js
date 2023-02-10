(function() {
    var counter = 0,
        doc = this.document,
        content = doc.getElementById('content'),
        quotes = content.querySelectorAll('.quote');

    window.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 40:
                if (counter < quotes.length) {
                    quotes[counter].style.visibility = 'visible';
                    counter++;
                }
                break;
        }
    }, false);
})();