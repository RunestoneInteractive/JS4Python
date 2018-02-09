Introduction
============

.. sidebar:: An Overview of Part I

   .. contents:: Topic Outline

This book assumes that you are already familiar with the
`Python <http://www.python.org>`_ programming language. We will use
Python as a starting point for our journey into
`Javascript <http://w3schools.com/js>`_. We will begin by looking at a very simple
Javascript program, just to see what the language looks like and how we get a
program to run. Next, we will look at the main constructs that are
common to most programming languages:

-  Data Types

-  Loops

-  Reading user input

-  Conditionals

Once we have the basics of JavaScript behind us we will move on to look at the
features of Javascript that are both unique and powerful.

-  Classes

- Javascript's built-in classes

  - Array
  - Regex
  - Date
  - Math
  - JSON

-  Front End Web Programming

Please note that this book is a work in progress. I will continue to
update and post new versions.

Why Learn another programming Language?
=======================================

Python is a nice language for beginning programming for several reasons.
First the syntax is sparse, and clear. Second, the underlying model of
how objects and variables work is very consistent. Third, you can write
powerful and interesting programs without a lot of work. However, Python
is representative of one kind of language, called a dynamic language.
You might think of Python as being fairly informal. There are other
languages, like Javascript and C++ that are more formal.  Javascript is more like
Python and is arguably the most popular programming language in use today.

These languages have some advantages of their own. First, is speed: For
very large programs Java and C++ are going to give you the best
performance. Second is their maintainability. A lot of what makes Python
easy to use is that you must remember certain things. For example if you
set variable ``x`` to reference a turtle, and forget later that ``x`` is
a turtle but try to invoke a string method on it, you will get an error.
Java and C++ protect you by forcing you to be upfront and formal about
the kind of object each variable is going to refer to.

Javascript was invented in 1995 by Brendan Eich specifically as a programming language for the browser.  Brendan was originally hired by Netscape to bring the Scheme programming language to the browswer, but the scheme syntax was deemed too different from Java to be practical.  Originally code named "Mocha" the first version of Javascript was written in just 10 days.  It was released largely unchanged as LiveScript and later renamed to Javascript.  We are still living with many of the decisions made during that first 10 day prototyping session.  Today the language is controlled by Ecma International with various vendors providing their own implementation of the standardized language known as ECMAScript.  The most current version is ECMAScript 6.

Programming languages will always change. As the field of computer
science advances there will be new programming languages and you will
need to learn them. It is important to learn several programming
languages so that you know what to expect. There are certain features
that most programming languages have in common; variables, loops,
conditionals, functions. And there are some features that are unique. If
you know what is common in languages that is a good place to start.


Lets look at a Javascript Program
---------------------------------

A time honored tradition in Computer Science is to write a program
called “hello world.” The “hello world” program is simple and easy.
There are no logic errors to make, so getting it to run relies only on
understanding the syntax. To be clear lets look at a “complicated”
version of hello world for Python:

::

    def main():
        print("Hello World!")

Remember that we can define this program right at the Python command
line and then run it:

::

    >>> main()
    "Hello World!"
    >>>

Now lets look at the same program written in Javascript:

.. highlight:: javascript
   :linenothreshold: 4

.. activecode:: hellojavascript
    :language: javascript

    main()

    function main() {
        console.log("Hello World!");
    }


**Wait a minute!**   If you pressed the run button you may now be wondering why you don't see hello world in the output box to the right of the code!  This simple function highlights the first major difference between Python and Javascript, which is that Javascript was designed to run in a browser environment not the usual command line environment we associate with languages like Python, Java or C++.  You **can** find "Hello World" but you will need to look in the Javascript console of the browser to do so. If you are on a mac, option-command-i will do the trick for you in most browsers.  On windows you might try ctrl+shift+j   Or hunt around your menu system until you find it.

With Javascript it is certainly possible to put the string "Hello World" pretty much anywhere on the page you want to but its a little early in our learning of the language to tackle that problem.  So for now you can use either the alert function or a handy function that we have provided for you to get Javascript to act more like Python.  The ``writeln`` function does a bunch of work behind the scenes to put our output in the nice gray box next to the code window.   Note that I used ``writeln``, a nod to an ancient language called Pascal, rather than ``print`` because Javascript already has a ``print`` function that sends the current web page to the printer.  Pretty annoying when you just want to see some simple output.

