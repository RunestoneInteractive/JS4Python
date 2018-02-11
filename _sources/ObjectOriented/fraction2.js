"use strict"
class Fraction {
    constructor(num, den) {
        this._num = num;
        this._den = den;
    }

    toString() {
        return `${this.numerator} / ${this.denominator}`;
    }

    get numerator() {
        return this._num;
    }

    get denominator() {
        return this._den;
    }

    set numerator(val) {
        console.log("error cannot set the numerator");
    }

    gcd(m, n) {
        while (m % n != 0) {
            let oldm = m
            let oldn = n

            m = oldn
            n = oldm % oldn
        }
        return n
    }

    add(other) {
        let newDen = this.denominator * other.denominator
        let newNum = this.numerator * other.denominator + other.numerator * this.denominator
        let common = this.gcd(this.denominator, other.denominator)
        return new Fraction(newNum / common, newDen / common)
    }

}

let x = new Fraction(2,3);
let y = new Fraction(1,6);
console.log("x is " + x)
console.log(x.numerator)
console.log("x+y = " + x.add(y))
