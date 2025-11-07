// 1. Créer un tableau de fruits
let fruits = ["pomme", "banane", "cerise"];
console.log("Tableau initial :", fruits);


// 7. Tableau d’objets
let produits = [
  { nom: "Stylo", prix: 5 },
  { nom: "Cahier", prix: 15 },
  { nom: "Crayon", prix: 3 },
];

console.log("Liste des produits :");
produits.forEach((p) => console.log(`${p.nom} → ${p.prix} DH`));