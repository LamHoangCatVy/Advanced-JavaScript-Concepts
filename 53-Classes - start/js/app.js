
class Greeting {
    constructor(mGreet, nGreet) {
        this.morningGreet = mGreet;
        this.eveningGreet = nGreet;
        this.dayTime = "morning";
    }
    greet() {
        if (this.dayTime === "morning") {
            return this.morningGreet;
        } else if (this.dayTime === "evening") {
            return this.eveningGreet;
        } else {
            return this.greeting;
        }
    }
}

class CommonGreeting extends Greeting {
    constructor(mGreet, nGreet) {
        super(mGreet, nGreet);
        this.greeting = "Howdy";
        this.dayTime = "day";
    }
}

var aGreet = new CommonGreeting("Morning", "Evening");

console.log(aGreet.greet() + " neighbor.");

aGreet.dayTime = "morning";

console.log(aGreet.greet() + " neighbor.");

