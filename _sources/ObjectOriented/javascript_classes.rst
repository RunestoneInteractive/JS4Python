Defining Classes in Javascript
==============================

Defining classes in Javascript used to be quite mysterious for a beginner.  There was no class statement, in fact, technially Javascript did not have the idea of class as a factory for making objects.  Javascript was a prototypal language.

    Prototypal inheritance is a form of object-oriented code reuse. Javascript is one of the only [mainstream] object-oriented languages to use prototypal inheritance. Almost all other object-oriented languages are classical.

    In classical inheritance, the programmer writes a class, which defines an object. Multiple objects can be instantiated from the same class, so you have code in one place which describes several objects in your program. Classes can then be organized into a hierarchy, furthering code reuse. More general code is stored in a higher-level class, from which lower level classes inherit. This means that an object is sharing code with other objects of the same class, as well as with its parent classes.

    In the prototypal inheritance form, objects inherit directly from other objects. All of the business about classes goes away. If you want an object, you just write an object. But code reuse is still a valuable thing, so objects are allowed to be linked together in a hierarchy. In javascript, every object has a secret link to the object which created it, forming a chain. When an object is asked for a property that it does not have, its parent object will be asked... continually up the chain until the property is found or until the root object is reached.   (http://stackoverflow.com/questions/186244/what-does-it-mean-that-javascript-is-a-prototype-based-language)

However, that made it difficult for developers used to classical object oriented programming to come to Javascript.  In the latest version of Javascript that has changed for the better.  Under the covers Javascript is the same, but we now have some "syntactic sugar to make life better for us."

We will explore object oriented programming in Javascript by implementing a fraction class.

-  Given a numerator and a denominator create a new Fraction.

-  When a fraction is printed it should be simplified.

-  Two fractions can be added or subtracted

-  Two fractions can be multiplied or divided

-  Two fractions can be compared

-  A fraction and an integer can be added together.

-  Given a list of Fractions that list should be sortable by the default
   sorting function.

Here is a mostly complete implementation of a Fraction class in Python
that we will refer to throughout this section:

.. literalinclude:: fraction.py
   :language: python
   :linenos:


The instance variables (data members) we will need for our fraction
class are the numerator and denominator. Of course in Python we can add
instance variables to a class at any time by simply assigning a value to
``objectReferenc.variableName``

.. activecode:: jsfrac1
    :language: javascript

    "use strict"
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

        get denominator() {
            return this._denominator;
        }

        set numerator(v) {
            console.log("error cannot set the numerator");
        }

    }

    let x = new Fraction(2,3);
    writeln("x is " + x)
    writeln(x.numerator)


Before we go any further lets look at how we would have defined the Fraction class in all the other versions of Javascript prior to the most recent.  Its important that you understand this too as there are billions of lines of code written the old way.

.. activecode:: jsoldclass
    :language: javascript

    function Fraction(num, den) {
        this.numerator = num;
        this.denominator = den;
    }

    Fraction.prototype.toString = function() {
        return this.numerator + " / " + this.denominator;
    }

    f = new Fraction(2,3);
    writeln("f is " + f)



Methods or Member Functions
---------------------------

Now we come to one of the major differences between Javascript and Python. The
Python class definition used the special methods for addition, and
comparison that have the effect of redefining how the standard operators
behave. In Javascript there is **no operator overloading**. So we will have to
write member functions to do addition, subtraction, multiplication, and
division. Lets begin with addition.

.. activecode:: jsmethods1
    :language: javascript

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
    writeln("x is " + x)
    writeln(x.numerator)
    writeln("x+y = " + x.add(y))

Adding methods to your class is easy and the syntax is very clean. But it may feel a little strange to not have the word function or def in front of the method name.   In all method the word ``this`` refers to the current object.  Just like ``self`` does in Python.  You will notice that you do NOT have to supply this as the first parameter to each method!

