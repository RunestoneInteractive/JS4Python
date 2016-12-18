
Preface
=======

Welcome to *Javascript for Python Programmers*. This short ebook is an ongoing
project to help Computer Science students who have had one or two
semesters of Python learn the Javascript programming language. If you are not
a part of that audience you may still find this a useful way to learn
about Javascript. This book is written using the **build on what you know**
philosophy. In order to help you learn Javascript I will start with a Python
example and then implement the example in Javascript. Along the way we will
examine the strengths, weaknesses and differences between those two
languages.

This book does not attempt to replace the many good Javascript reference books
that are available.  Please feel free to use this book for
yourself, or if it fits a class you are teaching you are welcome to use
this as a resource for your own class.

I have published this book using a Creative Commons license to
encourage you to use it, change it, and modify it for your own purposes.
I would appreciate knowing what you think if you do use this book, and I
would love to see any modifications or additions you make.  The source is available on `github <https://github.com/RunestoneInteractive>`_

Brad Miller `bmiller@luther.edu <mailto://bmiller@luther.edu>`_ January,
2016

    |image|
    This work is licensed under a Creative Commons Attribution 3.0
    United States License. See http://creativecommons.org


Introduction
============

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
languages, like Java and C++ that are more formal.  Javascript is more like
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
        print "Hello World!"

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

    var main = function() {
        console.log("Hello World!");
    }

    main()

**Wait a minute!**   If you pressed the run button you may now be wondering why you don't see hello world in the output box to the right of the code!  This simple function highlights the first major difference between Python and Javascript, which is that Javascript was designed to run in a browser environment not the usual command line environment we associate with languages like Python, Java or C++.  You **can** find "Hello World" but you will need to look in the Javascript console of the browser to do so. If you are on a mac, option-command-i will do the trick for you in most browsers.  On windows you might try ctrl+shift+j   Or hunt around your menu system until you find it.

With Javascript it is certainly possible to put the string "Hello World" pretty much anywhere on the page you want to but its a little early in our learning of the language to tackle that problem.  So for now you can use either the alert function or a handy function that we have provided for you to get Javascript to act more like Python.  The ``writeln`` function does a bunch of work behind the scenes to put our output in the nice gray box next to the code window.   Note that I used ``writeln``, a nod to an ancient language called Pascal, rather than ``print`` because Javascript already has a ``print`` function that sends the current web page to the printer.  Pretty annoying when you just want to see some simple output.

.. activecode:: hellojavascript2
    :language: javascript

    var main = function() {
        alert("Hello World!")
        writeln("Hello World!");
    }

    main()


What we see is that at the core there are a few similarities, such as a main and
the string “Hello World” But there are other things that are quite  different.
For example to create a function we use  ``function()`` to create a new function with the body of the function inside the curly braces. This new function is assigned a name using an assignment statement.  This should make it really clear to you that functions in Javascript are just objects like any other object.  This is also true in Python, but the def keyword makes it less obvious.

Python is a bit unique in its use of whitespace and indentation to denote a block of statements.  Most other programming languages include Javascript, C++, C, Java, Swift, and many more use curly braces to denote a block.

Now there is one more character on this line that is significant and
that is the ``;`` at the end. In Java the ``;`` signifies the end of a
statement. Unlike Python where statements are almost always only one
line long Javascript statements can spread across many lines. The compiler
knows it has reached the end of a statement when it encounters a ``;``.
This is a very important difference to remember. In Java the following
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
        print "the temperature in C is: ", cel

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


String
------

Strings in Javascript and Python are quite similar. Like Python, Javascript strings are immutable. However, manipulating strings in Java is not quite as
obvious since Strings do not support an indexing or slicing operator.
That is not to say that you can’t index into a Java string, you can. You
can also pull out a substring just as you can with slicing. The
difference is that Java uses method calls where Python uses Operators.

In fact this is the first example of another big difference between Java
and Python. Java does not support any operator overloading. Table 3 maps
common Python string operations to their Java counterparts. For the
examples shown in the table we will use a string variable called “str”

========================== ======================== =============================================================
                    Python                     Java                                                   Description
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

    
Collections
-----------

Lists/Arrays
------------

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

To write the Java version of this program we will have to introduce
several new Java concepts. First, you will see the Java equivalent of a
list, called an ``ArrayLlist.`` Next you will see three different kinds
of loops used in Java. Two of the loops we will use are going to be very
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
        let count = new Array(10);
        let data = '9,8,4,3,5,5,1,1,5,8,9,7,7,7,6'

        for(let i = 0; i < count.length; i++) {
            count[i] = 0;
        }

        for (let num of data.split(',')) {
            count[parseInt(num)] = count[parseInt(num)] + 1
        }

        for(let num in count) {
            writeln(num + " occured " + count[num] + " times.")
        }
    }

    main()



Now, lets look at what is happening in the Java source. As usual we
declare the variables we are going to use at the beginning of the
method. In this example we are declaring a Scanner variable called data,
an integer called idx and an ``ArrayList`` called count. However, there
is a new twist to the ``ArrayList`` declaration. Unlike Python where
lists can contain just about anything, in Java we let the compiler know
what kind of objects our array list is going to contain. In this case
the ``ArrayList`` will contain Integers. The syntax we use to declare
what kind of object the list will contain is the ``<Type>``
syntax.