.. activecode:: hellojavascript2
    :language: javascript

    main()

    function main() {
        alert("Hello World!")
        writeln("Hello World!");
    }


What we see is that at the core there are a few similarities, such as a main and
the string “Hello World” But there are other things that are quite  different.
For example to create a function we use  ``function`` to create a new function with the body of the function inside the curly braces.  Unlike Python when you define a function this way the function is available for use in regardless of whether you defined the function before you call it. In Javascript logically moving all function declarations to the start is referred to as 'hoisting.'

It is also possible, and quite common, to define a function like this:

.. activecode:: hellojavascript3
    :language: javascript

    var main = function() {
        alert("Hello World!")
        writeln("Hello World!");
    }

    main()

Note that in this case I moved the call to main to the end of the file.  If you move it back you will see that you get an error.  When you define main like this it is not hoisted, the name main is not defined until the assignment statement is executed.  This example also makes it clear that in Javscript functions are just objects that can be assigned to variables.  Just like in Python, but in Javscript this is a really fundamental part of the language.

Python is a bit unique in its use of whitespace and indentation to denote a block of statements.  Most other programming languages include Javascript, C++, C, Java, Swift, and many more use curly braces to denote a block.

Now there is one more character on this line that is significant and
that is the ``;`` at the end. In Javascript the ``;`` signifies the end of a
statement. Unlike Python where statements are almost always only one
line long Javascript statements can spread across many lines. The compiler
knows it has reached the end of a statement when it encounters a ``;``.
This is a very important difference to remember. In Javascript the following
statements are all legal and equivalent. I would not encourage you to
write your code like this, but you should know that it is legal.

::

        writeln("Hello World")
        ;
        writeln
            (
             "Hello World"
            )     ;


As a point of fact, the semicolon is optional in Javascript as long as it is obvious where the end of the statement is.  However I would encourage you to get in the habit of using semicolons to avoid any accidental errors.

.. admonition:: Advanced Topic

    You will find that Javascript uses the ``function() { ... }`` notation in many many contexts.  Many functions in javascript are written to expect a function as an argument, and many times it would be a waste of time to give the function a name.  So functions can be defined on-the-fly using ``function()``.  In fact it is so common that in the latest version of Javascript the developers have made it very easy to define simple one line functions using a special notation called **arrow functions**.  If you are familiar with using ``lambda`` functions in Python you will immediately appreciate the arrow notation: ``(param1, param2) => expression``  Where the result of the expression is the return value.  For example ``(a,b) => a+b`` is the equivalent of ``function(a,b) { return a + b}`` or ``lambda a,b : a+b`` in Python.  The compact notation is really nice.  If you've never used a lambda in Python don't worry about this for now, we'll revisit this idea later.

Conditionals
============

Conditional statements in Python and Javascript are very similar. In Python we
have three patterns:

Simple if
---------

::

    if condition:
        statement1
        statement2
        ...

In Javascript this same pattern is simply written as:

::

    if (condition) {
        statement1
        statement2
        ...
    }

Once again you can see that in Javascript the curly braces define a block
rather than indentation. In Javascript the parenthesis around the condition
are required because if is technically a function that evaluates to True
or False.

if else
-------

::

    if condition:
        statement1
        statement2
        ...
    else:
        statement1
        statement2
        ...

In Javascript this is written as:

::

    if (condition) {
        statement1
        statement2
        ...
    } else {
        statement1
        statement2
        ...
    }

elif
----

Javascript does not have an elif pattern like Python. In Javascript you can get the
functionality of an elif statement by nesting if and else. Here is a
simple example in both Python and Javascript.

.. activecode:: pyelif
    :language: python

    grade = int(input('enter a grade'))
    if grade < 60:
        print('F')
    elif grade < 70:
        print('D')
    elif grade < 80:
        print('C')
    elif grade < 90:
        print('B')
    else:
        print('A')

In Javascript we have a couple of ways to write this

