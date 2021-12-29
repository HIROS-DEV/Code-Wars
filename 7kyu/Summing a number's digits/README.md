Created At: 29th Dec 2021(Tue)

Challenge: Summing a number's digits

URL:https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

Instructions:

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

How to solve the problem:

//TODO: One 
According to instructions, we have to return the absolute value. So, I think it is easy for us to change the absolute value firstly. To achieve this, we can use Math.abs method.

//TODO: Two
We want to separate number. For example, from 10 to 1 and 0. To achieve this, we can use split method. But, split method can only use with String. So, at first, we should change the given number to string.(Of course, we can use toString()) And, secondly, we can use split method.

//TODO: Three
To sum the split number, we have to change the string to number again. But we have to change all strings to number in array.  To achieve this, we should use map method.(.map(Number))

//TODO: Four

Finally, we can sum all numbers. We can use for loop. But, I think reduce method is better decition.

That' all.

If you interested in my solution, please check index.js file.

Thank you for reading. and happy coding!!