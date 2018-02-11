Accessing and Modifying the DOM
===============================

Searching for nodes in the tree
-------------------------------

In the last section we looked at ``querySelector`` which is a nice generalization of several more specific methods of the document object.  These methods are as follows:

* getElementsByTagName -- get all elements with this tag
* getElementsByName -- get all elements that match the name attribute 
* getElementsByClass -- get all elements that have the given class
* getElementbyId -- get **the element** with the given id

All of the methods except for ``getElementById`` return an and ``HTMLCollection``, this acts a lot like an Array but is not 100% the same.  For one thing an HTMLCollection is guaranteed to only contain ``Element`` objects.  Since  **ids** are supposed to be unique the ``getElementById`` method only returns a single Element. Which one of the elements it returns is not defined, it might be the first, it might be the last you have no idea.  The best thing to do is fix the HTML so you no longer have duplicate ids.

Lets try using some of these in an example on this page.  Lets find the innerHTML of all of the ``p`` tags we can find on this page.

.. activecode:: getelements_ex
    :language: javascript

    "use strict"
    var myArr = document.getElementsByTagName("p")

    for (var p of myArr) {
        writeln(p.toString() + p.innerHTML)
    }


Its worth expanding on the Element object a bit.  There are a lot of different methods and attributes of the element object that we will use.  For now lets just list a few of them.  (If you want to see the comprehensive list you can find it at `w3schools <https://www.w3schools.com/jsref/dom_obj_all.asp>`_.

* children
* firstChild
* lastChild
* className
* classList
* id
* innerHTML
* textContent
* nextSibling
* nodeName
* tagName
* parentElement
* style
* toString

.. raw:: HTML

    <ul id="mysteryid"></ul>

**Check your Understanding**

.. activecode:: find_mystery
    :language: javascript

    Somewhere on this page there is a tag with the id of "mysteryid" write some javascript to print out the kind of tag.
    ~~~~
    // Your code here

.. activecode:: count_lis
    :language: javascript

    How many ``li`` tags are on this page?
    ~~~~
    // your code here


.. activecode:: count_sections
    :language: javascript

    Print the tags of all of the elements that have the class ``container``
    ~~~~
    // your code here


.. cssclass:: specialclass

Creating and Grafting new Nodes into the tree
---------------------------------------------

* createElement
* createAttribute
* appendChild
* insertBefore


**Check your Understanding**

.. activecode:: addh2
    :language: javascript

    There is an element on this page with the class "specialclass" find this element then add an h2 tag below it with the text "Hello World".
    ~~~~
    // your code here
    