Technically, you don’t *have* to declare what is going to be on an array
list. The compiler will allow you to leave the ``<``*Type*``>`` off the
declaration. If you don’t tell Java what kind of object is going to be
on the list Java will give you a warning message like this:

::

    Note: Histo.java uses unchecked or unsafe operations.
    Note: Recompile with -Xlint:unchecked for details.

Without the <Integer> part of the declaration Java simply assumes that
*any* object can be on the list. However, without resorting to an ugly
notation called casting, you cannot do anything with the objects on a
list like this! So, if you forget you will surely see more errors later
in your code. (Try it and see what you get)

Lines 13—20 are required to open the file. Why so many lines to open a
file in Java? The additional code mainly comes form the fact that Java
forces you to reckon with the possibility that the file you want to open
is not going to be there. If you attempt to open a file that is not
there you will get an error. A try/catch construct allows us to try
things that are risky, and gracefully recover from an error if one
occurs. The following example shows the general structure of a try catch
block.

::

    try {
       Put some risky code in here.... like opening a file
    }
    catch (Exception e) {
       If an error happens in the try block an exception is thrown.
       We will catch that exception here!
    }

Notice that in line 16 we are catching an ``IOException``. In fact we
will see later that we can have multiple catch blocks to catch different
types of exceptions. If we want to be lazy and catch any old exception
we can catch an ``Exception`` which is the parent of all exceptions.

On line 22 we create our array list and give it an initial size of 10.
Strictly speaking it is not necessary to give the ``ArrayList`` any
size. It will grow or shrink dynamically as needed just like a list in
Python. On line 23 we start the first of three loops. The for loop on
lines 23–25 serves the same purpose as the Python statement
``count = [0]*10``, that is it initializes the first 10 positions in the
``ArrayList`` to hold the value 0.

The syntax of this for loop probably looks very strange to you, but in
fact it is not too different from what happens in Python using range. In
fact ``for(Integer i = 0; i < 10; i++)`` is exactly equivalent to the
Python ``for i in range(10)`` The first statement inside the parenthesis
declares and initializes a loop variable i. The second statement is a
Boolean expression that is our exit condition. In other words we will
keep looping as long as this expression evaluates to true. The third
clause is used to increment the value of the loop variable at the end of
iteration through the loop. In fact ``i++`` is Java shorthand for
``i = i +`` Java also supports the shorthand ``i--`` to decrement the
value of i. Like Python you can also write ``i += 2`` as shorthand for
``i = i + 2`` Try to rewrite the following Python for loops as Java for
loops:

    -  ``for i in range(2,101,2)``

    -  ``for i in range(1,100)``

    -  ``for i in range(100,0,-1)``

    -  ``for x,y in zip(range(10),range(0,20,2))`` [hint, you can
       separate statements in the same clause with a ,]

The next loop (lines 27–30) shows a typical Java pattern for reading
data from a file. Java while loops and Python while loops are identical
in their logic. In this case we will continue to process the body of the
loop as long as ``data.hasNextInt()`` returns true.

Line 29 illustrates another important difference between Python and
Java. Notice that in Java we can not write
``count[idx] = count[idx] + 1``. This is because in Java there is no
overloading of operators. Everything except the most basic math and
logical operations is done using methods. So, to set the value of an
``ArrayList`` element we use the ``set`` method. The first parameter of
``set`` indicates the index or position in the ``ArrayList`` we are
going to change. The next parameter is the value we want to set. Notice
that once again we cannot use the indexing square bracket operator to
retrieve a value from the list, but we must use the ``get`` method.

The last loop in this example is similar to the Python for loop where
the object of the loop is a Sequence. In Java we can use this kind of
for loop over all kinds of sequences, which are called Collection
classes in Java. The for loop on line 33 ``for(Integer i : count)`` is
equivalent to the Python loop ``for i in count:`` This loop iterates
over all of the elements in the ArrayList called count. Each time
through the loop the Integer variable i is bound to the next element of
the ``ArrayList``. If you tried the experiment of removing the
``<Integer>`` part of the ``ArrayList`` declaration you probably noticed
that you had an error on this line. Why?

Arrays
------

As I said at the outset of this Section we are going to use Java
``ArrayLists`` because they are easier to use and more closely match the
way that Python lists behave. However, if you look at Java code on the
internet or even in your Core Java books you are going to see examples
of something called arrays. In fact you have already seen one example of
an array declared in the ‘Hello World’ program. Lets rewrite this
program to use primitive arrays rather than array lists.

.. activecode:: primarrays
    :language: java
    :sourcefile: HistoArray.java
    :datafile: test.dat

    import java.util.Scanner;
    import java.io.File;
    import java.io.IOException;

    public class HistoArray {
        public static void main(String[] args) {
            Scanner data = null;
            Integer[] count = {0,0,0,0,0,0,0,0,0,0};
            Integer idx;



            try {
                    data = new Scanner(new File("test.dat"));
            }
            catch ( IOException e) {
                System.out.println("Sorry but I was unable to open your data file");
                e.printStackTrace();
                System.exit(0);
            }

            while(data.hasNextInt()) {
                idx = data.nextInt();
                count[idx] = count[idx] + 1;
            }

            idx = 0;
            for(Integer i : count) {
                System.out.println(idx + " occured " + i + " times.");
                idx++;
            }
        }
    }

The main difference between this example and the previous example is
that we declare count to be an Array of integers. We also can initialize
short arrays directly using the syntax shown on line 8. Then notice that
on line 24 we can use the square bracket notation to index into an
array.

