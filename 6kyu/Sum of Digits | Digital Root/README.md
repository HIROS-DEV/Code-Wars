Created At: 29th Dec 2021(Tue)

Challenge: 
Sum of Digits / Digital Root(6kyu)

URL:https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

Instructions:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1

How to solve the problem:

The problem is advanced of Summin a number's digits(7kyu).
So, generally, solution is almost together.
I don't want to waste precious time. So, I decided to write here only diffrent from Summin a number's digits(7kyu).

//TODO: One
According to instructions, if we get the two digits number, we have to sum of them(For examle, we are given 10, we have to accumulate 1 + 0). In other words, we have to accumulate the given number, if the given number is larger than 9. So, we should add while loop function on Summin a number's digits(7kyu).

That' it.

If you interested in my solution, please check index.js file.

Thank you for reading. and happy coding!!