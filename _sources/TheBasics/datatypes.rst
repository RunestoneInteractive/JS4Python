
Javascript Data Types
=====================

There are five primitive types in Javascript

* number
* string
* boolean
* undefined
* null
* symbol (new)

Lets look at a simple example that demonstrates some ideas with numbers.

.. activecode:: tcpython
    :language: python

    def main():
        fahr = int(input("Enter the temperature in F: "))
        cel = (fahr - 32) * 5.0/9.0
        print("the temperature in C is: ", cel)

    main()

Next, lets look at the Javascript Equivalent.

.. activecode:: convert1
    :language: javascript

    var main = function() {
        var fahr;
        fahr = prompt("Enter the temperature in F: ");
        const ratio = 5.0/9.0;
        let cel = (fahr - 32) * ratio;
        writeln("The temperature in C is: " + cel);
    }

    main()

There are several new concepts introduced in this example. We will look
at them in the following order:


-  Variable Declaration and scope

-  Input/Output


Declaring Variables
-------------------

JavaScript has three scopes – global, function, and block. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared, using ``var``, within that function is only accessible from that function and any nested functions.   You can also declare a variable to be local to a block, such as inside a loop or an if statement using ``let``.  If you think carefully about this you may realize that function scope is kind of redundant with block scope, after all a function defines its own block.  You would be right, but Javscript has been changing and the introduction of let to create block level scope is pretty new.  In fact many programmers have hurt themselves over the years by assuming that Javascript had block level scope when it actually did not.  Thankfully, those days are over provided you use the right syntax.  The best advice I have seen is to stop using ``var`` and just use let in your code.

Both Python and Javascript are **dynamically typed** languages. In a
dynamically typed language a variable can refer to any kind of object at
any time. When the variable is used, the interpreter figures out what
kind of object it is. However Javascript allows you to declare a variable to determine its scope. Undecleared variables in Javascript have global scope, which is definitely not what you usually want.

In the example above, we show an old style declaration of the fahr variable.  This ensures that fahr is a local variable to the function.  The ``const`` declaration of the ratio makes ratio read only.  If you add a line later in the function and try to change ratio you will get an error.   The new style ``let`` declaration creates a variable that also has function scope.  We'll look at block level scope of variables when we get to loops and conditionals shortly.

If you remove line 1 in the example above, you will see that the code works just fine. However, as I just mentioned fahr will now be a global variable.  This can have all kinds of unintended consequences.  I once spent a week trying to track down an error in the code used to run the examples in thsi book,  caused by me being too lazy to type var and creating a global!   To help catch these kinds of unintended variable creations Javascript introduced 'strict mode' several years ago.  With strict mode enabled you will get an error for any variable that is not declared one way or another.  Run the example below to see for yourself.  To correct the error, add let in front of fahr on line 3.  From now on we'll use strict mode, and only let and const to declare our variables.


.. activecode:: convert2
    :language: javascript

    "use strict"
    let main = function() {
        fahr = prompt("Enter the temperature in F: ");
        const ratio = 5.0/9.0;
        let cel = (fahr - 32) * ratio;
        writeln("The temperature in C is: " + cel);
    }

    main()


Simple Input
------------

For simple user input in our practice functions we can use Javascript's ``prompt`` function.   This acts like Python's input function except that it pops up a dialog box.   Again we could use some much fancier user interface to get the input, but we'll leave the web page design for later.

Type Conversion
---------------

In the Python example we had to use ``int(input(....))`` to convert the result of our input from a string to an integer.  This brings up two very interesting points.

1.  Javscript usually does the right thing and automatically converts strings to numbers and numbers to strings when necessary.  Hence no need to explicitly convert the result of prompt to a number when we use it in the calculation.

2.  Whereas Python differentiates between int and float Javascript has only a single numeric data type.  Javascript does not support the infinite precision integers like python does.  If you need that you can find a module that implements it for you.  In Javascript ``2 ** 100`` results in 1.2676506002282294e+30 whereas in Python ``2 ** 100`` results in 1267650600228229401496703205376.

Boolean
-------

