// PART 1 Previous Day Revision: Variables, Data Types, Operators, Type Casting
// 1 Declare three variables using var, let, and const and assign different values and print them.
var a = 10;
let b = 20;
const c = 30;
console.log(a, b, c); //10 20 30

// 2 Create variables for name, age, salary, and working status.
let name = "Hari";
let age = 23;
let salary = 42000;
let isWorking = true; 

// 3 Print the data types of the above variables.
console.log(typeof name, typeof age, typeof salary, typeof isWorking); //string number number boolean

// 4 Create an array of fruits and print the first, third, and last fruit.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 5 Create an object containing name, age, location, and skills. Print each property.
let person = {
  name: "Hari",
  age: 23,
  location: "Salem",
  skills: ["HTML", "CSS", "JavaScript"]
};
console.log(person.name);
console.log(person.age);
console.log(person.location);
console.log(person.skills);

// 6 Perform addition, subtraction, multiplication, division, modulus, and exponentiation using two numbers
let x = 20, y = 10;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// 7 Create a variable with value 10. Perform pre-increment and print the result.
let n = 10;
console.log(++n);

// 8 Create a variable with value 20. Perform post-increment and print the result.
let m = 20;
let result = m++;
console.log(m);
console.log(result);

// 9 Create two variables and perform all six assignment operators.
let p = 10, q = 3;
p = q;  console.log(p);
p += q; console.log(p);
p -= q; console.log(p);
p *= q; console.log(p);
p /= q; console.log(p);
p %= q; console.log(p);

// 10 Check whether 100 is greater than 50, equal to 100, and not equal to 200.
console.log(100 > 50);
console.log(100 === 100);
console.log(100 !== 200);

// 11 Compare 25 and "25" using both loose and strict equality
console.log(25 == "25");
console.log(25 === "25");

// 12 Write one condition using the AND operator.
let ageA = 25;
console.log(ageA > 18 && ageA < 60);

// 13 Write one condition using the OR operator.
let ageB = 15;
console.log(ageB < 18 || ageB > 60);

// 14 Use the NOT operator to reverse a comparison result.
console.log(ageA > 18);     // true
console.log(!(ageA > 18));  // false (NOT reverses the result)

// 15 Use a ternary operator to check whether a person is eligible to vote.
let voterAge = 20;
let msg = voterAge >= 18 ? "Eligible to vote" : "Not eligible";
console.log(msg);

// 16 Create three variables and display their values using template strings.
let city = "Salem", year = 2026, course = "JavaScript";
console.log(`I am learning ${course} in ${city} in ${year}`);

// 17 Check the data type of "Hello" + 100 and 100 + true.
console.log(typeof ("Hello" + 100));
console.log(typeof (100 + true));

// 18 Convert "500" into a number and add 100.
let s = "500";
console.log(Number(s) + 100);

// 19 Convert 0, 1, "", and "JavaScript" using Boolean().
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("JavaScript"));


