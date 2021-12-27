This is my coding report of Code Wars.

Created At: 27th Dec 2021(Mon)

Challenge: DNA to RNA Conversion(8kyu)

URL:https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

Instructions:

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//TODO: 
We have to change string from 'T' to 'U'.

There are several methods to achieve it, 
but I would like to use replace method.

mdn-doc:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

And replace method is tend to use with Regex.
Regex is complicated and I don't know Regex perfectly.
But, I can use a beginner's Regex such as this time.

If you interested in my solution, please check index.js file.

Thank you for reading.
And, happy coding!!!