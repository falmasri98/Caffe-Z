
let name = prompt("Please enter your name:");


let gender = prompt("Please enter your gender :");

function welcomeCoffee(){


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
}

welcomeCoffee();

let age=prompt("Please enter your age");

let drinkType = prompt("Would you like a hot or cold drink?");
let drinkName = prompt("What drink would you like to order?");

alert("Your " + drinkType + " " + drinkName + " is being prepared.");

const userAnswers = [name, gender, drinkType, drinkName];

userAnswers.push("new value");

for (let i = 0; i < userAnswers.length; i++) {
  console.log(userAnswers[i]);}
  
console.log(name + " ordered a " + drinkType + " " + drinkName + ".");






const div1 = document.createElement("div");
let container = document.getElementById("menu");

container.appendChild(div1);




const par = document.createElement("p");

let parname =document.createTextNode(name);

div1.appendChild(par);
par.appendChild(parname);


const unlist = document.createElement("ul");
par.appendChild(unlist);



const li1 = document.createElement("li");
let ligender =document.createTextNode(gender);
unlist.appendChild(li1);
li1.appendChild(ligender);


const li2 = document.createElement("li");
let liAge =document.createTextNode(age);
unlist.appendChild(li2);
li2.appendChild(liAge);


const li3 = document.createElement("li");
let lidrink =document.createTextNode(`Your drink is ${drinkType} ${drinkName}`);
unlist.appendChild(li3);
li3.appendChild(lidrink);



