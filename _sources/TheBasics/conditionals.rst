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
rather than indentation. In Javascript, the parenthesis around the condition
are required because ``if`` is technically a function that evaluates to ``True``
or ``False``.

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
