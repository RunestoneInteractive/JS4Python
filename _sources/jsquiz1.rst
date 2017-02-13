Javascript PreTest
==================

The following Quiz is for me to assess what you already know about Javascript.  It will not count towards you final grade, nor will I look down on you if you don't know any of it.  The point is to not waste time covering things that people already know.  It will also provide  a basis at the end to measure how much you have learned!

.. qnum::
    :prefix: pretest-
    :start: 1

.. timed:: javascript_quiz1
    :timelimit: 30


    .. mchoice:: jsq1_1
        :answer_a: document.getElementById("demo").innerHTML = "Hello World!";
        :answer_b: #demo.innerHTML = "Hello World!";
        :answer_c: document.getElementByName("p").innerHTML = "Hello World!";
        :answer_d: document.getElement("p").innerHTML = "Hello World!";
        :correct: a

        What is the correct JavaScript syntax to change the content of the HTML element below?

        ::

            <p id="demo">This is a demonstration.</p>


    .. mchoice:: jsq1_2
        :answer_a: const carName = 10;
        :answer_b: var carName;
        :answer_c: let carName;
        :answer_d: carName = 10;
        :correct: c

        How do you declare a JavaScript variable with block scope?


    .. mchoice:: jsq1_3
        :answer_a: ReferenceError: foo is not defeined
        :answer_b: ReferenceError: y is not defined
        :answer_c: NaN then 11
        :answer_d: 110 then 11

        What is the output of the following?

        ::

            "use strict"
            var y = 100
            foo()

            function foo() {
                let x = 10 + y;
                var y
                y = 1
                let z = 10 + y
                console.log(x)
                console.log(z)
            }

    .. mchoice:: jsq1_4
        :answer_a: 6
        :answer_b: 5
        :answer_c: 3
        :answer_d: ReferenceError: i is not defined
        :correct: d

        What is the output of the following code snippet?

        ::

            var sum = 0;
            for(let i = 0; i < 3; i++) {
                sum += i
            }
            let last = sum + i
            console.log(last)

    .. mchoice:: jsq1_5
        :answer_a: 6
        :answer_b: 5
        :answer_c: 3
        :answer_d: ReferenceError: i is not defined
        :correct: d

        ::

            var sum = 0;
            for(var i = 0; i < 10; i++) {
                sum += i
            }
            let last = sum + i

    .. mchoice:: jsq1_6
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

    .. mchoice:: jsq1_7
        :answer_a: Its an error
        :answer_b: 'a', 'b', 'c'  - each on their own line
        :answer_c: 1, 2, 3  - each on their own line
        :answer_d: 0, 1, 2  - each on their own line
        :correct: d

        What is the output of the following?

        ::
            l = ['a', 'b', 'c']
            for (var i in l) {
                console.log(i)
            }

    .. mchoice:: jsq1_8
        :answer_a: Its an error
        :answer_b: 'a', 'b', 'c'  - each on their own line
        :answer_c: 1, 2, 3  - each on their own line
        :answer_d: 0, 1, 2  - each on their own line
        :correct: b

        What is the output of the following?

        ::
            l = ['a', 'b', 'c']
            for (let i=0; i < l.length; i++) {
                console.log(l[i])
            }

    .. mchoice:: jsq1_9
        :answer_a: Nothing
        :answer_b: 0
        :answer_c: 1
        :answer_d: some kind of error
        :correct: b

        what is the output of the following snippet of code?

        ::

            let i = 0;
            let sum = 0;
            do {
                sum = sum + i
                console.log(sum)
                i -= 1
            } while( i > 0 )


    .. activecode:: jsq1_10
        :language: javascript

        Write a class called Rectangle that has a constructor and a method called area.  The constructor should take two arguments length first then width.  The area function should return the area of the rectangle.
        ~~~~
        // Your Code Here

        var myRect = new Rectangle(5,10)
        writeln(myRect.area())
        myRect.length = 10
        writeln(myRect.area())
