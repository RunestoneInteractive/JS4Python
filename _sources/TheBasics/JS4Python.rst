Introduction
============

.. sidebar:: An Overview of Part I

   .. contents:: Topic Outline

This book assumes that you are already familiar with the
`Python <http://www.python.org>`_ programming language. We will use
Python as a starting point for our journey into
`JavaScript <http://w3schools.com/js>`_. We will begin by looking at a very simple
JavaScript program, just to see what the language looks like and how we get a
program to run. Next, we will look at the main constructs that are
common to most programming languages:

-  Data Types

-  Loops

-  Reading user input

-  Conditionals

Once we have the basics of JavaScript behind us we will move on to look at the
features of JavaScript that are both unique and powerful.

-  Classes

- JavaScript's built-in classes

  - Array
  - Regex
  - Date
  - Math
  - JSON

-  Front End Web Programming

Please note that this book is a work in progress. I will continue to
update and post new versions.

Why Learn Another Programming Language?
=======================================

Python is a nice language for beginning programming for several reasons.
First the syntax is sparse, and clear. Second, the underlying model of
how objects and variables work is very consistent. Third, you can write
powerful and interesting programs without a lot of work. However, Python
is representative of one kind of language, called a dynamic language.
You might think of Python as being fairly informal. There are other
languages, like Java and C++ that are more formal. JavaScript is more like
Python and is arguably the most popular programming language in use today.

These languages have some advantages of their own. First, is speed: for
very large programs Java and C++ are going to give you the best
performance. Second is their maintainability. A lot of what makes Python
easy to use is that you must remember certain things. For example if you
set variable ``x`` to reference a turtle, and forget later that ``x`` is
a turtle but try to invoke a string method on it, you will get an error.
Java and C++ protect you by forcing you to be upfront and formal about
the kind of object each variable is going to refer to.

JavaScript was invented in 1995 by Brendan Eich specifically as a programming language for the browser.  Brendan was originally hired by Netscape to bring the Scheme programming language to the browser, but the scheme syntax was deemed too different from Java to be practical.  Originally code named "Mocha" the first version of JavaScript was written in just 10 days.  It was released largely unchanged as LiveScript and later renamed to JavaScript.  We are still living with many of the decisions made during that first 10 day prototyping session.  Today the language is controlled by Ecma International with various vendors providing their own implementation of the standardized language known as ECMAScript.  The most current version is ECMAScript 9.

Programming languages will always change. As the field of computer
science advances there will be new programming languages and you will
need to learn them. It is important to learn several programming
languages so that you know what to expect. There are certain features
that most programming languages have in common; variables, loops,
conditionals, functions. And there are some features that are unique. If
you know what is common in languages that is a good place to start.


Lets Look at a JavaScript Program
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

Now lets look at the same program written in JavaScript:

.. highlight:: javascript
   :linenothreshold: 4

.. activecode:: hellojavascript
    :language: javascript

    main()

    function main() {
        console.log("Hello World!");
    }


**Wait a minute!**  If you pressed the run button you may now be wondering why you don't see "Hello World" in the output box to the right of the code!  This simple function highlights the first major difference between Python and JavaScript, which is that JavaScript was designed to run in a browser environment not the usual command line environment we associate with languages like Python, Java or C++.  You **can** find "Hello World" but you will need to look in the JavaScript console of the browser to do so. If you are on a mac, option-command-i will do the trick for you in most browsers.  On windows you might try ctrl+shift+j   Or hunt around your menu system until you find it.

With JavaScript it is certainly possible to put the string "Hello World" pretty much anywhere on the page you want to but its a little early in our learning of the language to tackle that problem.  So for now you can use either the alert function or a handy function that we have provided for you to get JavaScript to act more like Python.  The ``writeln`` function does a bunch of work behind the scenes to put our output in the nice gray box next to the code window.   Note that I used ``writeln``, a nod to an ancient language called Pascal, rather than ``print`` because JavaScript already has a ``print`` function that sends the current web page to the printer.  Pretty annoying when you just want to see some simple output.

