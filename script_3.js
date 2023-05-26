// script_3.js

stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let string = "";

for (let i = 1; i <= stage; i++) {
  // printing spaces
  for (let j = 0; j < stage - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);