// //Chapter 1=============================================================
// // Q 1
// alert("Hello Visitor Welcome to my Awesome website.");

// // Q 2
// alert("Error! Please enter a valid password.");

// // Q 3
// alert("Welcome to JS land...\nHappy Coding");

// // Q 4
// alert("Welcome to JS land...");
// alert("Happy Coding");

// // Q 5
// console.log("Hello... I can run JS through my web browser's console");


// // Chapter 2===============================================================

// // Q 1
// var username;
// // Q 2
// var myName = "Dhara Rajput";
// // Q 3
// var message;
// message = "Hello World";
// alert(message);
// // Q 4
// var studentName = "John Doe";
// var studentDOB = 15;
// var courseName = "Cetified Mobile Application Development";
// alert(studentName);
// alert(studentDOB + " years old");
// alert(courseName);

// // Q 5
// var food = "PIZZA \nPIZZ\nPIZ\nPI\nP";
// alert(food);
// // Q 6
// var email;
// email = "dhararajput.official@gmail.com";
// alert("My email address is " + email);


// // Q 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// // Q 8
// document.write("Yah! I can write HTML content through JavaScript");


// // Q 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// // Chapter 3 =========================================================
// // Q 1
// var age;
// age = 21;
// alert("I am " + age + " years old.");

// // Q 2
// var noOfVisits = 14;
// alert("You have visited this site " + noOfVisits + " times.");

// // Q 3
// var birthYear = 1999;
// document.write("My birth year is " + birthYear + "<br/>");
// document.write("Data type of my declared variable is number");

// // Q 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 7;
// var message = "<b>" + visitorName + "</b>" + " ordered " + " <b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing store.";
// document.write("<br/>" + message);

// // Chapter 4 ====================================================================
// // Q 1
// var variable1, variable2, variable3;

// // Q 2
// var name, age, dateOfBirth, salary, address; //Legal variables
// var .alert, 2things, my--name, product cost, m / yData; //Illegal variables   

// // Q 3
// var a = "<h1>Rules for naming JS variables</h1>";
// var b = "Variable names can only contain , numbers, $ and _ . For example : $my_1stVariable";
// var c = "Variables must begin with a letter, $ or _. For example $name, _name or name";
// var d = "Variable names are case sensitive";
// var e = " Variable names should not be JS Keywords";
// document.write(a + "<br>");
// document.write(b + "<br>");
// document.write(c + "<br>");
// document.write(d + "<br>");
// document.write(e + "<br>");

// // Chapter 5 =============================================================
// var num1 = (+prompt("Enter first operand"));
// var num2 = (+prompt("Enter second operand"));
// var ans = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + ans);


// // Q 2
// var num1 = (+prompt("Enter first operand"));
// var num2 = (+prompt("Enter second operand"));
// document.write("subraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2 + "<br>");
// document.write("Division of " + num1 + " and " + num2 + " is " + num1 / num2 + "<br>");
// document.write("Modulus of " + num1 + " and " + num2 + " is " + num1 % num2 + "<br>");



// // Q 3
// var num;
// document.write("Value after variable declaration is:" + num + "<br>");
// num = 5;
// document.write("Initial value:" + num + "<br>");
// num++;
// document.write("Value after increment is :" + num + "<br>");
// num += 7;
// document.write("Value after addition is :" + num + "<br>");
// num--;
// document.write("Value after decrement is :" + num + "<br>");
// var remainder = num % 3;
// document.write("The remainder is :" + remainder + "<br>");



// // Q 4
// var ticketPrice = 600;
// var noOfTickets = 5;
// var totalCost = ticketPrice * noOfTickets;
// var message = "Total cost to buy " + noOfTickets + " tickets to a movie is " + totalCost + " PKR";
// document.write(message);

// // Q 5
// var table = 4;
// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// }

// // Q 6
// var tempInCel = 20;
// var tempInFarConvert = (tempInCel * 9 / 5) + 32;
// document.write(tempInCel + " oC is " + tempInFarConvert + " oF " + "<br>");