Dictionary
----------

Just as Python provides the dictionary when we want to have easy access
to key, value pairs, Java also provides us a similar mechanism. Rather
than the dictionary terminology, Java calls these objects Maps. Java
provides two different implementations of a map, one is called the
``TreeMap`` and the other is called a ``HashMap``. As you might guess
the ``TreeMap`` uses a balanced binary tree behind the scenes, and the
``HashMap`` uses a hash table.

Lets stay with a simple frequency counting example, only this time we
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
           print "%-20s occurred %4d times"%(k, count[k])

   main()


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



Notice that the structure of the program is very similar to the numeric
histogram program.

.. activecode:: dictjava
    :language: java
    :sourcefile: HistoMap.java
    :datafile: alice30.txt

    import java.util.Scanner;
    import java.util.ArrayList;
    import java.io.File;
    import java.io.IOException;
    import java.util.TreeMap;

    public class HistoMap {

        public static void main(String[] args) {
            Scanner data = null;
            TreeMap<String,Integer> count;
            Integer idx;
            String word;
            Integer wordCount;

            try {
                    data = new Scanner(new File("alice30.txt"));
            }
            catch ( IOException e) {
                System.out.println("Sorry but I was unable to open your data file");
                e.printStackTrace();
                System.exit(0);
            }

            count = new TreeMap<String,Integer>();

            while(data.hasNext()) {
                word = data.next().toLowerCase();
                wordCount = count.get(word);
                if (wordCount == null) {
                    wordCount = 0;
                }
                count.put(word,++wordCount);
            }

            for(String i : count.keySet()) {
                System.out.printf("%-20s occured %5d times\n", i, count.get(i) );
            }
        }
    }

Improve the program above to remove the punctuation.


Conditionals
============

Conditional statements in Python and Java are very similar. In Python we
have three patterns:

Simple if
---------

::

    if condition:
        statement1
        statement2
        ...

In Java this same pattern is simply written as:

::

    if (condition) {
        statement1
        statement2
        ...
    }

Once again you can see that in Java the curly braces define a block
rather than indentation. In Java the parenthesis around the condition
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

In Java this is written as:

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

Java does not have an elif pattern like Python. In Java you can get the
functionality of an elif statement by nesting if and else. Here is a
simple example in both Python and Java.

.. activecode:: pyelif
    :language: python

    grade = int(input('enter a grade'))
    if grade < 60:
        print 'F'
    elif grade < 70:
        print 'D'
    elif grade < 80:
        print 'C'
    elif grade < 90:
        print 'B'
    else:
        print 'A'

In Java we have a couple of ways to write this

.. activecode:: javaelif
   :language: java
   :sourcefile: ElseIf.java

   public class ElseIf {
       public static void main(String args[]) {
        int grade = 85;

        if (grade < 60) {
            System.out.println('F');
        } else {
            if (grade < 70) {
                System.out.println('F');
            } else {
                if (grade < 80) {
                    System.out.println('F');
                } else {
                    if (grade < 90) {
                        System.out.println('F');
                    } else {
                        System.out.println('F');
                    }
                }
            }
        }
      }
    }

We can get even closer to the elif statement by taking advantage of the
Java rule that a single statement does not need to be enclosed in curly
braces. Since the if is the only statement used in each else we can get
away with the following.

.. activecode:: javaelif2
   :language: java
   :sourcefile: ElseIf.java

   public class ElseIf {
       public static void main(String args[]) {
        int grade = 85;
        if (grade < 60) {
            System.out.println('F');
        } else if (grade < 70) {
            System.out.println('D');
        } else if (grade < 80) {
            System.out.println('C');
        } else if (grade < 90) {
            System.out.println('B');
        } else  System.out.println('A');
       }
   }

switch
------

Java also supports a ``switch`` statement that acts something like the
elif statement of Python under certain conditions. To write the grade
program using a switch statement we would use the following:

.. activecode:: javaswitch
   :language: java
   :sourcefile: SwitchUp.java

   public class SwitchUp {
       public static void main(String args[]) {
        int grade = 85;

        int tempgrade = grade / 10;
        switch(tempgrade) {
        case 10:
        case 9:
            System.out.println('A');
            break;
        case 8:
            System.out.println('B');
            break;
        case 7:
            System.out.println('C');
            break;
        case 6:
            System.out.println('A');
            break;
        default:
            System.out.println('F');
        }
      }
    }

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

{sub:boolean\_operators}

The conditionals used in the if statement can be boolean variables,
simple comparisons, and compound boolean expressions.

Java also supports the boolean expression.
``condition ? trueValue : falseValue`` This expression can be used to
test a condition as part of an assignment statement. For example
``a = a % 2 == 0 ? a*a : 3*x -1`` In the previous assignment statement
the expression ``a%2 ==0`` is first checked. If it is true then a is
assigned the value ``a * a`` if it is false then a is assigned the value
of ``3*x-1``. Of course all of this could have been accomplished using a
regular if else statement, but sometimes the convenience of a single
statement is too much to resist.

Loops and Iteration
===================

You have already seen a couple of examples of iteration and looping in
Java. So this section will just serve as a reference for the differences
in Syntax.

Definite Loop
-------------

In Python the easiest way to write a definite loop is using the for loop
in conjunction with the range function. For example:

