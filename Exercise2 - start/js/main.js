
var pres = {
    firstName: "James",
    midName: "Abram",
    lastName: "Garfield",
    assisination: true,
    born: "November 19, 1831",
    died: "September 19, 1881",
    party: "Republican",
    termStart: "March 4, 1881",
    termEnd: "September 19, 1881",
    vp: "Chester Arthur",
    quotes: ["If wrinkles must be written upon our brows, let them not be written upon the heart. The spirit should not grow old.", "The truth will set you free, but first it will make you miserable.", "A pound of pluck is worth a ton of luck."],
    order: 20
};

var presProto = {
    fullName() {
        return this.firstName + " " + this.midName + " " + this.lastName;
    },
    inagurationAge() {
        var born = new Date(this.born);
        var inaguration = new Date(this.termStart);
        return Math.floor((inaguration - born) / (1000 * 60 * 60 * 24 * 365));
    },
    daysServed() {
        var end = new Date(this.termEnd),
            start = new Date(this.termStart);

        return Math.floor((end - start) / (1000 * 60 * 60 *24));
    }
};

Object.setPrototypeOf(pres, presProto);