.. activecode:: javaelif
    :language: javascript

    main(85)
    main(44)
    main(98)

    function main(grade) {
        if (grade < 60) {
            writeln('F');
        } else {
            if (grade < 70) {
                writeln('D');
            } else {
                if (grade < 80) {
                    writeln('C');
                } else {
                    if (grade < 90) {
                        writeln('B');
                    } else {
                        writeln('A');
                    }
                }
            }
        }
    }


We can get even closer to the elif statement by taking advantage of the
Javascript rule that a single statement does not need to be enclosed in curly
braces. Since the if is the only statement used in each else we can get
away with the following.

.. activecode:: javaelif2
   :language: javascript

    main(85)
    main(44)
    main(98)

    function main(grade) {
        if (grade < 60) {
            writeln('F');
        } else if (grade < 70) {
            writeln('D');
        } else if (grade < 80) {
            writeln('C');
        } else if (grade < 90) {
            writeln('B');
        } else  writeln('A');
       }
   }

switch
------

Javascript also supports a ``switch`` statement that acts something like the
elif statement of Python under certain conditions. To write the grade
program using a switch statement we would use the following:

.. activecode:: javaswitch
    :language: javascript

    "use strict";
    main(85);
    main(70);
    main(99);
    main(10);

    function main(grade) {

       let tempgrade = Math.trunc(grade / 10);
       switch(tempgrade) {
       case 10:
       case 9:
           writeln('A');
           break;
       case 8:
           writeln('B');
           break;
       case 7:
           writeln('C');
           break;
       case 6:
           writeln('A');
           break;
       default:
           writeln('F');
       }
    }


main()

The ``switch`` statement is not used very often, and I recommend you do
not use it! First, it is not as powerful as the ``else if`` model
because the switch variable can only be compared for equality with an
integer or enumerated constant. Second it is very easy to forget to put
in the ``break`` statement. If the break statement is left out then then
the next alternative will be automatically executed. For example if the
grade was 95 and the ``break`` was omitted from the ``case 9:``
alternative then the program would print out both A and B.

Boolean Operators
-----------------

The conditionals used in the if statement can be boolean variables,
simple comparisons, and compound boolean expressions.

In Python you may or may not have learned the boolean expression. ``x = value if condition else value`` This was a new addition to the language in python 3.  It is a feature that is not taught very often in introductory programming courses as many people think it reduces the readability of the code. I don't think this is nearly as true as it is in C, Java and Javascript where the syntax is a bit more convoluted and confusing.

Javascript also supports the boolean expression.
``condition ? trueValue : falseValue`` This expression can be used to
test a condition as part of an assignment statement. For example
``a = a % 2 == 0 ? a*a : 3*x -1`` In the previous assignment statement
the expression ``a%2 ==0`` is first checked. If it is true then a is
assigned the value ``a * a`` if it is false then a is assigned the value
of ``3*x-1``.  Note that unlike Python the condition comes first, so it looks like you are assigning to the condition which can be very confusing depending on how you write the conditional.

Of course all of this could have been accomplished using a
regular if else statement, but sometimes the convenience of a single
statement is too much to resist.

.. activecode:: boolassign
    :language: javascript

    let x = 5 < 4 ? 'five is less than four' : 'five is not less than four'
    writeln(x)
    x = 5 > 4 ? 'five is more than four' : 'five is not more than four'
    writeln(x)

This is really  a shortcut for writing something like:

.. code-block:: javascript

    if (condition)
        x = something
    else
        x = something else


Loops and Iteration
===================

You have already seen a couple of examples of iteration and looping in
Javascript. So this section will just serve as a reference for the differences
in Syntax.

Definite Loop
-------------

In Python the easiest way to write a definite loop is using the for loop
in conjunction with the range function. For example:

::

    for i in range(10):
       print(i)

In Javascript we would write this as:

::

    for (let i = 0; i < 10; i++ ) {
        writeln(i);
    }

Recall that the ``range`` function provides you with a wide variety of
options for controlling the value of the loop variable.

::

    range(stop)
    range(start,stop)
    range(start,stop,step)

The Javascript for loop is really analogous to the last option giving you
explicit control over the starting, stopping, and stepping in the three
clauses inside the parenthesis. You can think of it this way:

