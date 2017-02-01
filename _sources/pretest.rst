Javascript PreTest
==================

The following Quiz is for me to assess what you already know about Javascript.  It will not count towards you final grade, nor will I look down on you if you don't know any of it.  The point is to not waste time covering things that people already know.  It will also provide  a basis at the end to measure how much you have learned!

.. qnum::
    :prefix: pretest-
    :start: 1

.. timed:: javascript_pretest
    :timelimit: 30

    .. mchoice:: pt_1
        :answer_a: &lt;javascript&gt;
        :answer_b: &lt;js&gt;
        :answer_c: &lt;scripting&gt;
        :answer_d: &lt;script&gt;
        :correct: d

        Inside which HTML element do we put the JavaScript?

    .. mchoice:: pt_2
        :answer_a: document.getElementById("demo").innerHTML = "Hello World!";
        :answer_b: #demo.innerHTML = "Hello World!";
        :answer_c: document.getElementByName("p").innerHTML = "Hello World!";
        :answer_d: document.getElement("p").innerHTML = "Hello World!";
        :correct: a

        What is the correct JavaScript syntax to change the content of the HTML element below?

        ::

            <p id="demo">This is a demonstration.</p>


    .. mchoice:: pt_3
        :answer_a: True
        :answer_b: False
        :correct: b

        The external JavaScript file must contain the ``<script>`` tag.

    .. mchoice:: pt_4
        :answer_a: function:myFunction()
        :answer_b: function myFunction()
        :answer_c: function = myFunction()
        :correct: b

        How do you create a function in JavaScript?


    .. mchoice:: pt_5
        :answer_a: call function myFunction()
        :answer_b: myFunction()
        :answer_c: call myFunction()
        :correct: b

        How do you call a function named "myFunction"?

    .. mchoice:: pt_6
        :answer_a: if (i == 5)
        :answer_b: if i = 5 then
        :answer_c: if i = 5:
        :answer_d: if i == 5 then
        :correct: a

        How to write an IF statement in JavaScript?


    .. mchoice:: pt_7
        :answer_a: while i = 1 to 10
        :answer_b: while (i &lt;= 10; i++)
        :answer_c: while (i &lt;= 10)
        :correct: c

        How does a WHILE loop start?

    .. mchoice:: pt_8
        :answer_a: for (i = 0; i &lt;= 5)
        :answer_b: for (i = 0; i &lt;= 5; i++)
        :answer_c: for i = 1 to 5
        :answer_d: for (i &lt;= 5; i++)
        :correct: b

        How does a FOR loop start?


    .. mchoice:: pt_9
        :answer_a: var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")
        :answer_b: var colors = (1:"red", 2:"green", 3:"blue")
        :answer_c: var colors = ["red", "green", "blue"]
        :answer_d: var colors = "red", "green", "blue"
        :correct: c

        What is the correct way to write a JavaScript array?



    .. mchoice:: pt_10
        :answer_a: True
        :answer_b: False
        :correct: b

        JavaScript is the same as Java.


    .. mchoice:: pt_11
        :answer_a: onchange
        :answer_b: onmouseover
        :answer_c: onclick
        :answer_d: onmouseclick
        :correct: c

        Which event occurs when the user clicks on an HTML element?


    .. mchoice:: pt_12
        :answer_a: v carName;
        :answer_b: var carName;
        :answer_c: variable carName;
        :correct: b

        How do you declare a JavaScript variable?

    .. mchoice:: pt_13
        :answer_a: Its an error
        :answer_b: 'a', 'b', 'c'  - each on their own line
        :answer_c: 1, 2, 3  - each on their own line
        :answer_d: 0, 1, 2  - each on their own line
        :correct: b

        What is the output of the following?

        ::

            l = ['a', 'b', 'c']
            for (var i of l) {
                console.log(i)
            }

    .. mchoice:: pt_14
        :answer_a: Its an error
        :answer_b: 'a', 'b', 'c'  - each on their own line
        :answer_c: 1, 2, 3  - each on their own line
        :answer_d: 0, 1, 2  - each on their own line
        :correct: d

        What is the output of the following?

        ::

            for (var i in l) {
                console.log(i)
            }

    .. activecode:: pt_15
        :language: javascript

        Write a function that takes a single number as a parameter and returns true if the number is even.  Otherwise it should return false.
        ~~~~
        // Your Code Here
