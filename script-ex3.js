// // Méthode 1 :

// let a = 5;
// let b = 10;
// let temp = a; // je garde le 5 de a en sécurité (variable temporaire)

// a = b;        // a prend la valeur de b (10)
// b = temp;     // b récupère la valeur qu'avait a (5)

// console.log("a =", a); // 10
// console.log("b =", b); // 5

// Méthode 2 (Moderne : "destructuring assignment/affectation par déstructuration")

// let a = 5;
// let b = 10;

// [a, b] = [b, a]; // on échange les deux d’un coup

// console.log("a =", a); // 10
// console.log("b =", b); // 5



