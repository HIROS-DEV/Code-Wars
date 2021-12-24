This is my coding report of Code Wars.

Created At: 24th Dec 2021(Fri)

Challenge: Find the middle element(7kyu)

URL:https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

Instructions:

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

How to solve the problem:

//TODO: One 
We should sort the given array and get the middle number.

//TODO: Two
The sort() method have to effect original array. So, I used the Spread Operator and copied array.

//TODO: Three
I tried to compare todo one's middle number with original array.
(If you interested in, please check index.js file.)