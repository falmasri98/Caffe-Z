let name = prompt("Please enter your name:");
let gender = prompt("Please enter your gender :");

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

console.log(name + " ordered a " + drinkType + " " + drinkName + ".");