// var tempInFar = 50;
// var tempInCelConvert = (tempInFar - 32) * 5 / 9;
// document.write(tempInFar + " oF is " + tempInCelConvert + " oC ");

// // Q 7
// var priceOfItem1 = 650;
// var priceOfItem2 = 100;
// var orderedQuantityOfItem1 = 3;
// var orderedQuantityOfItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
// document.write("Price of item 1 is " + priceOfItem1 + "<br>");
// document.write("Quantity of item 1 is " + orderedQuantityOfItem1 + "<br>");
// document.write("Price of item 2 is " + priceOfItem2 + "<br>");
// document.write("Quantity of item 2 is " + orderedQuantityOfItem2 + "<br>");
// document.write("<br>");
// document.write("Total cost of your order is " + totalCost + "<br>");


// // Q 8
// var totalMarks = 980;
// var obtainMarks = 804;
// var per = (obtainMarks / totalMarks) * 100;
// document.write("Total marks:" + totalMarks + "<br>");
// document.write("Marks Obtained:" + obtainMarks + "<br>");
// document.write("Percentage:" + per + "%<br>");

// // Q 9
// var dollar = 10;
// var saudiRiyals = 25;
// var totalInPKR = (dollar * 104.80) + (saudiRiyals * 28);
// document.write("<h1>Currency in PKR</h1><br>");
// document.write("Total Currecny in PKR:", totalInPKR);


// // Q 10
// var number = 2;
// number = ((number + 5) * 10) / 2;
// document.write("After Arithmetic operations the value is " + number);

// // Q 11
// var currentYear = 2020;
// var birthYear = 1999;
// var age = currentYear - birthYear;
// document.write("Current Year:" + currentYear + "<br>");
// document.write("Birth Year:" + birthYear + "<br>");
// document.write("Your age is :" + age + "<br>");

// // Q 12
// var radius = 20;
// var circum = 2 * 3.142 * radius;
// var area = 3.14 * radius * radius;
// document.write("Raduis of a circle is :" + radius + "<br>");
// document.write("The circumference is :" + circum + "<br>");
// document.write("The area is :" + area + "<br>");

// // Q 13
// var favSnack = "Choclate Chip";
// var currentAge = 21;
// var maxAge = 60;
// var perDay = 3;
// var total = (maxAge - currentAge) * perDay;
// document.write("<h1>The Lifetime Supply Calculator</h1><br>");
// document.write("Favourite Snack :" + favSnack + "<br>");
// document.write("Current Age :" + currentAge + "<br>");
// document.write("Estimated Maximun age :" + maxAge + "<br>");
// document.write("Amount of snacks per day :" + perDay + "<br>");
// document.write("You will need " + total + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");

// // Chapters 6-9 =======================================================================================
// // Q 1
// var a = 10;
// document.write("Result: <br>")
// document.write("The value of a is :" + a + "<br>");
// document.write("--------------------------<br>")
// document.write("The value of ++a is :" + ++a + "<br>");
// document.write("Now the value of a is :" + a + "<br>");
// document.write("--------------------------<br>")
// document.write("The value of a++ is :" + a++ + "<br>");
// document.write("Now the value of a is :" + a + "<br>");
// document.write("--------------------------<br>")
// document.write("The value of --a is :" + --a + "<br>");
// document.write("Now the value of a is :" + a + "<br>");
// document.write("--------------------------<br>")
// document.write("The value of a-- is :" + a-- + "<br>");
// document.write("Now the value of a is :" + a + "<br>");


// // Q 2
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is :" + a + "<br>");
// document.write("b is :" + b + "<br>");
// document.write("Result is :" + result);

// // Q 3
// var name = prompt("Enter your name");
// alert("Hello! " + name + " It's coding time");

// // Q 4
// // no question written

// // Q 5
// var tableNumber = (+prompt("Enter a number to print the table"));
// if (tableNumber != "") {
//     for (var i = 1; i <= 10; i++) {
//         document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
//     }
// }
// else {
//     tableNumber = 5;
//     for (var i = 1; i <= 10; i++) {
//         document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
//     }

