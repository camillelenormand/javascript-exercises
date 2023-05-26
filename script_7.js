// script_7.js

// Chatbot

document.body.style.background = "black";
document.body.style.color = "white";
document.body.style.fontFamily = "monospace";
document.body.style.fontSize = "1.5rem";
document.body.style.textAlign = "center";

document.body.innerHTML = `
  <h1>Chatbot</h1>
  <p>Ask me a question!</p>
`;

const input = document.createElement("input");
const button = document.createElement("button");


input.style.width = "50%";
input.style.height = "2rem";
input.style.fontSize = "1.5rem";
input.style.borderRadius = "0.5rem";
input.style.border = "none";
input.style.outline = "none";
input.style.padding = "0.5rem";
input.style.margin = "1rem auto";
input.style.display = "block";
input.style.textAlign = "center";
input.style.fontFamily = "monospace";


button.style.width = "50%";
button.style.height = "3rem";
button.style.fontSize = "2rem";
button.style.borderRadius = "0.5rem";
button.style.border = "none";
button.style.outline = "none";
button.style.padding = "5 rem";
button.style.margin = "1rem auto";
button.style.display = "block";
button.textContent = "Ask";
button.style.fontFamily = "monospace";
button.style.cursor = "pointer";
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.fontWeight = "bold";
button.style.textTransform = "uppercase";
button.style.letterSpacing = "0.1rem";
button.style.transition = "all 0.3s ease-in-out";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "white";
  button.style.color = "black";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "black";
  button.style.color = "white";

});

button.addEventListener("click", () => {
  button.style.backgroundColor = "black";
  button.style.color = "white";
});




document.body.append(input, button);

let question = input.value;
let answer = document.createElement("p");
document.body.append(answer);

answer.style.fontSize = "1.5rem";
answer.style.fontFamily = "monospace";
answer.style.margin = "1rem auto";
answer.style.width = "50%";
answer.style.textAlign = "center";
answer.style.borderRadius = "0.5rem";
answer.style.padding = "0.5rem";
answer.style.backgroundColor = "black";
answer.style.color = "white";


button.addEventListener("click", () => {
  question = input.value;

  if (question.endsWith("?")) {
    answer.textContent = "Yeah, sure...";
  } else if (!question) {
    answer.textContent = "Are you okay?";
  } else if (question === question.toUpperCase()) {
    answer.textContent = "Calm down...";
  } else if (question.includes("Fortnite")) {
    answer.textContent = "Do you want to play Fortnite with me?";
  } else {
    answer.textContent = "I don't understand...";
  }
});





// let question = prompt("Hello, I am your chatbot. Ask me a question!");



// while (true) {
//   let question = prompt("Hello, I am your chatbot. Ask me a question!");

//   if (question.endsWith("?")) {
//     console.log("Yeah, sure...");
//   } else if (!question) {
//     console.log("Are you okay?");
//   } else if (question === question.toUpperCase()) {
//     console.log("Calm down...");
//   } else if (question.includes("Fortnite")) {
//     console.log("Do you want to play Fortnite with me?");
//   } else {
//     console.log("I don't understand...");
//   }
// }