::

    for (start clause; stop clause; step clause) {
        statement1
        statement2
        ...
    }

If you want to start at 100, stop at 0 and count backward by 5 the
Python loop would be written as:

::

    for i in range(100,-1,-5):
        print(i)

In Javascript we would write this as:

::

    for (let i = 100; i >= 0; i -= 5)
        writeln(i);

In Python the for loop can also iterate over any sequence such as a
list, a string, or a tuple. Javascript also provides a variation of its for
loop that provides the same functionality in its so called ``for each``
loop.

In Python we can iterate over a list as follows:

::

    l = [1, 1, 2, 3, 5, 8, 13, 21]
    for fib in l:
       print(fib)

In Javascript we can iterate over an Array of integers too:

.. activecode:: arrayiter
    :language: javascript

    let l = [1, 2, 1, 2, 3]
    for (let i of l) {
        writeln(i);
    }

The **for of** construct is new in Javascript, you will see lots more code examples written as a **for in**

.. activecode:: arrayiter2
    :language: javascript

    let l = [1, 2, 1, 2, 3]
    for(let i in l) {
        writeln(l[i]);
    }

To be clear in the example above, the loop variable i is an index variable that you use to index into the original array.

To iterate over the characters in a string in Javascript do the following:

::

    String t = "Hello World";
    for (let c of t) {
        writeln(c);
    }


To iterate over the elements in an array in Javascript:

::

    var data = [3, 7, 2, 9, 1, 11];
    var sum = 0;
    data.forEach(function(d){
        sum += d;
    });
    writeln(sum)


Indefinite Loops
----------------

Both Python and Javascript support the while loop. Recall that in Python the
while loop is written as:

::

    while  condition:
       statement1
       statement2
       ...

In Javascript we add parenthesis and curly braces to get:

::

    while (condition) {
        statement1
        statement2
        ...
    }

Javascript adds an additional, if seldom used variation of the while loop
called the do loop. The do loop is very similar to while except that the
condition is evaluated at the end of the loop rather than the beginning.
This ensures that a loop will be executed at least one time. Some
programmers prefer this loop in some situations because it avoids an
additional assignment prior to the loop. For example:

::

    do {
        statement1
        statement2
        ...
    } while (condition);


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

Collections
===========

Now that we have looked at the primitive variables and programming constructs of Javascript it is time to move on to the Javascript equivalents of Lists and Dictionaries.

As a preliminary to this section it is important for you to understand that everything in Javascript is an object.  and that all objects are capable of acting like dictionaries.  In Javascript you can add an attibute to any object.  ``myObj.someattribute = somevalue``

Lists/Arrays
------------

One of the fundamental data types in Python is the list.  Although Javascript does not have lists, Javascript does have **Arrays** that can act a lot like lists.

Some of the fundamental list operations we will look at in this section.

* append, pop
* index
* slice
* in / not in
* Creating lists of iterables

Python has many ways to add and remove items from lists.  Lets look at the most common one's and their Javascript equivalents.

.. csv-table:: listoperations
   :header: "Python", "Javascript", "Notes"

   "l.append(newitem)", "l.push(newitem)", "Push adds to the end"
   "l.pop()", "l.pop()", "both pop off the end"
   "l.pop(0)", "l.shift()", "Javascript uses shift to remove from the front"
   "l.insert(0,newitem)", "l.unshift(newitem)", "Unshift adds at the start"
   "l.insert(idx, newitem)", "l.splice(idx, 0, newitem)", "splice inserts at index deleting 0 items first"
   "del l[idx]", "l.splice(idx, 1)", "splice can also just delete the item at idx"
   "l1 + l2", "l1.concat(l2)", "You cannot add two arrays together using + in Javascript "

The last one definitely requires a bit of explanation.  The + operator is not defined for Javascript arrays but it also won't give an error if you try it.  Instead Javascript silently (and evilly) converts the two arrays to strings and concatenates the strings!  So, ``[1,2] + [3,4] --> '1, 23, 4'``  Yikes!

Both Python and Javascript support indexing, but negative indexing is not supported by Javascript.  You will just get 'undefined' as a result.

