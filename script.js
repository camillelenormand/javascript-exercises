// script_1.js

console.log("Bonjour Monde");

let firstName = "";

firstName = prompt("What is your name?");

let statement = `Hello ${firstName}`;

console.log(statement);

// script_2.js

let number = prompt("Enter a number to calculate its factorial:");

function factorialize(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}

let factorial = factorialize(number);
console.log(`The factorial of ${number} is ${factorial}.`);


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

// script_4.js

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 :");
for (let i = 0; i < entrepreneurs.length; i++) {
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last);
  }
}

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs  :");
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " : " + (2023 - entrepreneurs[i].year));
}

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille :");
let entrepreneursSorted = entrepreneurs.sort(function (a, b) {
  return a.last.localeCompare(b.last);
}
);
console.log(entrepreneursSorted);

// script_5.js

let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let rentedOnce = true;
for (let i = 0; i < books.length; i++) {
  if (books[i].rented === 0) {
    rentedOnce = false;
  }
}
if (rentedOnce) {
  console.log("Oui, tous les livres ont été empruntés au moins une fois.");
}
else {
  console.log("Non, certains livres n'ont jamais été empruntés.");
}

console.log("Quel est livre le plus emprunté ?");
let mostRented = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].rented > mostRented.rented) {
    mostRented = books[i];
  }
}
console.log(mostRented.title);

console.log("Quel est le livre le moins emprunté ?");
let leastRented = books[0];
for (let i = 1; i < books.length; i++) {
  if (books[i].rented < leastRented.rented) {
    leastRented = books[i];
  }
}
console.log(leastRented.title);

console.log("Trouve le livre avec l'ID: 873495");
for (let i = 0; i < books.length; i++) {
  if (books[i].id === 873495) {
    console.log(books[i].title);
  }
}

console.log("Supprime le livre avec l'ID: 133712");
for (let i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    books.splice(i, 1);
  }
}
console.log(books);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
let booksSorted = books.sort(function (a, b) {
  return a.title.localeCompare(b.title);
}
);
console.log(booksSorted);

// script_6.js

// Liste des codons associés à chaque acide aminé:

// Sérine : UCU, UCC, UCA, UCG, AGU, AGC
// Proline : CCU, CCC, CCA, CCG
// Leucine : UUA, UUG
// Phénylalanine : UUU, UUC
// Arginine : CGU, CGC, CGA, CGG, AGA, AGG
// Tyrosine : UAU, UAC

// Voici 2 ARN à traduire en protéines :
// CCGUCGUUGCGCUACAGC
// CCUCGCCGGUACUUCUCG


const ARN1 = "CCGUCGUUGCGCUACAGC";
const ARN2 = "CCUCGCCGGUACUUCUCG";


function translate(ARN) {
  const codons = ARN.match(/.{1,3}/g);
  let protein = "";
  const aminoAcids = {
    UCU: "Sérine-",
    UCC: "Sérine-",
    UCA: "Sérine-",
    UCG: "Sérine-",
    AGU: "Sérine-",
    AGC: "Sérine-",
    CCU: "Proline-",
    CCC: "Proline-",
    CCA: "Proline-",
    CCG: "Proline-",
    UUA: "Leucine-",
    UUG: "Leucine-",
    UUU: "Phénylalanine-",
    UUC: "Phénylalanine-",
    CGU: "Arginine-",
    CGC: "Arginine-",
    CGA: "Arginine-",
    CGG: "Arginine-",
    AGA: "Arginine-",
    AGG: "Arginine-",
    UAU: "Tyrosine-",
    UAC: "Tyrosine-",
  };
  codons.forEach((codon) => {
    protein += aminoAcids[codon];
  });

  return protein.slice(0, -1);

}


console.log("ARN1 : " + ARN1);
console.log("Protéine : " + translate(ARN1));
console.log("ARN2 : " + ARN2);
console.log("Protéine : " + translate(ARN2));


// script_7.js

// Chatbot

let question = prompt("Bonjour, je suis votre chatbot. Posez-moi une question !");
let lastChar = question[question.length - 1];
if (lastChar === "?") {
  console.log("Ouais Ouais...");
} else if (question === question.toUpperCase()) {
  console.log("Pwa, calme-toi...");
} else if (question.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (question === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}

