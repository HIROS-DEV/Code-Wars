Created At: 30th Dec 2021(Fri)

Challenge: Maximum Length Difference(7kyu)

URL:https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

Instructions:

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

How to solve the problem:

//TODO: One 
At first, we should find min and max string of length in array. But, we have to caution. According to instructions, we have to find max(abs(length(x) − length(y))). So, we need four values(a1Smallest, a1Longest, a2Smallest, a2Longest)

const a1Smallest = Math.min(...a1.map(x => x.length));
const a1Longest = Math.max(...a1.map(x => x.length));
const a2Smallest = Math.min(...a2.map(x => x.length));
const a2Longest = Math.max(...a2.map(x => x.length));

//TODO: Two
We have to accumulate max(abs(length(x) − length(y))).
There are two patterns.

const answerOne = Math.abs(a1Longest - a2Smallest);
const answerTwo = Math.abs(a2Longest - a1Smallest);


//TODO: Three
If answerOne is larger than answerTwo, we should return answerOne. If answerTwo is larger than answerOne, we should return answerTwo. But, we have to caution again. According to instructions, if a1 and/or a2 are empty, we have to return -1. So, we should add conditional branch.

if(a1.length === 0 || a2.length === 0) {
    return -1;
}
    
return answerOne > answerTwo ? answerOne : answerTwo;

That's it.
If you interested in my solution, please free to read index.js file.

Thank you for reading.
And, happy coding!!