slicing is supported in Javascript but only through the slice method.

.. csv-table:: listoperations1
   :header: "Python", "Javascript", "Notes"

   "l[2:4]", "l.slice(2,4)", "both slices start at 2 and end at 3 inclusive"
   "l[2:]", "l.slice(2)", "both slice from 2 to the end"
   "l[:4]", "l.slice(0,4)", "both slice from the beginning through 3 inclusive"
   "l[-5:-1]", "l.slice(-5,-1)", "both slice from 5 from the end to 1 from the end inclusive"

Unlike indexing, the slice method will accept negative numbers as offsets from the end of the list as both the starting and ending values.

Checking for membership

In Python we often write ``if something in mylist:``  In Javascript we can write this a couple of ways:

.. activecode:: jsmembership
    :language: javascript

    let mylist = [1, 2, 3, "foo", "bar"]
    if (mylist.includes(3)) {
        writeln('yes, includes returns true')
    }
    // indexOf returns the location of item or -1 if not found
    if (mylist.indexOf(3) > -1) {
        writeln('yes, index is > -1')
    }

    // BEWARE this does not work as expected
    if (3 in mylist) {
        writeln('yes, 3 is in mylist')
    }

    if ("foo" in mylist) {
        writeln('yes, foo is in mylist')
    } else {
        writeln("what?")
    }

Hold on, what is going on with that last example?  Using "in" to test for membership is very tempting for Python programmers, and in fact in the first example looks like it works.  But that example is misleading! The in operator only works on the keys of an object.  The items in an array are not the same as the keys of a Javascript object.  But, since Arrays are objects it does not throw an error, it just works in a confusing way.  In the example above it is saying that the object mylist does not have a key called "foo".  What are the keys of an Array?

.. activecode:: arraykeys
    :language: javascript

    let mylist = [1, 2, 3, "foo", "bar"];
    for (let k of Object.keys(mylist)) {
        writeln(k)
    }

If you run the example you can see that for an Array, the keys are the index values of the items in the Array.  Don't use **in** with Arrays.

Finally, lets look at a few convenient ways to make Arrays.

In Python there are a couple of very common patterns for converting parts of strings to lists:  splitting a string, and converting all the characters of a string into array elements.

.. activecode:: jstolist
    :language: javascript

    l1 = "the quick brown fox jumps over".split(/\s/);
    writeln(l1)
    l2 = Array.from("the quick brown fox jumps over")
    writeln(l2)
    // Join works similarly, but the sparator is the argument not the list
    writeln(l1.join(":"))


Lets look at another early Python program. We are going to read numbers
from a file and produce a histogram that shows the frequency of the
various numbers. The data file we will use has one number between 0 and
9 on each line of the file. Here is a simple Python program that creates
and prints a histogram.

.. activecode:: histopy
    :language: python

    def main():
        count = [0]*10
        data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'

        for line in data.split(','):
            count[int(line)] = count[int(line)] + 1

        idx = 0
        for num in count:
            print(idx, " occured ", num, " times.")
            idx += 1

    main()

Now if we run this program on a data file that looks like this:


We will get output that looks like this:

::

    0 occurred 0 times
    1 occurred 1 times
    2 occurred 1 times
    3 occurred 1 times
    4 occurred 1 times
    5 occurred 3 times
    6 occurred 0 times
    7 occurred 0 times
    8 occurred 1 times
    9 occurred 1 times

Lets review what is happening in this little program. In the first line
we create a list and initialize the first 10 positions in the list to be
0. Next we open the data file called ‘test.dat’ Third, we have a loop
that reads each line of the file. As we read each line we convert it to
an integer and increment the counter at the position in the list
indicated by the number on the line we just read. Finally we iterate
over each element in the list printing out both the position in the list
and the total value stored in that position.

To write the Javascript version of this program we will have to introduce
several new Javascript concepts. First, you will see the Javascript equivalent of a
list, called an ``ArrayLlist.`` Next you will see three different kinds
of loops used in Javascript. Two of the loops we will use are going to be very
familiar, the third one is different from what you are used to in Python
but is easy when you understand the syntax:

while
    Used with boolean expression for loop exit condition.

for
    Used to iterate over a sequence. This is very similar to
    ``for i in xxx`` where xxx is a list or string or file.

for
    Used to iterate through a sequence of numbers. This is most similar
    to for ``i in range()``, except the syntax is different.

Here is the Javascript code needed to write the exact same program:

.. activecode:: histojava
    :language: javascript

    "use strict"
    let main = function() {
        let count = new Array(10).fill(0);
        let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'

        for (let num of data.split(',')) {
            const idx = parseInt(num);
            count[idx] = count[idx] + 1
        }

        for(let num in count) {
            writeln(num + " occured " + count[num] + " times.")
        }
    }

    main()



Now, lets look at what is happening in the Javascript source. First we declare a variable to hold the counts -- We are making the assumption that all of the numbers we want to count are between 0 and 9, so we can give our array an initial size, and initialize it with 0 values using the fill method.

Next lines 6 -- 9 iterate over the values in the array (for...of) created by the split method.  As with Python splitting the string results in an array of strings.  So to update our count we need to convert the string to an integer.  We use the parseInt function for this.  Declaring idx as a const inside the for loop ensures that any attempt to change idx will cause an error, as well as limiting the scope of idx to the loop.

Finally lines 11 -- 13 print the results using by iterating over the index values of the array (for...in) and printing out the count value for each.

.. admonition:: Advanced Topic

    Note, if you know you want to convert the elements of the list to integers and you may use the list several times, a common Javascript idiom for this would be to use the map function as follows:

    .. code-block:: javascript

        data = data.split(',').map(function(t) { return parseInt(t) })

    This one liner splits the string, and then applies the parseInt function to every element of the array, returning an array of transformed objects.  The map function is a very powerful functional programming tool and worth getting to know in detail.  In data science the map reduce programming paradigm is widely used on very large datasets.  For example, suppose your task was to add all of the numbers represented by the data string in the example above.  You can do it very simply as follows:

    .. activecode:: jsmapreduce
        :language: javascript

        let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'
        sum = data.split(',')
            .map(function(t) {return parseInt(t)})
            .reduce((a,b) => a+b)

        writeln(sum)


Dictionary/Object
-----------------

Just as Python provides the dictionary when we want to have easy access
to key, value pairs, Javascript also provides us a similar mechanism.  In fact all objects in Javscript

.. activecode:: jsdict
    :language: javascript

    let x = {}
    x['foo'] = 'bar'
    x[2] = 99
    x.answer = 42
    writeln(x)
    writeln(x['answer'])

One important difference between Python dictionaries and Javascript is that you can use either the dotted notation or the index operator to add and retrieve values stored for a key.  Of course if your key has a space or dash in the middle of it you are limited to the index notation, but for many keys using the dotted notation is very convenient and very readable.

Some common operations from Python that you will want to know about include:

* **Get all the keys**  In Python you do this as ``myDict.keys()`` in Javascript it requires a bit more effort:

.. activecode:: jsdictkeys
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    const keys = Object.keys(myDict)
    writeln(keys)

* **Get all of the values** In Python this is ``myDict.values().``  But in Javascript it takes a lot more work.  Using a for loop you can do it like this:

.. activecode:: jsdictvals1
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    let vals = []
    for (const key of Object.keys(myDict)) {
        vals.push(myDict[key])
    }
    writeln(vals)

Here is a much more functional approach to the problem that works in one line, but only for browsers that support ECMAScript 6:

.. activecode:: jsdictvals3
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    const vals = Object.keys(myDict).map(key => myDict[key])
    writeln(vals)

This is pretty interesting as it introduces a new syntax: ``key => myDict[key]`` this is a bit like a Python lambda expresion.  In that it does essientially create a very simple function expression.  These are called **arrow functions**  or sometimes fat arrow functions in Javscript.  These are pretty new additions to the Javscript language, so you might also see an equivalent one liner that looks like this:

::
    const vals = Object.keys(myDict).map(function(key) {return myDict[key]})

The arrow is much cleaner and simpler to read once you have seen and understand them.

