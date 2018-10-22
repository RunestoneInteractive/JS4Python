Loops and Iteration
===================

You have already seen a couple of examples of iteration and looping in
JavaScript. So this section will just serve as a reference for the differences
in syntax.

Definite Loop
-------------

In Python the easiest way to write a definite loop is using the for loop
in conjunction with the range function. For example:

::

    for i in range(10):
       print(i)

In JavaScript we would write this as:

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

The JavaScript for loop is really analogous to the last option giving you
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

In JavaScript we would write this as:

::

    for (let i = 100; i >= 0; i -= 5)
        writeln(i);

In Python the ``for`` loop can also iterate over any sequence such as a
list, a string, or a tuple. JavaScript also provides a variation of its ``for``
loop that provides the same functionality in its so called ``for each``
loop.

In Python we can iterate over a list as follows:

::

    l = [1, 1, 2, 3, 5, 8, 13, 21]
    for fib in l:
       print(fib)

In JavaScript we can iterate over an Array of integers too:

.. activecode:: arrayiter
    :language: javascript

    let l = [1, 2, 1, 2, 3]
    for (let i of l) {
        writeln(i);
    }

The **for of** construct is new in JavaScript, you will see lots more code examples written as a **for in**

.. activecode:: arrayiter2
    :language: javascript

    let l = [1, 2, 1, 2, 3]
    for(let i in l) {
        writeln(l[i]);
    }

To be clear in the example above, the loop variable ``i`` is an index variable that you use to index into the original array.

To iterate over the characters in a string in JavaScript do the following:

::

    String t = "Hello World";
    for (let c of t) {
        writeln(c);
    }


To iterate over the elements in an array in JavaScript:

::

    var data = [3, 7, 2, 9, 1, 11];
    var sum = 0;
    data.forEach(function(d){
        sum += d;
    });
    writeln(sum);


Indefinite Loops
----------------

Both Python and JavaScript support the ``while`` loop. Recall that in Python the
``while`` loop is written as:

::

    while condition:
       statement1
       statement2
       ...

In JavaScript we add parenthesis and curly braces to get:

::

    while (condition) {
        statement1
        statement2
        ...
    }

JavaScript adds an additional, if seldom used variation of the ``while`` loop
called the ``do while`` loop. The ``do while`` loop is very similar to ``while`` except that the
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

