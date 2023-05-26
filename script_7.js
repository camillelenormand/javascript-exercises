// script_7.js

// Chatbot

// Create a chatbot that will answer questions from the user.
// The chatbot will be able to answer 4 types of questions:
// - Questions ending with "?": "Yes. Of course!"
// - Questions without "?": "Are you okay?"
// - Questions in all caps: "Calm down..."
// - Questions containing the word "Fortnite": "Do you want to play Fortnite with me?"
// - All other questions: "I don't understand..."

// Style the page
document.body.style.background = "rgb(238,174,202)";
document.body.style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
document.body.style.color = "white";
document.body.style.fontFamily = "monospace";
document.body.style.fontSize = "1.5rem";
document.body.style.textAlign = "center";

// Create the page content
document.body.innerHTML = `
  <h1>Chatbot</h1>
  <p>Ask me a question!</p>
`;


// Create the input field and the button and the answer field
const input = document.createElement("input");
const button = document.createElement("button");
const answer = document.createElement("p");
let question = input.value;

// Append the elements to the page
document.body.append(input, button, answer);



// Style the elements
input.style.width = "40%";
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


button.style.width = "20%";
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


answer.style.fontSize = "1.5rem";
answer.style.fontFamily = "monospace";
answer.style.margin = "1rem auto";
answer.style.width = "50%";
answer.style.textAlign = "center";
answer.style.borderRadius = "0.5rem";
answer.style.padding = "3rem";
answer.style.backgroundColor = "white";
answer.style.color = "black";
answer.style.transition = "all 0.3s ease-in-out";
answer.style.fontWeight = "bold";

// Add an event listener to the button for mouseover
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "white";
  button.style.color = "black";
});

// Add an event listener to the button for mouseout
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "black";
  button.style.color = "white";
});

// Add an event listener to the button for click (to reset the button style)
button.addEventListener("click", () => {
  button.style.backgroundColor = "black";
  button.style.color = "white";
});

// Add an event listener to the button for click
button.addEventListener("click", () => {
  question = input.value;

  // If the question ends with "?"
  if (question.endsWith("?")) {
    answer.textContent = "Yeah, sure...";
    // If the question is empty
  } else if (!question) {
    answer.textContent = "Are you okay?";
    // If the question is in all caps
  } else if (question === question.toUpperCase()) {
    answer.textContent = "Calm down...";
    // If the question contains the word "Fortnite"
  } else if (question.includes("Fortnite")) {
    answer.textContent = "Do you want to play Fortnite with me?";
    // If the question is anything else
  } else {
    answer.textContent = "I don't understand...";
  }
});