.. activecode:: hellojavascript2
    :language: javascript

    main()

    function main() {
        alert("Hello World!")
        writeln("Hello World!");
    }


What we see is that at the core there are a few similarities, such as a main and
the string “Hello World” But there are other things that are quite different.
For example, we use ``function`` to create a new function with the body of the function inside the curly braces.  Unlike Python when you define a function this way the function is available for use in regardless of whether you defined the function before you call it. In JavaScript logically moving all function declarations to the start is referred to as 'hoisting.'

It is also possible, and quite common, to define a function like this:

.. activecode:: hellojavascript3
    :language: javascript

    var main = function() {
        alert("Hello World!")
        writeln("Hello World!");
    }

    main()

Note that in this case I moved the call to main to the end of the file.  If you move it back you will see that you get an error.  When you define main like this it is not hoisted, the name main is not defined until the assignment statement is executed.  This example also makes it clear that in JavaScript functions are just objects that can be assigned to variables.  Just like in Python, but in JavaScript this is a really fundamental part of the language.

Python is a bit unique in its use of whitespace and indentation to denote a block of statements.  Most other programming languages, including JavaScript, C++, C, Java, Swift, and many more use curly braces to denote a block.

Now there is one more character on this line that is significant and
that is the ``;`` at the end. In JavaScript the ``;`` signifies the end of a
statement. Unlike Python where statements are almost always only one
line long JavaScript statements can spread across many lines. The compiler
knows it has reached the end of a statement when it encounters a ``;``.
This is a very important difference to remember. In JavaScript the following
statements are all legal and equivalent. I would not encourage you to
write your code like this, but you should know that it is legal.

::

        writeln("Hello World")
        ;
        writeln
            (
             "Hello World"
            )     ;


As a point of fact, the semicolon is optional in JavaScript as long as it is obvious where the end of the statement is.  However I would encourage you to get in the habit of using semicolons to avoid any accidental errors.

.. admonition:: Advanced Topic

    You will find that JavaScript uses the ``function() { ... }`` notation in many contexts.  Many functions in JavaScript are written to expect a function as an argument, and many times it would be a waste of time to give the function a name.  So functions can be defined on-the-fly using ``function()``.  In fact it is so common that in the latest version of JavaScript the developers have made it very easy to define simple one line functions using a special notation called **arrow functions**.  If you are familiar with using ``lambda`` functions in Python you will immediately appreciate the arrow notation: ``(param1, param2) => expression``  Where the result of the expression is the return value.  For example ``(a,b) => a+b`` is the equivalent of ``function(a,b) { return a + b}`` or ``lambda a,b : a+b`` in Python.  The compact notation is really nice.  If you've never used a lambda in Python don't worry about this for now, we'll revisit this idea later.


Boolean Operators
-----------------

The conditionals used in the ``if`` statement can be boolean variables,
simple comparisons, and compound boolean expressions.

In Python you may or may not have learned the boolean expression. ``x = value if condition else value`` This was a new addition to the language in python 3.  It is a feature that is not taught very often in introductory programming courses as many people think it reduces the readability of the code. I don't think this is nearly as true as it is in C, Java and JavaScript where the syntax is a bit more convoluted and confusing.

JavaScript also supports the boolean expression.
``condition ? trueValue : falseValue`` This expression can be used to
test a condition as part of an assignment statement. For example
``a = a % 2 == 0 ? a * a : 3 * x - 1`` In the previous assignment statement
the expression ``a % 2 == 0`` is first checked. If it is true then a is
assigned the value ``a * a`` if it is false then a is assigned the value
of ``3 * x - 1``.  Note that unlike Python the condition comes first, so it looks like you are assigning to the condition which can be very confusing depending on how you write the conditional.

Of course all of this could have been accomplished using a
regular ``if..else`` statement, but sometimes the convenience of a single
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


