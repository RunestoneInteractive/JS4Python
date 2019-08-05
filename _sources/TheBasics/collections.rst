Collections
===========

Now that we have looked at the primitive variables and programming constructs of JavaScript it is time to move on to the JavaScript equivalents of **lists** and **dictionaries**.

As a preliminary to this section it is important for you to understand that everything in JavaScript is an object.  and that all objects are capable of acting like dictionaries.  In JavaScript you can add an attribute to any object.  ``myObj.someattribute = somevalue``

Lists/Arrays
------------

One of the fundamental data types in Python is the list.  Although JavaScript does not have lists, JavaScript does have **Arrays** that can act a lot like lists.

Some of the fundamental list operations we will look at in this section.

* append, pop
* index
* slice
* in / not in
* Creating lists of iterables

Python has many ways to add and remove items from lists.  Lets look at the most common ones and their JavaScript equivalents.

.. csv-table:: listoperations
   :header: "Python", "JavaScript", "Notes"

   "l.append(newitem)", "l.push(newitem)", "Push adds to the end"
   "l.pop()", "l.pop()", "both pop off the end"
   "l.pop(0)", "l.shift()", "JavaScript uses shift to remove from the front"
   "l.insert(0,newitem)", "l.unshift(newitem)", "Unshift adds at the start"
   "l.insert(idx, newitem)", "l.splice(idx, 0, newitem)", "splice inserts at index deleting 0 items first"
   "del l[idx]", "l.splice(idx, 1)", "splice can also just delete the item at idx"
   "l1 + l2", "l1.concat(l2)", "You cannot add two arrays together using + in JavaScript "

The last one definitely requires a bit of explanation.  The + operator is not defined for JavaScript arrays but it also won't give an error if you try it.  Instead JavaScript silently (and evilly) converts the two arrays to strings and concatenates the strings!  So, ``[1,2] + [3,4] --> '1, 23, 4'``  Yikes!

Both Python and JavaScript support indexing, but negative indexing is not supported by JavaScript.  You will just get 'undefined' as a result.

Slicing is supported in JavaScript but only through the ``slice`` method.

.. csv-table:: listoperations1
   :header: "Python", "JavaScript", "Notes"

   "l[2:4]", "l.slice(2,4)", "both slices start at 2 and end at 3 inclusive"
   "l[2:]", "l.slice(2)", "both slice from 2 to the end"
   "l[:4]", "l.slice(0,4)", "both slice from the beginning through 3 inclusive"
   "l[-5:-1]", "l.slice(-5,-1)", "both slice from 5 from the end to 1 from the end inclusive"

Unlike indexing, the ``slice`` method will accept negative numbers as offsets from the end of the list as both the starting and ending values.

Checking for membership
^^^^^^^^^^^^^^^^^^^^^^^

In Python we often write ``if something in mylist:``  In JavaScript we can write this a couple of ways:

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

Hold on, what is going on with that last example?  Using "in" to test for membership is very tempting for Python programmers, and in fact in the first example looks like it works.  But that example is misleading! The in operator only works on the keys of an object.  The items in an array are not the same as the keys of a JavaScript object.  But, since Arrays are objects it does not throw an error, it just works in a confusing way.  In the example above it is saying that the object *mylist* does not have a key called "foo".  What are the keys of an Array?

.. activecode:: arraykeys
    :language: javascript

    let mylist = [1, 2, 3, "foo", "bar"];
    for (let k of Object.keys(mylist)) {
        writeln(k)
    }

If you run the example you can see that for an Array, the keys are the index values of the items in the Array.  Don't use ``in`` with Arrays.

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
0. Next we open the data file called ‘test.dat’. Third, we have a loop
that reads each line of the file. As we read each line we convert it to
an integer and increment the counter at the position in the list
indicated by the number on the line we just read. Finally we iterate
over each element in the list printing out both the position in the list
and the total value stored in that position.

To write the JavaScript version of this program we will have to introduce
several new JavaScript concepts. First, you will see the JavaScript equivalent of a
list, called an ``ArrayList.`` Next you will see three different kinds
of loops used in JavaScript. Two of the loops we will use are going to be very
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