Javascript has a boolean type.  But like Python many things evaluate Truthy and some things evaluate Falsey.  Like converting string to integer and vice versa Javascript does its best to evaluate something as Truthy or Falsey based on the context its used in.   For example in Python an empty list, an empty string or dictionary, and False are all Falsey.  In Javascript the following things are Falsey:  ``null``, ``undefined``, ``NaN``, ``0`` ``""`` and ``false``  (note the lower case f).  Everything else in Javascript evaluates Truthy especially ``true`` (note the lower case t).

Null and Undefined
------------------

The value ``null`` is used when you want to represent the absence of an object or value.

A variable that has not been assigned a value is  of type undefined.  If a function does not explicitly return a value then the value it returns is also ``undefined``.


Strings
-------

Strings in Javascript and Python are quite similar. Like Python, Javascript strings are immutable. However, manipulating strings in Javascript is not quite as
obvious since Strings do not support an indexing or slicing operator.
That is not to say that you can’t index into a Javascript string, you can. You
can also pull out a substring just as you can with slicing. The
difference is that Javascript uses method calls where Python uses Operators.

In fact this is the first example of another big difference between Javascript
and Python. Javascript does not support any operator overloading. Table 3 maps
common Python string operations to their Javascript counterparts. For the
examples shown in the table we will use a string variable called “str”

========================== ======================== =============================================================
                    Python               Javascript                                                   Description
========================== ======================== =============================================================
                ``str[3]``        ``str.charAt(3)``                             Return character in 3rd  position
              ``str[2:5]``   ``str.substring(2,4)``                              Return substring from 2nd to 4th
              ``len(str)``         ``str.length``                               Return the length of the string
         ``str.find('x')``     ``str.indexOf('x')``                                Find the first occurrence of x
           ``str.split()``     ``str.split(/\s+/)``   Split the string on whitespace into a list/array of strings
        ``str.split(',')``       ``str.split(',')``      Split the string at ``','`` into a list/array of strings
             ``str + str``      ``str.concat(str)``                              Concatenate two strings together
           ``str.strip()``           ``str.trim()``                 Remove any whitespace at the beginning or end
      ``str.replace(a,b)``     ``str.replace(a,b)``              Replace all occurances of a with b in string str
========================== ======================== =============================================================

Let us look at a simple example that will illustrate a few of the string functions.  We will write a function that takes a string as a parameter and returns a new string with all of the vowels removed.

.. activecode:: strrempy

    def removeVowels(s):
    vowels = "aeiouAEIOU"
    sWithoutVowels = ""
    for eachChar in s:
        if eachChar not in vowels:
            sWithoutVowels = sWithoutVowels + eachChar
    return sWithoutVowels

    print(removeVowels("compsci"))
    print(removeVowels("aAbEefIijOopUus"))

This is a pretty simple example of the accumulator pattern using strings.  We iterate over every character in the given string, if the character is not a vowel we concatenate it to create a new return string.  If the character is a vowel we ignore it and move on to the next.

.. activecode:: strremjs
    :language: javascript

    function removeVowels(s) {
        const vowels = "aeiouAEIOU";
        let sWithoutVowels = "";
        for (let eachChar of s) {
            if (vowels.indexOf(eachChar) === -1) {
                sWithoutVowels = sWithoutVowels + eachChar
            }
        }
        return sWithoutVowels
    }

The Javascript version illustrates a few of the string methods and idioms and a few key differences.  First, to test whether one string contains another you have to use the ``indexOf`` string method. This method returns a number to indicate the position of the string passed as a parameter in the original string.  If the given string is not present indexOf ``returns`` -1.  The Javascript string index operator does not support negative index values so there is no confusion that -1 clearly means "not found."

The second difference is the for loop.  We'll look in detail at the for loop later as there are many variations and subtle different kinds of for loops possible in Javascript.  ``for (let eachChar of s)`` is the best equivalent of the ``for eachChar in s`` used in python.  each time through the loop, eachChar takes on the value of the next char in the sequence. The use of let restricts the scope of eachChar to the loop, so once the loop is exited eachChar does not exist anymore.


