var findIt = function() {
    var start = 1,
        end = 100,
        multiple = 3,
        total = 0;

    while (start <= end) {
        if (start % multiple === 0) {
            total += start;
        }
        start++;
    }

    document.getElementById("content").innerHTML = 'The sum of all numbers divisible by 3 from 1 to 100 is: ' + total;
};

document.addEventListener('DOMContentLoaded', findIt);

