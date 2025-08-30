

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: 1. we can get any indivisual html element in javascript file by using id.
     2. we can select all elements with same class with etElementsByClassName method.
     3. we can select css selector with it.
     4. we can select with same css selectors which matches.

2. How do you **create and insert a new element into the DOM**?
ans: we can create a new div with document.createElement() method.
     then we can create with div.innerHTML = `div section code inside`;
     then we can insert this to parent div using .appendChild() method
3. What is **Event Bubbling** and how does it work?
ans: where event starts from the targeted element and bubble back to its parent elements
4. What is **Event Delegation** in JavaScript? Why is it useful?
ans: we can use child elements using parent element using event deligation.it helps to manupulate dom dinamically
5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: 1.preventDefault() stops any button from loading the page.
     2. stopPropagation() stops the dom tree from bubbling up.

