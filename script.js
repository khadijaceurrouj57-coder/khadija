// function addition(a, b) {
//   return a + b;
// }

// let somme = addition(8, 5);
// console.log("La somme est : " + somme);



//   chaptre 9 
//  let age = 20;

// if (age < 18) {
//   console.log("Vous êtes mineur.");
// } else if (age === 18) {
//   console.log("Vous venez d’atteindre la majorité !");
// } else {
//   console.log("Vous êtes majeur.");
// }
//chaptre 10
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue; // sauter le 5
//   console.log("Nombre : " + i);
// }
//chaptre 7
// let nombre1 = 10;
// let nombre2 = 5;
// let somme = nombre1 + nombre2;
// console.log("La somme est : " + somme);
//chaptre 12
let competences = ["C1", "C3", "C2", "C1", "C8", "C2", "C1", "C5"];
function compterOccurrences(tableau, code) {
    let compteur = 0;
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] === code) {
        compteur++;
      }
    }
    return compteur;
  }
  let codeChoisi = prompt("Quel code veux-tu compter ? (ex: C1, C2, C3...)");
  let resultat = compterOccurrences(competences, codeChoisi);
  console.log("Le code " + codeChoisi + " apparaît " + resultat + " fois dans le tableau.");
