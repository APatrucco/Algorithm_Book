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
console.log("There are " + numlog.length + " numbers between 512 and 4096 that are multiples of 5.");


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


// Countdown

function countdown(num);
{
    var newArr = [];
    
    for(num; num >= 0; num--)
    {
        newArr.push(num); //concatinates each new value of num to newArr
    }
    console.log(newArr.length); //prints the length of the new array
    return newArr; //returns new array
}


// Print and Return

function PrintReturn(arr) {
    
    console.log(arr[0]);  //prints first value of given two-value array
    return arr[1];  //returns second value
}


// First Plus Length

function firstPlusLength(arr) {
    
    var sum = ""; //create a variable to hold new sum
    
    sum = arr[0] + arr.length; //change value of sum to first value of given array + array length
    return sum;
}


// Values Greater than Second

var arr = [1,3,5,7,9,13]; //specified an array
function valueGreater2(arr) {
    
    var newArr = []; //new array to hold values > 2nd value of given array
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > arr[1]) { //if value x of arr is > 2nd value
            console.log(arr[x]); //print value x
            newArr.push(arr[x]); //and add to new array
        }
    }
    return newArr.length; //return length of new array
}


//Values Greater than Second, Generalized
//Almost identical to previous function, but with error handling in the event that array length is too short

function valueGreater2Gen(arr) {
    
    if(arr.length < 2) {
        console.log("Array does not contain enough values.");
        break;
    }
    else {
        var newArr = []; //new array to hold values > 2nd value of given array
        for(var x = 0; x < arr.length; x++) {
            if(arr[x] > arr[1]) { //if value x of arr is > 2nd value
                console.log(arr[x]); //print value x
                newArr.push(arr[x]); //and add to new array
            }
        }
        return newArr.length; //return length of new array
    }
}


// This Length, That Value

function lengthValue(num1, num2) {
    
    var newArr = []; //created a new empty array
    newArr.length = num1; //gave it a length of num1
    
    for(var x = 0; x < newArr.length; x++) {
        newArr[x] = num2; //changed each value of the new array to num2
    }
    if(num1 == num2) { //If num1 and num2 are the same
        console.log("Jinx!"); //print "Jinx!"
    }
    return newArr; //returns new array
}


// Fit the First Value

function fitFirst(arr) {
    
    if(arr[0] > arr.length) { //if first value of given array is greater than the length of the array
        console.log("Too big!"); //it's too big
    }
    else if(arr[0] < arr.length) { //if first value of given array is less than the length of the array
        console.log("Too small!"); //it's too small
    }
    else { //otherwise
        console.log("Just right!"); //it's just right
    }
}


// Farenheit to Celsius

function farenheitToCelsius(fDegrees) { //function that accepts a value as Farenheit degrees
    
    var cDegrees = 0; //created a variable for Celsius
    var degreeCalc = 0; //created a variable to hold the value of the conversion equation
    
    while(degreeCalc != fDegrees) { //for as long as the conversion equation is not equal to fDegrees
        degreeCalc = (9/5 * cDegrees) + 32; //perform calculation
        if(degreeCalc > fDegrees) { //if it's still greater than fDegrees
            cDegrees - 0.1; //subtract 0.1
        }
        else if(degreeCalc < fDegrees) { //if less than fDegrees
            cDegrees + 0.1; //add 0.1
        }
    }
    return cDegrees; //when degreeCalc and fDegrees are equivalent, return cDegrees
}


// Celsius to Farenheit