Here is the JavaScript code needed to write the exact same program:

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



Now, lets look at what is happening in the JavaScript source. First we declare a variable to hold the counts -- we are making the assumption that all of the numbers we want to count are between 0 and 9, so we can give our array an initial size, and initialize it with 0 values using the fill method.

Next lines 6 -- 9 iterate over the values in the array (``for...of``) created by the split method.  As with Python splitting the string results in an array of strings.  So to update our count we need to convert the string to an integer.  We use the *parseInt* function for this.  Declaring *idx* as a ``const` inside the ``for`` loop ensures that any attempt to change *idx* will cause an error, as well as limiting the scope of *idx* to the loop.

Finally lines 11 -- 13 print the results using by iterating over the index values of the array (``for...in``) and printing out the *count8 value for each.

.. admonition:: Advanced Topic

    Note, if you know you want to convert the elements of the list to integers and you may use the list several times, a common JavaScript idiom for this would be to use the map function as follows:

    .. code-block:: javascript

        data = data.split(',').map(function(t) { return parseInt(t) })

    This one liner splits the string, and then applies the *parseInt* function to every element of the array, returning an array of transformed objects.  The ``map`` function is a very powerful functional programming tool and worth getting to know in detail.  In data science the ``map reduce`` programming paradigm is widely used on very large datasets.  For example, suppose your task was to add all of the numbers represented by the data string in the example above.  You can do it very simply as follows:

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
to key-value pairs, JavaScript also provides us a similar mechanism.  In fact all objects in JavaScript

.. activecode:: jsdict
    :language: javascript

    let x = {}
    x['foo'] = 'bar'
    x[2] = 99
    x.answer = 42
    writeln(x)
    writeln(x['answer'])

One important difference between Python dictionaries and JavaScript is that you can use either the dotted notation or the index operator to add and retrieve values stored for a key.  Of course if your key has a space or dash in the middle of it you are limited to the index notation, but for many keys using the dotted notation is very convenient and very readable.

Some common operations from Python that you will want to know about include:

* **Get all the keys**  In Python you do this as ``myDict.keys()`` in JavaScript it requires a bit more effort:

.. activecode:: jsdictkeys
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    const keys = Object.keys(myDict)
    writeln(keys)

* **Get all of the values** In Python this is ``myDict.values().``  But in JavaScript it takes a lot more work.  Using a ``for`` loop you can do it like this:

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

This is pretty interesting as it introduces a new syntax: ``key => myDict[key]`` this is a bit like a Python lambda expression.  In that it does essentially create a very simple function expression.  These are called **arrow functions**  or sometimes fat arrow functions in JavaScript.  These are pretty new additions to the JavaScript language, so you might also see an equivalent one liner that looks like this:

::
    const vals = Object.keys(myDict).map(function(key) {return myDict[key]})

The arrow is much cleaner and simpler to read once you have seen and understand them.

* **Get all items** there really is no use for this in JavaScript as the most common use case for ``myDict.items()`` in Python is as a way to iterate over the key-value pairs of a dictionary.  Also as a side note, JavaScript does not have a tuple data type.  But it is just as easy to do the same iteration in JavaScript.

.. activecode:: jsdictvals2
    :language: javascript

    const myDict = {foo: "bar", baz: 22, 33: 'hello'};
    for (const key of Object.keys(myDict)) {
        val = myDict[key]
        // do something with key and val
    }


* Get a value for a key if it exists, otherwise get a default.  In Python we commonly would use the pattern ``myDict.get(key,"default")`` where ``get`` returns the value for *key* from *myDict8 or "default" if the *key* does not exist.  In JavaScript the idiom for this is:

.. code-block:: javascript

    myDict['nobodyhome'] || 'default'

This makes use of the fact that if the key 'nobodyhome' is not found in *myDict* it evaluates to ``undefined`` which is falsey which causes the next thing in the boolean or statement to be evaluated, causing the full expression to evaluate to 'default'.

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


Now lets look at how to do it in modern JavaScript.

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

