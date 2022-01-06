This is my coding report of Code Wars.

Created At: 7th Jan 2022(Fri)

Challenge: Sorted? yes? no? how?(7kyu)

URL:https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

Instructions:

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

How to solve the problem:

At first, I thought the problem was difficult to solve.
But, when I came up with solving, it was not.

So, let's get started

//TODO: One 
First, we should create array's copy.
ex. let copyArray = [...array];

//TODO: Two
Second, we should prepare ascending array and descending array.
For the purpose, we can use sort method.

ex. 
let ascendingArray = copyArray.sort((a,b) => a -b);
let descendingArray = copyArray.sort((a,b) => b - a);

//TODO: Three
Afetr we can pass the TODO:two, we just compare with TODO:two's arrays to original arrays.But we should be careful.
In JavaScript world, we have not to compare arrays.

So, what should we do?
There are three main method in front of us.(https://www.w3docs.com/snippets/javascript/how-to-compare-two-javascrpt-arrays.html)

But, I prefer toString method.

ex:
copyArrAscending.toString() === array.toString();
copyArrDecending.toString() === array.toString();

All we have to do now is just combine it.
I think it is not difficult so please try yourself.

But, you don't know answer,please check index.js file.
In index.js file, there is my solution.

Thank you for reading.
And, happy coding!!!