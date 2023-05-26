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