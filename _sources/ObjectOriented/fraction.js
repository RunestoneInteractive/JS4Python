class Fraction {
    constructor(num, den) {
        this._numerator = num;
        this._denominator = den;
    }

    toString() {
        return `${this.numerator} / ${this.denominator}`;
    }

    get numerator() {
        return this._numerator;
    }

    set numerator(value) {
        console.log("error cannot set the numerator");
    }

}



x = new Fraction(2,3);
console.log("x is " + x)
console.log(x.numerator)