// }



// // Q 6
// var subj1Name = prompt("Enter the name of subject 1:");
// var subj2Name = prompt("Enter the name of subject 2:");
// var subj3Name = prompt("Enter the name of subject 3:");
// var totalMarksOfEachSubject = 100;
// var subj1Marks = (+prompt("Enter the marks of subject 1:"));
// var subj2Marks = (+prompt("Enter the marks of subject 2:"));
// var subj3Marks = (+prompt("Enter the marks of subject 3:"));
// var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
// var percentage = (totalObtainMarks / (totalMarksOfEachSubject * 3)) * 100;
// document.write("<table border='1'>");
// document.write("<tr>");
// document.write("<th> Subject </th>");
// document.write("<th> Total Marks </th>");
// document.write("<th> Obtained Marks </th>");
// document.write("<th> Percentage </th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td> " + subj1Name + " </td>");
// document.write("<td> " + totalMarksOfEachSubject + " </td>");
// document.write("<td>" + subj1Marks + "</td>");
// document.write("<td> " + subj1Marks + "%" + " </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td> " + subj2Name + " </td>");
// document.write("<td> " + totalMarksOfEachSubject + " </td>");
// document.write("<td>" + subj2Marks + "</td>");
// document.write("<td> " + subj2Marks + "%" + " </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td> " + subj3Name + " </td>");
// document.write("<td> " + totalMarksOfEachSubject + " </td>");
// document.write("<td>" + subj3Marks + "</td>");
// document.write("<td> " + subj3Marks + "%" + " </td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td> </td>");
// document.write("<td> " + (totalMarksOfEachSubject * 3) + " </td>");
// document.write("<td>" + totalObtainMarks + "</td>");
// document.write("<td> " + percentage + "%" + " </td>");
// document.write("</tr>");
// document.write("</table>");

// // Chapters 9-11 ********************************************
// // Q 1
// var city = prompt("Enter your city:");
// if (city === "Karachi") {
//     document.write("Welcome to city of bed light");
// }


// // Q 2
// var gender = prompt("Enter your gender:");
// if (gender === "Male") {
//     document.write("Good Morning Sir");
// }
// else {
//     document.write("Good Morning Ma'am");
// }

// // Q 3
// var signalColor = prompt("Enter the color of the signal");
// if (signalColor === "Red") {
//     document.write("Must Stop");
// }
// else if (signalColor === "Yellow") {
//     document.write("Ready to move");
// }
// else {
//     document.write("Move Now");
// }


// // Q 4
// var fuel = (+prompt("Enter the fuel remaining"));
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }
// //Q5
// /* Checking If Conditions Are True */

// document.write("part a is true");
// document.write("part b wont run because not true");
// document.write("Part c Condition 2 is true");
// document.write("part d The Cost is equal in part d");
// document.write("part e is true")
// document.write("part f is car is smaller than cat");

// // Q 6

// var subj1Marks = (+prompt("Enter the marks of subject 1:"));
// var subj2Marks = (+prompt("Enter the marks of subject 2:"));
// var subj3Marks = (+prompt("Enter the marks of subject 3:"));
// var totalMarks = (+prompt("Enter total marks"));
// var totalObtainMarks = subj1Marks + subj2Marks + subj3Marks;
// var percentage = (totalObtainMarks / totalMarks) * 100;
// if (percentage >= 80) {
//     document.write("Grade is : A-One" + "<br>");
//     document.write("Remarks is : Excellent");
// }
// else if (percentage >= 70) {
//     document.write("Grade is : A" + "<br>");
//     document.write("Remarks is : Good");
// }
// else if (percentage >= 60) {
//     document.write("Grade is : B" + "<br>");
//     document.write("Remarks is : You need to imporve");
// }
// else if (percentage < 60) {
//     document.write("Grade is : Fail" + "<br>");
//     document.write("Remarks is : Sorry");
// }
// else {
//     document.write("Invalid input");
// }


