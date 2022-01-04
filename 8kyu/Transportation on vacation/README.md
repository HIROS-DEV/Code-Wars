This is my coding report of Code Wars.

Created At: 5th Jan 2022(Wed)

Challenge: Transportation on vacation(8kyu)

URL:https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

<!-- Instructions: -->

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

<!-- Instructions　End: -->

<!-- Impressions: -->

The problem is 8kyu. So, many people can solve easily.
And, I thought I could also.
But after trying problem, I noticed I did silly mistake in if else statements. I don't want to silly mistake again.
So, I decided to write this report.

At first , I wrote below the answer.

<!-- My First Answer -->
function rentalCarCost(d) {
  // Your solution here
  if(d < 3) {
    return d * 40;
  }
  if(3 <= d < 7) {
    return d * 40 -20;
  }
  if(d >= 7) {
    return d * 40 - 50;
  }
}
<!------------------------->

I thought this answer was corrected. And I was sure I cleared the problem. But I tried to push TEST button in codewars, 
and ...it had been never happend.

Why? 
I didn't know. 
And I held my head.

So, I decided to research and I found my error.

My error caused by my silly bias about else if statement.
My mistake was the part of condition.

3 <= d < 7 caused the problem.

I had to write 3 <= d && d < 7 instead.

Was it silly mistake, wasn't it?
But, I didn't know.

So, this is correct answer⏬

function rentalCarCost(d) {
  // Your solution here
  if(d < 3) {
    return d * 40;
  } else if(3 <= d && d < 7) {
    return d * 40 -20;
  } else {
    return d * 40 - 50;
  }
}

<!-- Impressions End: -->

That's it!!!

I think many other silly bias in my head about coding.

But I am not going to my walking to my dream.

Thank you for reading.
And, happy coding!!!