::

    for i in range(10):
       print i

In Java we would write this as:

::

    for (Integer i = 0; i < 10; i++ ) {
        System.out.println(i);
    }

Recall that the ``range`` function provides you with a wide variety of
options for controlling the value of the loop variable.

::

    range(stop)
    range(start,stop)
    range(start,stop,step)

The Java for loop is really analogous to the last option giving you
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
        print i

In Java we would write this as:

::

    for (Integer i = 100; i >= 0; i -= 5)
        System.out.println(i);

In Python the for loop can also iterate over any sequence such as a
list, a string, or a tuple. Java also provides a variation of its for
loop that provides the same functionality in its so called ``for each``
loop.

In Python we can iterate over a list as follows:

::

    l = [1, 1, 2, 3, 5, 8, 13, 21]
    for fib in l:
       print fib

In Java we can iterate over an ArrayList of integers too:

::

    ArrayList<Integer> l = new ArrayList<Integer>();
    l.add(1); l.add(1); l.add(2); l.add(3);
    for (Integer i : l) {
        System.out.println(i)
    }

This example stretches the imagination a bit, and in fact points out one
area where Java’ s primitive arrays are easier to use than an array
list. In fact all primitive arrays can be used in a ``for each`` loop.

::

    int l[] = {1,1,2,3,5,8,13,21};
    for(int i : l) {
        System.out.println(i);
    }

To iterate over the characters in a string in Java do the following:

