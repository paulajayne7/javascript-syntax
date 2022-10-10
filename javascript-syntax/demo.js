// Q1
var myFirstName = "Paula";
var myLastName = "Cavender";
var myAge = 33;
var haveCat = true;

console.log(myFirstName, myAge);

// Q2
console.log(myAge + 5);

// Q3
console.log(myFirstName + myLastName);

// Q4
if (myFirstName == "Paula") {
  console.log("Your name is Paula");
}

// Q5
myFirstName = "Jasmine";
if (myFirstName == "Paula") {
  console.log("Your name is Paula");
} else if (myFirstName == "Jasmine") {
  console.log("You are a cat");
} else {
  console.log("You are not Paula or Jasmine the cat");
}

// Q6
var myFirstName = "Paula";
var myLastName = "Cavender";
if (myFirstName == "Paula" && myLastName == "Cavender") {
  console.log("Your full name is Paula Cavender");
} else if (myFirstName == "Jasmine") {
  console.log("You are a cat");
} else {
  console.log("You are not Paula or Jasmine the cat");
}

// Q7
var person = {
  name: "Alice",
  age: 6,
  favColor: "pink",
};

console.log(person.name);

// Q8
var days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

console.log(days[4]);
