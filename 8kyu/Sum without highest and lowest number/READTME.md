This is my coding report of Code Wars.

Created At: 25th Dec 2021(Sat)

Challenge: Sum without highest and lowest number(8kyu)

URL:https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

Instructions:

Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.



//TODO: 
At first, We should sort the given array number in ascending order. (We can use sort method.)

//TODO: 
Secondary, we should retrive number of array except the highest and the lowest number. (I think there are many methods. But, in my solution, I used slice method.)

//TODO: 
Thirdly, we should sum all the numbers of the array except the highest and the lowest element. (If we cleared the second step, it is not difficult. We can use reduce method.)

//TODO:
If array is empty, null or None, or if only 1 Element exists, return 0. (We can use simple if statement or ternary operator)

That's all!!!

If you interested in my solution, please check index.js file.

Thank you for reading.
And, happy coding!!!