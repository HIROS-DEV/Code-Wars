Created At: 30th Dec 2021(Thu)

Challenge: Form The Minimum(7kyu)

URL:https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

Instructions:

Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


How to solve the problem:

//TODO: One 
Of course, we have to remove the duplicate numbers in array. To achieve this, there are several methods in Javascript world. But I think new Set method is the most easiest way to remove the duplicate numbers. So, we should use it. 

new Set(values)

//TODO: Two

But, there is one problem of using new Set method. 
If we use new Set method, we get values of object. 
And, of course, we don't want to it. 
We want to return array values. 
So, we have to change the values from object to array.

[...new Set(values)]

//TODO: Three
The values in array do not sort in order.
So, we should use sort method, and we should sort in order.

[...new Set(values)].sort()

//TODO: Four
According to instructions, we have to return Numbers.
But, if we realize it, we should follow two steps.
First, we use join method and change from array to string. And finally, we use Number method and return number.
If we push attempt button, we can pass the test!!!

That's it!!!

If you interested in, please check index.js file.
Thank you for reading.
And, happy coding!!!