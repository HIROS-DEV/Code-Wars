This is my coding report of Code Wars.

Created At: 29th Dec 2021(Wed)

Challenge: Anagram Detection(7kyu)

URL:https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

Instructions:

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

How to solve the problem:

//TODO: One 
In instructions, there is note that anagrams are case insensitive. So, at first, we should change to uppercase (or lowercase) in a given string.

//TODO: Two
All given strings are type of string. So, we should change to array. We can use split method.

//TODO: Three
We have two uppercased arrays now. 
Next, we should use sort method. 
If we get though from TODO One to TODO three, we will get two sorted uppercased arrays. 

//TODO: Four
Last step is very easy.
If two arrays are anagrams, two sorted uppercased arrays match exactly. So, we should just compare function. If function is returned true, they are anagram. If function is returned false, they are not.
(We should not forget to return from array to string!!)

(If you interested in, please check index.js file.)

Thank you for reading.
And, happy coding!!!