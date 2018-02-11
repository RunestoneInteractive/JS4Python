Inheritance
===========

Javascript also supports inheritance.  Here is a common example from Python.

.. activecode:: animals_py_1

    class Animal:

        def __init__(self,name):
            self._name = name

        def speak(self):
            print("Generic Animals are mute")

        def get_name(self):
            return "My name is {}".format(self._name)

        name = property(get_name)


    class Dog(Animal):
        def __init__(self,name):
            Animal.__init__(self,name) # super.__init__(name) in Python 3
            self.numLegs = 4


        def speak(self):
            print("woof woof")

    class CartoonDog(Dog):

        def speak(self):
            print("I'll have a dry martini.")

    spot = Dog("spot")
    print(spot.name)
    spot.speak()

    brian = CartoonDog("Brian")
    brian.speak()
    print(brian.name)


In Javascript, the only syntax addition for implementing inheritance is to use the ``extends`` keyword as we do in the example below.

.. activecode:: animals_js_1
    :language: javascript

    "use strict"
    class Animal {
        constructor(name) {
            this._name = name
        }

        speak() {
            writeln("Generic animals are Mute")
        }

        get name() {
            return this._name;
        }
    }

    class Dog extends Animal {

        constructor(name) {
            super(name);
            this.numLegs = 4;
        }

        speak() {
            writeln("woof woof");
        }
    }

    class CartoonDog extends Dog {

        speak() {
            writeln("I'll have a dry martini")
        }

    }

    var spot = new Dog('spot');
    spot.speak();
    writeln(spot.numLegs);
    brian = new CartoonDog('Brian')
    brian.speak()
    writeln(brian.name)

In older javascript code you may see something like:

.. code-block:: javascript

    function Dog(name)  {
        this._name = name;
    }

    Dog.prototype = new Animal()

    Dog.prototype.speak = function() {
        writeln('woof');
    }

The assignignment to the prototype attribute of dog sets up the prototype chain so that if a function is not explicitly defined on the prototype object of Dog it will be found on the prototype object of Animal.  In some ways this makes it more explicit with respect to how inheritance works, but at the expense of being more verbose, and different from most other languages.
