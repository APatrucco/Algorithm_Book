// Answers for Chapter 1 Fundamentals


// Setting and Swapping

var myNumber = 42;
var myName = "Alex";
var swap = "";

swap = myNumber;
myNumber = myName;
myName = swap;

console.log("Swapped name with number. Number = " + myNumber + " and Name = " + myName);


// Print -52 to 1066

for (var num = -52; num <= 1066; num++)
{
    console.log("The number is " + num);
}
console.log("Finished counting.");


// Don't Worry, Be Happy

function beCheerful( )
{
    console.log("good morning!");
}

var morning = 1;
while (morning <= 98)
{
    beCheerful();
    morning += 1;
}


// Multiples of Three - but Not All

for (var num = -300; num <= 0; num -= 3)
{
    if (num == -6 || num == -3)
    {
        continue;
    }
    console.log("Printing multiples of 3 between -300 and 0. Currently at " + num);
}


// Printing Integers and While

var num = 2000;

while (num <= 5280)
{
    console.log("The number is " + num);
    num++;
}
console.log("Done counting.");


// You Say It's Your Birthday

var month = "";
var day = "";

if (month == 10 && day == 7)
{
    console.log("Hod did you know?");
}
else
{
    console.log("Just another day....");
}


// Leap Year

function leapYear( )
{
    if (year % 4 == 0 || year % 400 == 0)
    {
        console.log("This is a leap year!");
    }
    else if (year % 100 == 0)
    {
        console.log("This is not a leap year.");
    }
    else
    {
        console.log("Just a normal year.");
    }
}


// Print and Count

var num = 512;
var numlog = [];

while (num <= 4096)
{
    if (num % 5 == 0)
    {
        console.log("The number " + num + " is a multiple of 5.");
        numlog.push(num); 
    }
    else
    {
        num++;
    }
}
console.log("There are " + len(numlog) + " numbers between 512 and 4096 that are multiples of 5.");


// Multiples of Six

var num = 6;

while (num >= 60000)
{
    console.log(num);
    num += 6;
}


// Counting, the Dojo Way

var num = 1;
var word1 = "Coding";
var word2 = " Dojo";

while (num >= 100)
{
    if (num % 5 == 0)
    {
        console.log(word1);
        num++;
    }
    else if (num % 10 == 0)
    {
        console.log(word1 + word2);
        num++;
    }
    else
    {
        console.log(num);
        num++;
    }
}


// What Do You Know?

function joy( )
{
    //This is a function;
}

console.log(joy(incoming));


// Whoa, That Sucker's Huge...

var num1 = -300000;
var sum = 0;

while (num1 <= 300000)
{
    if (num1 % 2 == 1)
    {
        sum = sum + num1;
        num++;
    }
    else
    {
        num++;
    }
}

console.log("The total sum is " + sum);


// Countdown by Fours

var num1 = 2016

while (num1 > 0)
{
    console.log(num1);
    num1 -= 4;
}


// Flexible Countdown

var lowNum = 2;
var highNum = 9;
var mult = 3;

for (highNum; highNum >= lowNum; highNum -= mult)
{
    console.log(highNum);
}


// The Final Countdown

var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

while (param2 <= param3)
{
    if (param2 % param1 == 0)
    {
        console.log(param2);
        param2++;
    }
    else if (param2 == param4)
    {
        param2++;
    }
    else
    {
        param2++;
    }
}