// PART 2 – Conditional Statements if, if-else, else-if, nested if, switch
// 20 Check if a number is positive or negative using an if-else statement.
let num = 5;
if (num >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
let num1 = -5;
if (num1 >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
// 21 Check if a person is eligible to vote based on their age using an if-else statement.
let voteAge = 23;
if (voteAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 23 Check whether a number is even or odd using the modulus operator.
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 24 Check if a student has passed or failed , assuming the passing mark is 35.
let mark = 40;
if (mark >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 25 Create a time-based greeting system using else-if: 
// 1–6: Early Morning
// 7–12: Good Morning
// 13–15: Good Afternoon
// 16–18: Good Evening
// 19–24: Good Night
// Otherwise: Invalid Time

let time = 5;
if (time >= 1 && time <= 6) {
  console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
  console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
  console.log("Good Afternoon");
} else if (time >= 16 && time <= 18) {
  console.log("Good Evening");
} else if (time >= 19 && time <= 24) {
  console.log("Good Night");
} else {
  console.log("Invalid Time");
}

// 26 Create a nested if condition to check age, height, and weight for selection.
let studentAge = 23, height = 170, weight = 80;
if (studentAge >= 18) {
  if (height >= 165) {
    if (weight >= 55) {
      console.log("Selected");
    } else {
      console.log("Rejected: weight too low");
    }
  } else {
    console.log("Rejected: height too low");
  }
} else {
  console.log("Rejected: under age");
}

// 27 Create a variable trafficLight. Use switch to display the correct action for red, yellow, and green.
let trafficLight = "green";
switch (trafficLight) {
  case "red":
    console.log("Vehicle Stop");
    break;
  case "yellow":
    console.log("Vehicle Get ready");
    break;
  case "green":
    console.log("Vehicle Go");
    break;
  default:
    console.log("Invalid signal");
}

// 28 Create a switch statement for weekdays. Display the day name based on a number from 1 to 7.
let dayNo = 3;
switch (dayNo) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Enter a number from 1 to 7");
}

// 29 Create a simple login condition using a username and password.
let username = "Hari";
let password = "MY CAR WORLD 143";
if (username === "admin" && password === "MY CAR WORLD 143") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// 30 Check whether a student gets an A, B, C, or Fail grade using else-if.
let score = 90;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 65) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// PART 3 – Looping Statements for, while, do-while, for-of, for-in
// 31 Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 32 Print numbers from 10 to 1 using a for loop.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 33 Print all even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 34 Print all odd numbers from 1 to 20.
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// 35 Print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 36 Calculate the sum of numbers from 1 to 10 using a for loop.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 37 Print numbers from 10 to 1 using a while loop.
let w = 10;
while (w >= 1) {
  console.log(w);
  w--;
}

// 38 Print numbers from 1 to 5 using a do-while loop.
let d = 1;
do {
  console.log(d);
  d++;
} while (d <= 5);

// 39 Print every character in "JAVASCRIPT" using a for-of loop.
for (let ch of "JAVASCRIPT") {
  console.log(ch);
}

// 40 Create an array of five programming languages and print every element using for-of
let languages = ["JavaScript", "Python", "Java", "C", "PHP"];
for (let lang of languages) {
  console.log(lang);
}

// 41 Create an object with properties name, age, location, and designation. Use for-in to print each property and its value.
let employee = {
  name: "Hari",
  age: 23,
  location: "Salem",
  designation: "Java Full Stack Developer"
};
for (let key in employee) {
  console.log(key + ": " + employee[key]);
}

// 42 Create an array of five brands and print every brand using for-of.
let brands = ["Oppo", "Apple", "Samsung", "OnePlus", "Redmi"];
for (let brand of brands) {
  console.log(brand);
}


// PART 4 – Combined Challenge Previous topics + Today's topics
// 43 Create an array of five marks and print each mark using a for loop.
let marks = [78, 65, 90, 45, 82];
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

// 44 Create an object containing employee name, age, salary, and location. Use for-in to display all properties.
let emp = { name: "Hari", age: 23, salary: 42000, location: "Salem" };
for (let key in emp) {
  console.log(`${key}: ${emp[key]}`);
}

// 45 Create an array of five numbers. Use a loop and if-else to identify even and odd numbers.
let numbers = [2, 5, 8, 11, 14];
for (let v of numbers) {
  if (v % 2 === 0) {
    console.log(v + " is Even");
  } else {
    console.log(v + " is Odd");
  }
}

// 46 Create a student object with name and marks. Use if-else to display Pass or Fail.
let student = { name: "Hari", marks: 90 };
if (student.marks >= 35) {
  console.log(student.name + ": Pass");
} else {
  console.log(student.name + ": Fail");
}

let student2 = { name: "Harini", marks: 34 };
if (student2.marks >= 35) {
  console.log(student2.name + ": Pass");
} else {
  console.log(student2.name + ": Fail");
}

// 47 Create a traffic signal using switch and display the result using console.log().
let signal = "Red";
switch (signal) {
  case "Red":    console.log("Stop"); break;
  case "Yellow": console.log("Wait"); break;
  case "Green":  console.log("Go"); break;
  default:       console.log("Invalid signal");
}
let signal2 = "Yellow";
switch (signal2) {
  case "Red":    console.log("Stop"); break;
  case "Yellow": console.log("Wait"); break;
  case "Green":  console.log("Go"); break;
  default:       console.log("Invalid signal");
}
let signal3 = "Green";
switch (signal3) {
  case "Red":    console.log("Stop"); break;
  case "Yellow": console.log("Wait"); break;
  case "Green":  console.log("Go"); break;
  default:       console.log("Invalid signal");
}

// 48 Create a number variable and use a loop to print its multiplication table from 1 to 10.
let table = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}

// 49 Create an array of five fruits. Use for-of to display each fruit in uppercase.
let fruitList = ["apple", "banana", "mango", "orange", "grapes"];
for (let fruit of fruitList) {
  console.log(fruit.toUpperCase());
}

// 50 Create an employee object and use for-in to display its properties.
let emp2 = { name: "Harini", age: 25, salary: 28000, location: "Salem" };
for (let key in emp2) {
  console.log(`${key}: ${emp2[key]}`);
}
// Check if the employee's salary is above ₹25,000 and display a message accordingly.
if (emp2.salary > 25000) {
  console.log("Salary is above ₹25,000");
} else {
  console.log("Salary is ₹25,000 or below");
}

// 51 Create a login system using username, password, and if-else. Display the appropriate message.
let savedUser = "Hari";
let savedPass = "Hari@143";
let enteredUser = "Hari";
let enteredPass = "Hari@143";
if (enteredUser === savedUser && enteredPass === savedPass) {
  console.log("Welcome to My Car World");
} else if (enteredUser !== savedUser) {
  console.log("Username not found");
} else {
  console.log("Incorrect password");
}

// 53 Create a student management mini program using an object, array, loop, comparison operators, and conditional statements.
let students = [
  { name: "Hari",  marks: 91 },
  { name: "Swathi",  marks: 85 },
  { name: "Hashni", marks: 30 },
  { name: "Harini", marks: 50 },
  { name: "Harshini",  marks: 70 }
];
let passCount = 0;
let failCount = 0;
let total = 0;

for (let i = 0; i < students.length; i++) {
  let st = students[i];
  let res = st.marks >= 35 ? "Pass" : "Fail";
  let grade;

  if (st.marks >= 90) {
    grade = "A";
  } else if (st.marks >= 85) {
    grade = "B";
  } else if (st.marks >= 35) {
    grade = "C";
  } else {
    grade = "-";
  }

  if (res === "Pass") {
    passCount++;
  } else {
    failCount++;
  }
  total += st.marks;

  console.log(`${st.name} | Marks: ${st.marks} | ${res} | Grade: ${grade}`); // Displaying the result in a tabular format
}
console.log("Passed: " + passCount); 
console.log("Failed: " + failCount);
console.log("Average: " + total / students.length);