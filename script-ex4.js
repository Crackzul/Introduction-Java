// Exercice 4 — Pyramide avec boucles imbriquées
// Objectif : Afficher une pyramide de chiffres jusqu’à 25 lignes :

// for (let numeroLigne = 1; numeroLigne <= 25; numeroLigne++) {
//     let contenuLigne = "";
  
//     for (let nombreCourant = 1; nombreCourant <= numeroLigne; nombreCourant++) {
//       contenuLigne += nombreCourant + " ";
//     }
  
//     console.log(contenuLigne);
//   }

//   Version étoile pour visualiser différement 

// for (let numeroLigne = 1; numeroLigne <= 25; numeroLigne++) {
//     let contenuLigne = "";
  
//     for (let etoile = 1; etoile <= numeroLigne; etoile++) {
//       contenuLigne += "* ";
//     }
  
//     console.log(contenuLigne);
//   }

// Version bonus sapin (pour plus tard) :

// const nombreDeLignes = 25;

// for (let numeroLigne = 1; numeroLigne <= nombreDeLignes; numeroLigne++) {
//   let espaces = " ".repeat(nombreDeLignes - numeroLigne);
//   let etoiles = "* ".repeat(numeroLigne);

//   console.log(espaces + etoiles);
// }