* **Get all items** there really is no use for this in Javscript as the most common use case for ``myDict.items()`` in Python is as a way to iterate over the key value pairs of a dictionary.  Also as a side note, Javscript does not have a tuple data type.  But it is just as easy to do the same iteration in javascript

.. activecode:: jsdictvals2
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    for (const key of Object.keys(myDict)) {
        val = myDict[key]
        // do something with key and val
    }


* Get a value for a key if it exists, otherwise get a default.  In Python we commonly would use the pattern ``myDict.get(key,"default")`` where get returns the value for key from myDict or "default" if the key does not exist.  In Javscript the idiom for this is:

.. code-block:: javascript

    myDict['nobodyhome'] || 'default'

This makes use of the fact that if the key 'nobodyhome' is not found in myDict it evaluates to undefined which is falsey which causes the next thing in the boolean or statement to be evaluated, causing the full expression to evaluate to 'default'.

Lets put all of this to work in a full blown example.
We will stay with a simple frequency counting example, only this time we
will count the frequency of words in a document. A simple Python program
for this job could look like this:

.. activecode:: pywordcount
   :language: python

   def main():
       data = open('alice30.txt')
       wordList = data.read().split()
       count = {}
       for w in wordList:
           w = w.lower()
           count[w] = count.get(w,0) + 1

       keyList = sorted(count.keys())
       for k in keyList:
           print("%-20s occurred %4d times"%(k, count[k]))

   main()

   Notice that the structure of the program is very similar to the numeric
   histogram program.

.. datafile:: alice30.txt

   Down, down, down.  Would the fall NEVER come to an end!  'I
   wonder how many miles I've fallen by this time?' she said aloud.
   'I must be getting somewhere near the centre of the earth.  Let
   me see:  that would be four thousand miles down, I think--' (for,
   you see, Alice had learnt several things of this sort in her
   lessons in the schoolroom, and though this was not a VERY good
   opportunity for showing off her knowledge, as there was no one to
   listen to her, still it was good practice to say it over) '--yes,
   that's about the right distance--but then I wonder what Latitude
   or Longitude I've got to?'  (Alice had no idea what Latitude was,
   or Longitude either, but thought they were nice grand words to
   say.)


Now lets look at how to do it in modern Javascript.

.. activecode:: dictjava
    :language: javascript

    "use strict";
    main()

    function main() {

        const data = document.getElementById('alice30.txt').innerText

        let count = {}

        for (let word of data.split(/\s/)) {
            word = word.toLowerCase();
            count[word] = (count[word] || 0) + 1
        }

        for (let key of Object.keys(count)) {
            writeln(key + ": " + count[key])
        }
    }

Other than different syntax, this example is very close to the Python example.  We will get into the details of line 6 in a later chapter. but for now suffice to say that it allows us to get all the text from the first paragraph of alice.  The same thing that we used as a mock file in the Python example.

Improve the program above to remove the punctuation.

Practice Problems
=================

Translate the following into Javascript

.. actex:: jsbasics_1
    :language: javascript

    Translate the following into Javascript:

    ::

        def sumlist(l):
            total = 0
            for num in l:
                total = total + num

            return total
    ~~~~
    # Your code here



.. actex:: jsbasics_2
    :language: javascript

    Write a function that accepts an array of numbers and returns the largest number in the array.
    ~~~~
    // Your code here


.. actex:: jsbasic_3
    :language: javascript

    Write a function that constructs an Array containing the first 10 prime numbers
    ~~~~
    // Your code here

.. actex:: jsbasic_4
    :language: javascript

    Write a function that removes all occurrences of a given letter from a string. The first parameter should be the letter and the second parameter the string.
    ~~~~
    // Your code here

.. actex:: jsbasic_5
    :language: javascript

    Write a function that takes a string as a parameter and returns the reversed string
    ~~~~
    // Your code here

.. actex:: jsbasic_6
    :language: javascript

    Write a function that takes an integer as an argument and returns the number of digits in the integer.
    ~~~~
    // Your code here


.. actex:: jsbasic_7
    :language: javascript

    Write a function that recognizes palindromes.  The function takes a string as a parameter and returns true if the string is a palindrome and false if it is not
    ~~~~
    // Your code here