// // Q 7
// var secretNum = Math.floor((Math.random() * 10) + 1);
// console.log(secretNum);
// var userGuess = (+prompt("Guess the secret number"));
// if (userGuess === secretNum) {
//     document.write("Bingo! Correct answer");
// }
// else if ((userGuess + 1) === secretNum) {
//     document.write("Close enough to the correct answer");
// }
// else {
//     document.write("Your guess is wrong! bad luck try next time");
// }


// // Q 8
// var userNumber = (+prompt("Enter a number"));
// if (userNumber % 3 === 0) {
//     document.write(userNumber + " is divisible by 3");
// }

// // Q 9
// var userNumber = (+prompt("Enter a number"));
// if (userNumber % 2 === 0) {
//     document.write(userNumber + " is even number ");
// }
// else {
//     document.write(userNumber + " is odd number ");
// }


// // Q 10
// var temp = (+prompt("Enter the temperature"));
// if (temp > 40) {
//     document.write("It is too hot outside");
// }
// else if (temp > 30) {
//     document.write("The weather today is Normal");
// }
// else if (temp > 20) {
//     document.write("Today's weather is cool");
// }
// else {
//     document.write("OMG! Today’s weather is so Cool.");
// }


// // Q 11
// var operand1 = (+prompt("Enter first operand "));
// var operator = prompt("Enter Operation ");
// var operand2 = (+prompt("Enter second operand "));
// if (operator == "+") {
//     document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 + operand2));
// }
// else if (operator == "-") {
//     document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 - operand2));
// }
// else if (operator == "*") {
//     document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 * perand2));
// }
// else if (operator == "/") {
//     document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 / operand2));
// }
// else if (operator == "%") {
//     document.write(operand1 + " " + operator + " " + operand2 + " is " + (operand1 % operand2));
// }
// else {
//     document.write("invalid input");
// }

// //chaapter 12-13
// //Q1
// /* Checking lowerCase or upperCase or type of Variable */

// var a = prompt("enter any kind of variable");

// if (a >= "A" && a <= "Z") {
//     document.write("The letter is Capital");

// }

// else if (a >= "a" && a <= "z") {
//     document.write("The letter is lowerCase");


// }

// else (
//     document.write("The variable is not string")
// )

// //Q2
// /* Comparring two numbers */

// var a = +prompt("Enter the value of A");
// var B = +prompt("Enter the value of B");

// if (a === b) {
//     document.write("The two numbers are equal <br>");
// }

// else if (a = b) {
//     document.write("a is greater than b");
// }

// else if (b > a) {
//     document.write("b is greater than a");
// }
// //Q3
// /* Checking if the number is zero , positive or negative */

// var a = +prompt("enter the number");

// if (a < 0) {
//     document.write("The number is in negative");
// }
// else if (a === 0) {
//     document.write("The number is equal to zero");
// }
// else {
//     document.write("The number is positive");
// }

// //Q4
// /* Guessing if the character is vowel or not */

// var ch = prompt("Enter any character");

// if (ch === "a") {
//     document.write("The character is vowel");
// }

// else if (ch === "e") {
//     document.write("The character is vowel");
// }

// else if (ch === "i") {
//     document.write("The character is vowel");
// }

// else if (ch === "o") {
//     document.write("The character is vowel");
// }

// else if (ch === "u") {
//     document.write("The character is vowel");
// }

// else {
//     document.write("The character is not vowel");
// }

// //Q5
// /* Checking if the password is same or not */

// var password = prompt("Enter your passowrd");

// var verifyPassword = prompt("Re-enter your passowrd");

// if (password === verifyPassword) {
//     alert("The password is character");
// }
// else {
//     alert("The password is not character, re-enter please!");
// }

// //Q6

// var greeting;
// var hour = 13;
// if (hour <= 13) {


//     greeting = "Good day";
//     document.write(greeting)
// }

// else {

//     greeting = "Good evening";

// }
// //Q7
// /* Greeting According to the time */