::

    String t = "Hello World";
    for (char c : t.toCharArray()) {
        System.out.println(c);
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

Both Python and Java support the while loop. Recall that in Python the
while loop is written as:

::

    while  condition:
       statement1
       statement2
       ...

In Java we add parenthesis and curly braces to get:

::

    while (condition) {
        statement1
        statement2
        ...
    }

Java adds an additional, if seldom used variation of the while loop
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

Defining Classes in Java
========================

You have already seen how to define classes in Java. Its unavoidable for
even the simplest of programs. In this section we will look at how we
define classes to create our own data types. Lets start by creating a
fraction class to extend the set of numeric data types provided by our
language. The requirements for this new data type are as follows:

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
``objectReferenc.variableName`` In Java all data members must be
declared up front.

The declarations of instance variables can come at the beginning of the
class definition or the end. Cay Horstman, Author of the *Core Java*
books puts the declarations at the end of the class. I like them at the
very beginning so you see the variables that are declared before you
begin looking at the code that uses them. With that in mind the first
part of the Fraction class definition is as follows:

.. highlight:: java
   :linenothreshold: 5


::

    public class Fraction {
        private Integer numerator;
        private Integer denominator;


    }

Notice that we have declared the numerator and denominator to be
private. This means that the compiler will generate an error if another
method tries to write code like the following:

::

    Fraction f = new Fraction(1,2);
    Integer y = f.numerator * 10;

Direct access to instance variables is not allowed. Therefore if we
legitimately want to be able to access information such as the numerator
or denominator for a particular fraction we must have getter functions.
It is very common programming practice to provide getter and setter
functions for instance variables in Java.

::

    public Integer getNumerator() {
        return numerator;
    }

    public void setNumerator(Integer numerator) {
        this.numerator = numerator;
    }

    public Integer getDenominator() {
        return denominator;
    }

    public void setDenominator(Integer denominator) {
        this.denominator = denominator;
    }

Writing a constructor
---------------------

Once you have identified the instance variables for you class the next
thing to consider is the constructor. In Java, constructors have the
same name as the class and are declared public. They are declared
without a return type. So any function that is named the same as the
class and has no return type is a constructor. Our constructor will take
two parameters the numerator and the denominator.

::

    public Fraction(Integer top, Integer bottom) {
        num = top;
        den = bottom;
    }

There are a couple of important things to notice here. First, you will
notice that the constructor does not have a self parameter. You will
also notice that we can simply refer to the instance variables by name
without the self prefix, because they have already been declared. This
allows the Java compiler to do the work of dereferencing the current
Java object. Java does provide a special variable called ``this`` that
works like the self variable. In Java, ``this`` is typically only used
when it is needed to differentiate between a parameter or local variable
and an instance variable. For example this alternate definition of the
the Fraction constructor uses ``this`` to differentiate between
parameters and instance variables.

::

    public Fraction(Integer num, Integer den) {
        this.num = num;
        this.den = den;
    }

Methods or Member Functions
---------------------------

Now we come to one of the major differences between Java and Python. The
Python class definition used the special methods for addition, and
comparison that have the effect of redefining how the standard operators
behave. In Java there is **no operator overloading**. So we will have to
write member functions to do addition, subtraction, multiplication, and
division. Lets begin with addition.

::

    public Fraction add(Fraction otherFrac) {
        Integer newNum, newDen, common;

        newNum = otherFrac.getDenominator()*this.numerator +
                                 this.denominator*otherFrac.getNumerator();
        newDen = this.denominator * otherFrac.getDenominator();
        common = gcd(newNum,newDen);
        return new Fraction(newNum/common, newDen/common );
    }

First you will notice that the add member function is declared as
``public Fraction`` The ``public`` part means that any other method may
call the add method. The ``Fraction`` part means that ``add`` will
return a fraction as its result.

Second, you will notice that on line two all of the local variables used
in the function are declared. In this case there are three local
variables: ``newNum``, ``newDen``, and ``common``. It is a good idea for
you to get in the habit of declaring your local variables at the
beginning of your function. This declaration section provides a simple
road map for the function in terms of the data that will be used. The
listing above also makes use of the ``this`` variable, you may find it
useful to use ``this`` until you are comfortable with abandoning your
Pythonic ideas about ``self``.

Declaring your variables at the top is not a requirement, it is just a
recommended practice for you. Java only requires that you declare your
variables before they are used. The following version of Fraction is
also legal Java, but may be somewhat less readable.

::

    public Fraction add(Fraction otherFrac) {
        Integer newNum = otherFrac.getDenominator()*numerator +
                                 denominator*otherFrac.getNumerator();
        Integer newDen = denominator * otherFrac.getDenominator();
        Integer common = gcd(newNum,newDen);
        return new Fraction(newNum/common, newDen/common );
    }

The addition takes place by multiplying each numerator by the opposite
denominator before adding. This procedure ensures that we are adding two
fractions with common denominators. Using this approach the denominator
is computed by multiplying the two denominators. The greatest common
divisor function is used to find a common divisor to simplify the
numerator and denominator in the result.

Finally on line 8 a new fraction is returned as the result of the
computation. The value that is returned by the return statement must
match the value that is specified as part of the declaration. So, in
this case the return value on line 8 must match the declared value on
line 1.

Method Signatures and Overloading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our specification for this project said that we need to be able to add a
``Fraction`` to an ``Integer``. In Python we can do this by checking the
type of the parameter using the ``isinstance`` function at runtime.
Recall that ``isinstance(1,int)`` returns ``True`` to indicate that 1 is
indeed an instance of the ``int`` class. See lines 22 and 53—68 of the
Python version of the Fraction class to see how our Python
implementation fulfills this requirement.

In Java we can do runtime type checking, but the compiler will not allow
us to pass an Integer to the add function since the parameter has been
declared to be a Fraction. The way that we solve this problem is by
writing another ``add`` method with a different set of parameters. In
Java this practice is legal and common we call this practice
**overloading**.

This idea of overloading raises a very important difference between
Python and Java. In Python a method is known by its name only. In Java a
method is known by its signature. The signature of a method includes its
name, and the types of all of its parameters. The name and the types of
the parameters are enough information for the Java compiler to decide
which method to call at runtime.

To solve the problem of adding an ``Integer`` and a ``Fraction`` in Java
we will overload both the constructor and the add function. We will
overload the constructor so that if it only receives a single
``Integer`` it will convert the ``Integer`` into a ``Fraction``. We will
also overload the add method so that if it receives an ``Integer`` as a
parameter it first construct a ``Fraction`` from that integer and then
add the two ``Fractions`` together. The new methods that accomplish this
task are as follows:

::

    public Fraction(Integer num) {
        this.numerator = num;
        this.denominator = 1;
    }

    public Fraction add(Integer other) {
        return add(new Fraction(other));
    }

Notice that the overloading approach can provide us with a certain
elegance to our code. Rather than utilizing if statements to check the
types of parameters we just overload functions ahead of time which
allows us to call the method we want and allow the compiler to make the
decisions for us. This way of thinking about programming takes some
practice.

Our full Fraction class to this point would look like the following. You
may want to try to compile and run the short test program provided just
to see what happens.

.. activecode:: fraction1
    :language: java
    :sourcefile: Fraction.java

    public class Fraction {

        private Integer numerator;
        private Integer denominator;

        public Fraction(Integer num, Integer den) {
            this.numerator = num;
            this.denominator = den;
        }

        public Fraction(Integer num) {
            this.numerator = num;
            this.denominator = 1;
        }

        public Fraction add(Fraction other) {
            Integer newNum, newDen, common;

            newNum = other.getDenominator()*this.numerator + this.denominator*other.getNumerator();
            newDen = this.denominator * other.getDenominator();
            common = gcd(newNum,newDen);
            return new Fraction(newNum/common, newDen/common );
        }

        public Fraction add(Integer other) {
            return add(new Fraction(other));
        }

        private static Integer gcd(Integer m, Integer n) {
            while (m % n != 0) {
                Integer oldm = m;
                Integer oldn = n;
                m = oldn;
                n = oldm%oldn;
            }
            return n;
        }

        public static void main(String[] args) {
            Fraction f1 = new Fraction(1,2);
            Fraction f2 = new Fraction(2,3);

            System.out.println(f1.mul(f2));
            System.out.println(f1.add(1));
        }

    }

Inheritance
-----------

If you ran the program above you probably noticed that the output is not
very satisfying. Chances are your output looked something like this:

::

    Fraction@7b11a3ac
    Fraction@6c22c95b

The reason is that we have not yet provided a friendly string
representation for our Fraction objects. The truth is that, just like in
Python, whenever an object is printed by the ``println`` method it must
be converted to string format. In Python you can control how that looks
by writing an ``__str__`` method for your class. If you do not then you
will get the default, which looked something like the above.

The ``Object`` Class
~~~~~~~~~~~~~~~~~~~~

In Java, the equivalent of ``__str__`` is the ``toString`` method. Every
object in Java already has a ``toString`` method defined for it because
every class in Java automatically inherits from the Object class. The
object class provides default implementations for the following
functions.

-  clone

-  equals

-  finalize

-  getClass

-  hashCode

-  notify

-  notifyAll

-  toString

-  wait

We are not interested in most of the functions on that list, and many
Java programmers live happy and productive lives without knowing much
about most of the functions on that list. However, to make our output
nicer we will implement the ``toString`` method for the ``Fraction``
class. A simple version of the method is provided below.

::

    public String toString() {
        return numerator.toString() + "/" + denominator.toString();
    }

The other important class for us to implement from the list of methods
inherited from Object is the ``equals`` method. When two objects are
compared in Java using the == operator they are tested to see if they
are exactly the same object, that is do the two objects occupy the same
exact space in the computers memory. This is the default behavior of the
``equals`` method provided by Object. The ``equals`` method allows us to
decide if two objects are equal by looking at their instance variables.
However it is important to remember that since Java does not have
operator overloading if you want to use your equals method you must call
it directly. Therefore once you write your own ``equals`` method:

::

    object1 == object2

is NOT the same as

::

    object1.equals(object2)

Here is an equals method for the Fraction class:

::

    public boolean equals(Fraction other) {
        Integer num1 = this.numerator * other.getDenominator();
        Integer num2 = this.denominator * other.getNumerator();
        if (num1 == num2)
            return true;
        else
            return false;
    }

One important thing to remember about ``equals`` is that it only checks
to see if two objects are equal it does not have any notion of less than
or greater than. We’ll see more about that shortly.

Abstract Classes and Methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we want to make our Fraction class behave like Integer, Double, and
the other numeric classes in Java We need to make a couple of additional
modifications to the class. The first thing we will do is plug
``Fraction`` into the Java class hierarchy at the same place as Integer
and its siblings. If you look at the documentation for Integer you will
see that Integer’s parent class is ``Number``. Number is an **abstract
class** that specifies several methods that all of its children must
implement. In Java an abstract class is more than just a placeholder for
common functions. In Java an abstract class has the power to specify
certain functions that all of its children **must** implement. You can
trace this power back to the strong typing nature of Java.

The that makes the Fraction class a child of Number is as follows:

::

    public class Fraction extends Number {
        ...
    }

The keyword extends tells the compiler that the class ``Fraction``
extends, or adds new functionality to the ``Number`` class. A child
class always extends its parent.

The methods we must implement if ``Fraction`` is going to be a child of
``Number`` are:

-  longValue

-  intValue

-  floatValue

-  doubleValue

This really isn’t much work for us to implement these functions as all
we have to do is some conversion of our own and some division. The
implementation of these methods is as follows:

::

    public double doubleValue() {
        return numerator.doubleValue() / denominator.doubleValue();
    }


    public float floatValue() {
        return numerator.floatValue() / denominator.floatValue();
    }


    public int intValue() {
        return numerator.intValue() / denominator.intValue();
    }


    public long longValue() {
        return numerator.longValue() / denominator.longValue();
    }

By having the ``Fraction`` class extend the ``Number`` class we can now
pass a ``Fraction`` to any Java function that specifies it can receive a
``Number`` as one of its parameters. For example many Java user
interface methods accept any object that is a subclass of ``Number`` as
a parameter. In Java the class hierarchy and the IS-A relationships are
very important. Whereas in Python you can pass any kind of object as a
parameter to any function the strong typing of Java makes sure that you
only pass an object as a parameter that is of the type specified in the
function call or one of its children. So, in this case when you see a
parameter of type ``Number`` its important to remember that an
``Integer`` *is-a* ``Number`` and a ``Double`` *is-a* ``Number`` and a
``Fraction`` *is-a* ``Number``.

However, and this is a big however, it is also important to remember
that if you specify ``Number`` as the type on a particular parameter
then the Java compiler will only let you use the methods of a
``Number``. In this case longValue, intValue, floatValue, and
doubleValue.

Lets suppose you define a method in some class as follows:

::

    public void test(Number a, Number b) {
        a.add(b);
    }

The Java compiler would give an error because ``add`` is not a defined
method of the ``Number`` class. Even if you called the add method and
passed two ``Fractions`` as parameters.

Interfaces
----------

Lets turn our attention to making a list of fractions sortable by the
standard Java sorting method ``Collections.sort``. In Python all we
would need to do is implement the ``__cmp__`` method. But in Java we
cannot be that informal. In Java Things that are sortable must be
``Comparable``. Your first thought might be that ``Comparable`` is
Superclass of ``Number``. That would be a good thought but it would not
be correct. Java only supports single inheritance, that is, a class can
have only one parent. Although it would be possible to add an additional
Layer to the class hierarchy it would also complicate things
dramatically. Because Not only are Numbers comparable, but Strings are
also Comparable as would many other types. For example we might have a
``Student`` class and we want to be able to sort Students by their gpa.
But ``Student`` already extends the class ``Person`` for which we have
no natural comparison function.

Java’s answer to this problem is the ``Interface`` mechanism. Interfaces
are like a combination of Inheritance and contracts all rolled into one.
An interface is a *specification* that says any object that claims it
implements this interface must provide the following methods. It sounds
a little bit like an abstract class, however it is outside the
inheritance mechanism. You can never create an instance of
``Comparable``. Many objects, however, do implement the ``Comparable``
interface. What does the Comparable interface specify?

The ``Comparable`` interface says that any object that claims to be
``Comparable`` must implement the ``compareTo`` method. The following is
the documentation for the ``compareTo`` method as specified by the
Comparable interface.

::

    int compareTo(T o)

     Compares this object with the specified object for order. Returns a negative integer, zero, or a
    positive integer as this object is less than, equal to, or greater than the specified object. The
    implementor must ensure sgn(x.compareTo(y)) == -sgn(y.compareTo(x)) for all x and y. (This implies
    that x.compareTo(y) must throw an exception iff y.compareTo(x) throws an exception.)

    The implementor must also ensure that the relation is transitive: (x.compareTo(y)>0 &&
    y.compareTo(z)>0) implies x.compareTo(z)>0.

    Finally, the implementor must ensure that x.compareTo(y)==0 implies that sgn(x.compareTo(z)) ==
    sgn(y.compareTo(z)), for all z.

    It is strongly recommended, but not strictly required that (x.compareTo(y)==0) == (x.equals(y)).
    Generally speaking, any class that implements the Comparable interface and violates this condition
    should clearly indicate this fact. The recommended language is "Note: this class has a natural
    ordering that is inconsistent with equals."

    In the foregoing description, the notation sgn(expression) designates the mathematical signum
    function, which is defined to return one of -1, 0, or 1 according to whether the value of
    expression is negative, zero or positive.

To make our ``Fraction`` class ``Comparable`` we must modify the class
declaration line as follows:

::

    public class Fraction extends Number implements Comparable<Fraction> {
        ...
    }

The specification ``Comparable<Fraction>`` makes it clear that Fraction
is only comparable with another Fraction. The ``compareTo`` method could
be implemented as follows:

::

    public int compareTo(Fraction other) {
        Integer num1 = this.numerator * other.getDenominator();
        Integer num2 = this.denominator * other.getNumerator();
        return num1 - num2;
    }

Static member variables
-----------------------

Suppose that you wanted to write a Student class so that the class could
keep track of the number of students it had created. Although you could
do this with a global counter variable that is an ugly solution. The
right way to do it is to use a static variable. In Python we could do
this as follows:

.. activecode:: pystudent
    :language: python

    class Student:
        numStudents = 0

        def __init__(self, id, name):
            self.id = id
            self.name = name

            Student.numStudents = Student.numStudents + 1

    def main():
        for i in range(10):
            s = Student(i,"Student-"+str(i))
        print 'The number of students is: ', Student.numStudents

    main()

In Java we would write this same example using a static declaration.

.. activecode:: studentclass
    :language: java
    :sourcefile: Student.java

    public class Student {
            public static Integer numStudents = 0;

            private int id;
            private String name;

            public Student(Integer id, String name) {
            this.id = id;
            this.name = name;

            numStudents = numStudents + 1;
            }

            public static void main(String[] args) {
            for(Integer i = 0; i < 10; i++) {
                Student s = new Student(i,"Student"+i.toString());
            }
            System.out.println("The number of students: "+Student.numStudents.toString());
            }
        }


In this example notice that we create a static member variable by using
the static modifier on the variable declaration. Once a variable has
been declared static in Java it can be access from inside the class
without prefixing the name of the class as we had to do in Python.

Static Methods
--------------

We have already discussed the most common static method of all,
``main``. However in our Fraction class we also implemented a method to
calculate the greatest common divisor for two fractions (``gdc``). There
is no reason for this method to be a member method since it takes two
``Integer`` values as its parameters. Therefore we declare the method to
be a static method of the class. Furthermore since we are only going to
use this ``gcd`` method for our own purposes we can make it private.

::

    private static Integer gcd(Integer m, Integer n) {
        while (m % n != 0) {
            Integer oldm = m;
            Integer oldn = n;
            m = oldn;
            n = oldm%oldn;
        }
        return n;
    }

Full Implementation of the Fraction Class
-----------------------------------------

A final version of the Fraction class that exercises all of the features
we have discussed is as follows.

.. activecode:: fullfraction
    :language: java
    :sourcefile: Fraction.java

    import java.util.ArrayList;
    import java.util.Collections;

    public class Fraction extends Number implements Comparable<Fraction> {

        private Integer numerator;
        private Integer denominator;

        /** Creates a new instance of Fraction */
        public Fraction(Integer num, Integer den) {
            this.numerator = num;
            this.denominator = den;
        }

        public Fraction(Integer num) {
            this.numerator = num;
            this.denominator = 1;
        }

        public Fraction add(Fraction other) {
            Integer newNum = other.getDenominator()*this.numerator + this.denominator*other.getNumerator();
            Integer newDen = this.denominator * other.getDenominator();
            Integer common = gcd(newNum,newDen);
            return new Fraction(newNum/common, newDen/common );
        }

        public Fraction add(Integer other) {
            return add(new Fraction(other));
        }

        public Integer getNumerator() {
            return numerator;
        }

        public void setNumerator(Integer numerator) {
            this.numerator = numerator;
        }

        public Integer getDenominator() {
            return denominator;
        }

        public void setDenominator(Integer denominator) {
            this.denominator = denominator;
        }

        public String toString() {
            return numerator.toString() + "/" + denominator.toString();
        }

        public boolean equals(Fraction other) {
            Integer num1 = this.numerator * other.getDenominator();
            Integer num2 = this.denominator * other.getNumerator();
            if (num1 == num2)
                return true;
            else
                return false;
        }

        public double doubleValue() {
            return numerator.doubleValue() / denominator.doubleValue();
        }

        public float floatValue() {
            return numerator.floatValue() / denominator.floatValue();
        }

        public int intValue() {
            return numerator.intValue() / denominator.intValue();
        }

        public long longValue() {
            return numerator.longValue() / denominator.longValue();
        }

        public int compareTo(Fraction other) {
            Integer num1 = this.numerator * other.getDenominator();
            Integer num2 = this.denominator * other.getNumerator();
            return num1 - num2;
        }

        private static Integer gcd(Integer m, Integer n) {
            while (m % n != 0) {
                Integer oldm = m;
                Integer oldn = n;
                m = oldn;
                n = oldm%oldn;
            }
            return n;
        }

        public static void main(String[] args) {
            Fraction f1 = new Fraction(1,2);
            Fraction f2 = new Fraction(2,3);
            Fraction f3 = new Fraction(1,4);

            System.out.println(f1.add(1));
            System.out.println(f1.intValue());
            System.out.println(f1.doubleValue());

            ArrayList<Fraction> myFracs = new ArrayList<Fraction>();
            myFracs.add(f1);
            myFracs.add(f2);
            myFracs.add(f3);
            Collections.sort(myFracs);

            for(Fraction f : myFracs) {
                System.out.println(f);
            }
        }

    }

Common Mistakes
===============


    -  **Forgetting to declare your variables.**

       ::

           Histo.java:21: cannot find symbol
           symbol  : variable count
           location: class Histo
                   count = new ArrayList<Integer>(10);
                   ^

    -  **Not importing a class**:

       ::

            Histo.java:9: cannot find symbol
            symbol  : class Scanner
            location: class Histo
                    Scanner data = null;
                    ^

    -  **Forgetting to use the new keyword to create an object.** Here’s
       an example of the error message that occurs when you forget to
       use the new keyword. Notice that the message is pretty unhelpful.
       Java *thinks* you are trying to call the Method Scanner, but
       there are two problems. First Scanner is not really a method it
       is a constructor.:

       ::

            Histo.java:14: cannot find symbol
            symbol  : method Scanner(java.io.File)
            location: class Histo
                            data = Scanner(new File("test.dat"));
                                   ^

    -  **Forgetting a Semicolon**:

       ::

           Histo.java:19:
           ';' expected
                       System.exit(0);
                       ^

    -  Forgetting to declare the kind of object in a container.:

       ::

             Note: Histo.java uses unchecked or unsafe operations. Note:
             Recompile with -Xlint:unchecked for details.



Naming Conventions
==================

{sec:naming\_conventions}

Java has some very handy naming conventions.

-  Class names always start with an upper case letter. For example,
   ``Scanner``, ``System``, ``Hello``

-  Method names always start with a lower case letter, and use camelCase
   to represent multiword method names. for example ``nextInt()``

-  Instance variables of a class start with a lower case letter and use
   camelCase

-  Constants are in all upper case letters. for example ``Math.MAXINT``

Java Documentation Online
=========================

All Java class libraries are documented and available online. Here are
two good resources for you to use:

-  `JavaDoc <http://www.javadoconline.com>`_ The Javadoconline website
   provides a nice searchable interface. Search for a classname and you
   will get the documentation you are looking for.

-  `JavaAPI <http://knuth.luther.edu/Javadoc/docs/api/index.html>`_
   contains the same information but in a browsable format. If you don’t
   know the class name exactly this is a good way to see what is close.

In general the Javadoc page for any class contains information about:

-  Where this class falls in the class hierarchy. What classes are its
   parents and what classes are its decendents.

-  A summary and some examples of using the class.

-  A summary listing of instance variables

-  A summary listing of Constructors

-  A summary listing of Methods

-  Detailed documentation on constructors and methods.

Typically the Javadoc pages are constructed from the source code where
the class is implemented. This encourages Java programmers to do a good
job of documenting their code, while providing a user friendly way to
read the documentation without looking at the code directly.

Colophon
========

I started writing this article in 2006 using Python’s restructured text.
In 2007 I switched to markdown since everything else I was writing used
markdown. In particular I switched to the variant of markdown used by
the excellent `pandoc <http://johnmacfarlane.net/pandoc/>`_ program.
Pandoc does an excellent job of converting markdown to html, latex, pdf,
and other formats. The markdown source for this article is available
`here <http://www.cs.luther.edu/~bmiller/JavaForPython.md>`_. Finally
the document became so big that I used ``pandoc`` to convert it to latex
for preparing the final version. I used The ``htlatex`` program to
generate html for the online version of this document.

Shameless Plug
==============

If you got this far, I would also like to use this space as a shameless
plug for two books. At Luther college we use Python for CS1 and CS2.
When we decided to make the switch to introducing CS with Python we
wanted to provide our students with two semesters of Python. The reason
is that after one semester students are just getting comfortable with
the language and it does not make sense to push them into a brand new
language just as they are getting some comfort. The second reason is
that Python really is a great language for teaching data structures. The
language makes the algorithms evident by clearing away all of the
syntactic clutter. So we (David Ranum and I) wrote a CS2 book called
`Problem Solving with Algorithms and Data Structures using
Python <http://www.amazon.com/Problem-Solving-Algorithms-Structures-Python/dp/1590280539>`_.
After we finished the CS2 book we decided to write our own CS1 book as
well. This book will be available for Fall 2008 classes from Jones and
Bartlett publishers. The tentative title is *Python in Context*. Please
feel free to contact me for more information.


.. |image| IMAGE:: somerights20.png
