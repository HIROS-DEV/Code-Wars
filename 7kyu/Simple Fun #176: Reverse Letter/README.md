This is my coding report of Code Wars.

Created At: 28th Dec 2021(Tue)

Challenge: Simple Fun #176: Reverse Letter

URL:https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

Task:

Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string

How to solve the problem:

//TODO: One 
According to instructions, we can return only lowercase latin letters. So, at first, we should use match function, and remove digits and symbols from the given string. Of course, match method can use with Regex.

//TODO: Two
If we can TODO One, we will get only only lowercase latin letters string. So, I think we just can use simple reverse method.

//TODO: Three
After Todo Two, we will get array. But according to instructions, we have to return string.
So, we should use join method and return string.

That' all.

If you interested in my solution, please check index.js file.

Thank you for reading. and happy coding!!