More about Functions: Closures and Scopes
=========================================


Before you read this section answer the following questions.  If you are new to Javascript or programming in general the answers may suprise you.


.. mchoice:: close_pre_1

    What will the following print?

    .. code-block:: javascript
    
        var v = 1;
        function fun1() {
            console.log(v);
        }

        function fun2() {
            var v = 2;
            fun1();
        };

        fun2();

    - 1

      + Correct

    - 2

      - No, the value of v is obtained from the Closure

    - 3

      - Now I think you're just messin with me.

    - It will print an error

      - The code will run without error

      
.. mchoice:: close_pre_2

    What values dos the call to inner1 print out?

    .. code-block:: javascript

        var z = 2;
        function container() {
            let x = 3

            function inner1() {
                console.log(x, y, z)
            }

            let y = 4
            z = 9

            function inner2() {
                z = x + y
                console.log(x,y,z)
            }

            return {inner1, inner2}
        }

        let { inner1, inner2 } = container()
        inner2()
        inner1()      

    - 3 4 2

      - No, the closure captures a reference to z, so when inner2 is called it reassigns z the value of 7

    - 3 4 7

      + Correct!

    - 3 4 9

      - No, close but since inner2 is called first it reassigns z the value of 7

    - An error occurs

      - This is all legal!


.. mchoice:: close_pre_3

    Consider the following code.  What is printed out by the final call to double?

    .. code-block:: javascript

        function parent() {
            let a = 10;
            
            let double = function() {
            a = a+a;
            console.log(a);
            };
            
            let square = function() {
            a = a*a;
            console.log(a);
            }
            
            return { double, square }
        }
        let { double, square } = parent();
        double();
        square();
        double();

    - 20

      - No, the change made to the value of a is 'permanent' because a is in the closure

    - 400

      - No, this is the value after square is called for the first time.

    - 10

      - No.  The value definitely changes over time.

    - 800

      + Very Good!  You must really understand closures, and you can do math!


Chances are that if you are new to this, the answers to the questions seemed a bit funny to you.  So lets start
at the beginning and try to make sense of what is happening.

Lets start by defining two very important terms:  scope and closure.

**Scope** In Javascript programming the scope of a variable (or the binding of a name to an object) is the region of a computer program where the binding is valid.  Hence *global* variables are available everywhere in the program.  In javascript global variables are owned by the window.  Javascript has both **function scope** as well as **block scope**  To understand the difference consider the following example:

.. activecode:: js_scope_1
    :language: javascript

    
    function fact(n) {
        let result = 1;
        for(let i = n; i > 0; i--) {
            let y = 'block';
            var z = 'function'
            result = result * i;
        }
        writeln(x)
        //writeln(y, i) this is an error as y and i are no longer in scope.
        writeln(z)
        return result;
    }

    var x = 'global'
    writeln(fact(10))


Variable ``x`` has global scope and is available to read and write from anywhere in the program.  When you consider the running in the browser it is available to read and write from any javascript files or script tags that are included in the page.  The ``result`` variable has local scope of the function hence you are only allowed to read and write `result` in the body of the function. The variables ``i`` and ``y`` have block scope and are only available to read and write in the body of the for loop.  The block is defined by the opening and closing curly braces for the loop.  The variable ``z`` has function level scope because we declared the variable using ``var`` rather than let.  As you can see in this example scopes come and go as the function is *executed*  The block scope of the for loop only has a lifetime as long as it takes to execute the for loop.  Similarly a function scope only exists while the function is called.

**Closure**  sometimes also called a lexical closure is similar to scope but a closure has more to do with the structure of the source code than when a function is called.  The really important distinction to keep in mind is that a closure is created when a function is **defined** rather than when it is called.  In that way you can think of a closure as creating an environment in which to call the function.  This may seem like a real subtle difference but when you harness this difference you can an incredible amount of power.  Lets look at a real simple example.

.. activecode:: js_closure_1
    :language: javascript

    function counter_maker() {
        let x = 0;

        let ctr = function() {
            x = x + 1;
            return x;
        }

        return ctr;
    }

    let counter1 = counter_maker()
    writeln(counter1())
    let counter2 = counter_maker()
    writeln(counter2())

    for(let i = 0; i < 5; i++) {
        writeln(counter1())
        writeln(counter2())
    }

The closure for ``counter_maker`` is created when this javascript is initially loaded.  However for the functions referred to as counter1 and counter2 these closures are not created until line 4 is executed.  Hence each function gets an environment in which ``x`` is a variable that has been initialized to 0.  From a scope perspective counter1 first looks for x in its local scope.  when x is not found it searches outward into the next containing closure and it finds `x`.

Now we can also explain the code from the first question in this section.

.. activecode:: js_closure_2
    :language: javascript

    var v = 1;
    function fun1() {
        writeln(v);
    }

    function fun2() {
        var v = 2;
        fun1();
    };

    fun2();

If you were a judge in a court, the example above would be very compelling evidence for the existence of closures versus scopes.  When ``fun2``  is called it creates a local variable ``v`` in its function scope, then calls ``f1`` in that scope.  Now if fun1 looked in the *enclosing scope* for v it would definitely find the v that is in the function scope of fun2.  But it doesn't it prints out 1 which demonstrates that it is finding it in the closure that is created when ``fun1`` is defined.

As web programmers we make use of closures all the time in order to get references to objects for use in callbacks.


.. activecode:: js_closure_button
    :language: html

    <div id="buttondiv"></div>
    <script type='text/javascript'>
    "use strict";
    function buttonMaker(parent) {
        let counter = 0
        let bp = document.getElementById(parent)
        let b = document.createElement('button')
        b.innerHTML = counter
        b.onclick = function() {
            counter = counter + 1;
            b.innerHTML = counter;
        }
        bp.appendChild(b)
    }

    buttonMaker("buttondiv")
    </script>

Nice right?  When Javascript executes the statement ``b.onclick = function() {...`` a closure is created that not only sets up a counter variable but also "remembers" the value of ``b`` and ``bp``!  Strictly speaking you would not have to use ``b.innerHTML`` inside the callback you could use ``this`` to refer to the newly created button.  But b makes it a LOT clearer and removes any doubt about what you are referring to.

It gets better when you add a second and third call ``buttonMaker("buttondiv")``  inside the script.  Now you have three buttons each with their own counter!  Not only that but the closure preserves for the callback function which button it is supposed to be working with!

Modify the example above so that it has three buttons, make sure each button has a unique id the first button you create should have an id of ``button_1`` the second should be ``button_2`` etc.  But now in addition to changing the innerHTML of the button itself also add a line at the end of the div that shows the id of the button that was pressed. You should keep appending these lines so you have a record of which button was pressed and in what order.
