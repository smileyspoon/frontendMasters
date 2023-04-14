console.log("hello from experiments");


////////////////////////////////////////
//  3 Control Flow Notes
////////////////////////////////////////

// This is an example of the if statement

// Create a boolean variable and initialize it to false
const skyIsBlue = false;

// Check whether skyIsBlue is true
if (skyIsBlue) {
    // If skyIsBlue is true, execute this code block
    console.log("The sky is blue!");
} else {
    // If skyIsBlue is false, execute this code block instead
    console.log("the sky is... not blue?")
}





// Create a boolean variable and initialize it to false
// (Note: There is no variable named "skyIsBlue" in this example)
 
// Check whether the expression 2+2 equals 4
if (2+2==4) {
    // If the expression evaluates to true, execute this code block
    console.log("The sky is blue!");
} else {
    // If the expression evaluates to false, execute this code block instead
    console.log("the sky is... not blue?")
}


//additional examples of equal signs.
// There are three different types of equality operators in JavaScript:

// Double equals (==) checks whether two values are equal, allowing for type coercion.
// For example, 5 == "5" would be true.
console.log(5 == "5");

// Triple equals (===) checks whether two values are equal and of the same type,
// so it does not allow for type coercion. For example, 5 === "5" would be false.
console.log(5 === "5");

// Not equal (!=) checks whether two values are not equal, allowing for type coercion.
console.log(5 != "6");

// Not equal and not of the same type (!==) checks whether two values are not equal and
// not of the same type, so it does not allow for type coercion.
console.log(5 !== "6");



////////////////////////////////////////
//  4 Loops Notes
////////////////////////////////////////

//here are some loop examples


// Define a variable named friendAtYourParty and initialize it to 0
let friendAtYourParty = 0;

// Use a while loop to repeatedly execute a block of code as long as a condition is true
while (friendAtYourParty < 10) {

    // Print a message to the console
    console.log("another friend joined your party");

    // Increment the value of friendAtYourParty by 1
    friendAtYourParty++;
}

//Increment and decrement notes

// The ++ operator increments the value of a variable by 1
let x = 5;
x++; // x now equals 6

// The -- operator decrements the value of a variable by 1
let y = 10;
y--; // y now equals 9

// The += operator adds a value to a variable and assigns the result back to the variable
let z = 15;
z += 5; // z now equals 20

// The -= operator subtracts a value from a variable and assigns the result back to the variable
let w = 25;
w -= 10; // w now equals 15

// The *= operator multiplies a variable by a value and assigns the result back to the variable
let a = 3;
a *= 4; // a now equals 12

// The /= operator divides a variable by a value and assigns the result back to the variable
let b = 20;
b /= 5; // b now equals 4



//For Loop Example


// Define a variable named forExampleVariable and initialize it to 0
let forExampleVariable = 0;

// Use a for loop to execute a block of code a specified number of times
for (i = 0; i < 10; i++) {

    // Increment the value of forExampleVariable by 1
    forExampleVariable++;
    
}

// Print the final value of forExampleVariable to the console
console.log(forExampleVariable);




////////////////////////////////////////
//  5 Loops Exercise Notes
////////////////////////////////////////


const timesToRepeat = 10; // Set the number of times to repeat to 10
const character = '🤑'; // Set the character to print to the money face emoji

for (i = 0; i < timesToRepeat; i++) { // Start a loop that will run 10 times
  console.log(character); // Print the money face emoji to the console
}



////////////////////////////////////////
//  6 Functions
////////////////////////////////////////


// Simple example on function

// Define a function called addTwo that takes a number as input and returns the sum of the number and 2
function addTwo(number) {
    return number + 2;
}

// Call the addTwo function with an input value of 5 and store the result in a variable called finalAnswer
const finalAnswer = addTwo(5);

// Print the final answer to the console using the console.log function
console.log(finalAnswer);




//slightly more complex function

// Define a function called greet that takes four parameters: firstName, lastName, honorific, and greeting
function greet(firstName, lastName, honorific, greeting) {

    // Return a formatted string that includes the values of the four parameters
    return `${greeting} ${honorific} ${lastName}! I hope you enjoy your stay, ${firstName}!`;
}

// Call the greet function with specific input values and print the result to the console
console.log(greet("Calvin", "Lee", "Master", "Welcome"));





//new way of doing functions
//here is the converted version

// Define an arrow function called greet that takes four parameters: firstName, lastName, honorific, and greeting
const greet2 = (firstName, lastName, honorific, greeting) => {
    // Return a formatted string that includes the values of the four parameters
    return `${greeting} ${honorific} ${lastName}! I hope you enjoy your stay, ${firstName}!`;
};

// Call the greet function with specific input values and print the result to the console
console.log(greet2("Calvin", "Lee", "Master", "Welcome"));




////////////////////////////////////////
//  6 Functions
////////////////////////////////////////


// Call the sayHi function from anywhere in the program
sayHi();

// Declare the sayHi function using traditional function syntax
function sayHi() {
    console.log('Hi');
}



//////////




// Declare the sayBye function using arrow function syntax and assign it to a constant variable
const sayBye = () => {
    console.log('Bye');
};

// Attempt to call the sayBye function before it has been defined will result in a ReferenceError
sayBye();


////////////////////////////////////////
//  9 Objects
////////////////////////////////////////


// Define an object with several properties
const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100,
  };
  
  // Print the entire object to the console
  console.log(person);
  
  // Print the value of the "name" property to the console
  console.log(person.name);
  
  // Another way to print the value of the "name" property using square brackets
  console.log(person["name"]);


////////////////////////////////////////
//  9 Objects
////////////////////////////////////////



//Example
const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);



 //push example

 // Create an array called `courses` that contains several objects, where each object represents a course and includes information about its teacher and title.
const courses = [
    { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React" },
    { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
    { teacher: "Scott Moss", course: "Intro to Node.js" },
  ];
  
  // Use the `push()` method to add a new course object to the end of the `courses` array.
  courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });
  
  // Log the `courses` array to the console to show the new course object has been added.
  console.log(courses);
  
  // Modify the third element in the `courses` array to change the course title from "Complete Intro to React" to "Complete Intro to Databases".
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };
  
  // Log the `courses` array to the console again to show the modification.
  console.log(courses);

////////////////////////////////////////
//  11 Iterating Through an Array
////////////////////////////////////////

// Simplest way to do for loop arrays
const calvinArray = [
    "Calvin"
    , "Ga Yun"
    ,"Noah"

];


for (i=0; i<calvinArray.length; i++) {
    console.log(calvinArray[i]);

};



//forEach example


function logName (name) {
    console.log(name);

}

calvinArray.forEach(logName);




