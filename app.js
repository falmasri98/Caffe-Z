let name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender :");

while (gender !== "male" && gender !== "female") {
  gender = prompt("Please enter a valid gender (male or female):").toLowerCase();
}


if (gender === "male") {
alert("Welcome, Mr " + name + "!");
} else if (gender === "female") {
alert("Welcome, Ms " + name + "!");
} else {
alert("Welcome, " + name + "!");
}

let drinkType = prompt("Would you like a hot or cold drink?");
let drinkName = prompt("What drink would you like to order?");

alert("Your " + drinkType + " " + drinkName + " is being prepared.");

const userAnswers = [name, gender, drinkType, drinkName];

userAnswers.push("new value");

for (let i = 0; i < userAnswers.length; i++) {
  console.log(userAnswers[i]);}
  
console.log(name + " ordered a " + drinkType + " " + drinkName + ".");