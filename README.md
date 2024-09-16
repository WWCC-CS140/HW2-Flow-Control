## Homework 2 - Flow Control

In this homework, you will complete several functions that will require you to
work with branching and flow control statements.

### P1) Algebra: solve quadratic equations
The two roots of a quadratic equation $ax^2 + bx + c = 0$ can be obtained using the following formula:

$r1 = \frac{-b+\sqrt{b^2-4ac}}{2a}$ and $r2 = \frac{-b-\sqrt{b^2-4ac}}{2a}$

$b^2-4ac$ is called the discriminant of the quadratic equation. 

If it is positive, the equation has two real roots. 
If it is zero, the equation has one root. 
If it is negative the equation has no real roots.

Write a program that calculates the number of roots a quadratic equation will have
The program should return a 2, 1, or 0 based on how many roots the equation has
* If the discriminant is positive, return 2.
* If the discriminant is zero, return 1.
* If the discriminant is negative, return 0.

### P2) Random month
Write a program that randomly generates an integer between 1 and 12 and returns the English month name for the number.
Where 1 is January, 2 is February and so on to 12 is December.


### P3) Find the number of days in a month
Write a program that calculates the number of days in a provided month.
The number of days should be returned as a string, not a number.
Month will be a number between 1 and 12 inclusive.
If the month is 2 and year is 2012, the program should return "29 days".
If the month is 3 and year is 2015, the program should return "31 days".
You can use the simple version of a leap year calculation, is divisible by 4


### P4) Game: rock, paper, scissors (optional)
Write a program that plays the popular rock-paper-scissors game.
The players choice will be a 0, 1, or 2 representing rock, paper, or scissors respectively.
The program should randomly generate a number 0, 1, or 2 also representing rock, paper, or scissors.
The program then returns a message indicating whether the "Player wins", "Computer wins" or "It's a draw".