// var time = +prompt("Enter time in whole numbers 24 hours");

// if (time >= 00 && time < 12) {
//     document.write("Good Morning!");
// }

// var time = +prompt("Enter time in whole numbers 24 hours");

// else if (time >= 12 && time < 17) {
//     document.write("Good Evening!");
// }

// else if (time >= 12 && time < 17) {
//     document.write("Good Afternoon!");
// }

// else if (time >= 17 && time < 21) {
//     document.write("Good Evening!");
// }

// else {
//     document.write("Good Night!");
// }


// //chapter 14-16
// //Q1
// var list = [];
// //Q2
// var arrayB = new Array();
// //Q3
// list = ["Dhara", "Aisha", "Areeba"];
// //Q4
// var numbers = [1, 3, 4, 5, 6];
// //Q5
// var bolArr = [true, false];
// // Q6
// var mixedArray = ["Dhara", 0.46, true, "Aisha", 5];
// //Q7
// var qualifications = ["school", "college", "gradutaion", "job"];

// for (var i = 0; i < 4; i++) {
//     document.write(qualification[i] + "<br>");
// }
// /* qualifcations printing in array */

// var qualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHILL", "PHD"];

// var b = 5;

// for (var i = 0; i < 8; i++) {
//     document.write(i + (1) + " " + qualifications[i] + "<br>");
// }

// //Q8
// /* calculating scores through array */

// var names = ["Dhara", "Aisha", "Areeba"];

// var marks = [320, 230, 480];

// for (var i = 0; i < 3; i++) {
//     var percentage = [(marks[i] / 500) * 100, (marks[i] / 500) * 100, (marks[i] / 500) * 100];
// }

// for (var i = 0; i < 3; i++) {

//     document.write("Score of " + names[i] + " is " + marks[i] + ". Percentage: " + percentage[i] + "<br>");



// }

// //Q9
// /* colors from array */

// var colors = ["yellow", "green", "blue"];

// var askColor = prompt("what color do you want to add in the beginning");

// colors.unshift(askColor);


// var addAtEnd = prompt("What color do you want to insert at the end of Array");

// colors.push(addAtEnd);


// colors.push("black", "dark Blue");


// colors.shift();

// for (var i = 0; i < colors.length; i++) {

//     document.write(" " + colors[i] + "<br>");
// }


// //Q11

// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// city.slice(2, 4);



// //Q12

// var arr = ["This", "is", "my", "cat"];

// var newArr = arr.join();

// document.write(newArr)


// //Chapter 17-20
// //Q3
// for (var i = 1; i < 11; i++) {
//     document.write(i + "<br>");
// }

// //Q4

// var a = +prompt("enter the table");

// var length = +prompt("Enter the length of the table");


// var total;
// for (var i = 1; i <= length; i++) {

//     total = a * i;

//     document.write(a + "x" + i + "=" + total + "<br>");

// }


// //Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// //Q6

// /*   counting */

// for (var i = 0; i < 5; i++) {
//     document.write(fruits[i] + "<br>");
// }


// /*  backward counting */

// for (var i = 10; i >= 1; i--) {
//     document.write(i + "<br>");
// }

// /*  even counting */



// for (var i = 1; i <= 20; i++) {

//     if (i % 2 == 0) {
//         document.write(i + "<br>");

//     }



// }

// /*  Odd counting */



// for (var i = 1; i <= 20; i++) {

//     if (i % 2 == 1) {
//         document.write(i + "<br>");

//     }



// }

// /* series counting */


// for (var i = 1; i <= 20; i++) {

//     if (i % 2 == 0) {
//         document.write(i + "k<br>");

//     }



// }
// //Q7
// /* finding element in the array */
// var A = ["cake", "apple Pie", "cookie", "chips", "patties"];


// var search = prompt("Ënter the element you want to search")

// for (var i = 0; i < 5; i++) {


//     if (A[i] === search) {
//         document.write("The element is in the array");
//         break;
//     }
//     else {
//         document.write("Not in the array");
//         break;
//     }
// }