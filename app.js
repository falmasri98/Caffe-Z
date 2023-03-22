
// let name = prompt("Please enter your name:");


// let gender = prompt("Please enter your gender :");

// function welcomeCoffee(){


// while (gender !== "male" && gender !== "female") {
//   gender = prompt("Please enter a valid gender (male or female):").toLowerCase();
// }


// if (gender === "male") {
// alert("Welcome, Mr " + name + "!");
// } else if (gender === "female") {
// alert("Welcome, Ms " + name + "!");
// } else {
// alert("Welcome, " + name + "!");
// }
// }

// welcomeCoffee();

// let age=prompt("Please enter your age");

// let drinkType = prompt("Would you like a hot or cold drink?");
// let drinkName = prompt("What drink would you like to order?");

// alert("Your " + drinkType + " " + drinkName + " is being prepared.");

// const userAnswers = [name, gender, drinkType, drinkName];

// userAnswers.push("new value");

// for (let i = 0; i < userAnswers.length; i++) {
//   console.log(userAnswers[i]);}
  
// console.log(name + " ordered a " + drinkType + " " + drinkName + ".");






// const div1 = document.createElement("div");
// let container = document.getElementById("menu");

// container.appendChild(div1);




// const par = document.createElement("p");

// let parname =document.createTextNode(name);

// div1.appendChild(par);
// par.appendChild(parname);


// const unlist = document.createElement("ul");
// par.appendChild(unlist);



// const li1 = document.createElement("li");
// let ligender =document.createTextNode(gender);
// unlist.appendChild(li1);
// li1.appendChild(ligender);


// const li2 = document.createElement("li");
// let liAge =document.createTextNode(age);
// unlist.appendChild(li2);
// li2.appendChild(liAge);


// const li3 = document.createElement("li");
// let lidrink =document.createTextNode(`Your drink is ${drinkType} ${drinkName}`);
// unlist.appendChild(li3);
// li3.appendChild(lidrink);


const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const userAnswers = [];

  const name = event.target.elements["username"].value;
  userAnswers.push(name);

  const age = event.target.elements["age"].value;
  userAnswers.push(age);
  
   const drinkName = event.target.elements["drinkName"].value;
  userAnswers.push(drinkName);

  // const drinkType = event.target.elements["drinkType"].value;
  // userAnswers.push(drinkType);

  const drinkTemp = event.target.elements["drinkTemp"].checked ? "cold" : "hot";
  userAnswers.push(drinkTemp);

  console.log(userAnswers);

  const menu = document.getElementById("menu");

  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  // const li3 = document.createElement("li");
  const li4 = document.createElement("li");
    const li5 = document.createElement("li");


  li1.textContent = `Username: ${name}`;
  li2.textContent = `Age: ${age}`;
  // li3.textContent = `Drink Type: ${drinkType}`;
 // li4.textContent = `Drink Type: ${drinkTemp}`;
  li5.textContent = `Drink Name: ${drinkName}`;

  ul.appendChild(li1);
  ul.appendChild(li2);
  // ul.appendChild(li3);
 // ul.appendChild(li4);
    ul.appendChild(li5);

  div.appendChild(ul);
  menu.appendChild(div);
  form.reset();
});