Multiline Strings and Formatted Strings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The latest version of Javascript adds two very welcome additions!  Multiline and formatted strings.  Prior to ECMAScript 6 Javascript programmers did not have the euquivalent of Python's triple quoted strings.  This can be a real pain for web programmers who are constructing and inserting templated chunks of text into a web page.  Javascript now supports multi-line strings using the ``\``` (backquote) character.

.. activecode:: jsmultiline
    :language: javascript

    mlstr = \`Hello world
    this is a "multi-line."
    Isn't it nice.
    string.
    \`

    writeln(mlstr);
    alert(mlstr);


Note that writeln prints a multiline string with the explicit newline characters if you change the ``writeln`` to ``alert``  You will see that the newlines are right where they should be.

Python has many ways of doing formatted strings.

* The standard modulus operator for insertion  ``"The total is %d \n" % total``
* The the format function: ``"The total is {}\n".format(total)``
* As of Python 3.6 formatted string literals.  ``f"the total is {total}\n"`` These are a lot like format but the string just starts with f and you embed the name of the variable you want to insert between the curly braces.

The Javascript formatted strings are called Template literals.  They are closest to the new Python 3.6 formatted strings.  Like multi-line strings they are delimited by back-quotes.

.. activecode:: jsformatstr
    :language: javascript

    total = 10
    mystr = `The total is ${total}`
    writeln(mystr)

Javascript template literals can contain expressions and can contain dotted and indexed objects as well.   In fact there is even more power in the template literals than we have seen here, but we will delay further exploration until the web programming section.

Check Your Understanding
------------------------

.. dragndrop:: check_bools
    :feedback:  No feedback
    :match_1: and|||&&
    :match_2: or|||||
    :match_3: not|||!

    Match the Javascript boolean operators to their Python counterparts.

.. mchoice:: check_hoisting
    :answer_a: Logically moving variable and function declarations to the beginning of the scope.
    :feedback_a: Yes, very good.
    :answer_b: Giving priority to variables declared using let instead of var
    :feedback_b: Both let and var hoist the variables they refer to in a function.  But var does not outside a function.
    :answer_c: Using ``function foo()`` instead of ``var foo = function()``
    :feedback_c: Close, functions declared this way are hoisted but you are not getting the general sense of the definition.
    :correct: a

    What is "hoisting" in Javascript?


.. mchoice:: check_types
    :multiple_answers:
    :answer_a: float
    :answer_b: numeric
    :answer_c: undefined
    :answer_d: string
    :answer_e: boolean
    :correct: b,c,d,e

    Which of the following are valid javascript data types?

.. mchoice:: check_loops
    :answer_a: ``for (let i in mylist) { writeln(i);}``
    :feedback_a: The for in loop iterates over the keys so this will print 0 ... 4.
    :answer_b: ``for (let i = 0; i < mylist.length; i++) { writeln(mylist[i])}``
    :feedback_b: i is the index variable and prints out the value stored at that index in the list
    :answer_c: ``for (let i of mylist) { writeln(i);}``
    :feedback_c: This is the closest example to python's ``for i in mylist:``
    :answer_d: ``for (let i in mylist) { writeln(mylist[i])}``
    :feedback_d: i is the index variable and prints out the value stored at that index in the list
    :correct: a

    Which of the above for loops will **not** print out the numbers 1 through 5 given the declarations below.

    .. code-block:: javascript

        let mylist = [1,2,3,4,5];

.. clickablearea:: check_scope
    :question: click on all of the variables that are correctly scoped
    :iscode:

    "use strict";
    function main(x) {
       :click-incorrect:z = 11:endclick:
       :click-correct:let y = 10:endclick:
       for (let i = 0; i < 10; i++) {
           :click-correct:y = y + 1:endclick:
       }
       :click-incorrect:writeln(i):endclick:
       :click-correct:writeln(y):endclick:
    }

.. actex:: check_sumofn
    :language: javascript

    Write a function to compute the sum of the first N numbers, starting at 0.
    ~~~~
    "use strict"
    function sumOfN(n) {
        // Your code here
    }
