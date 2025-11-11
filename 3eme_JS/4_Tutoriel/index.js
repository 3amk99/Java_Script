let produits = [
    { nom: "PC portable", prix: 900, image: "asset/1.jpg" },
    { nom: "Clavier mécanique", prix: 45, image: "asset/2.jpg" },
    { nom: "Souris sans fil", prix: 25, image: "asset/3.jpg" }
  ];
  
  let catalogue = document.getElementById("catalogue");
  
  produits.forEach(p => {
    let carte = document.createElement("div");
    carte.className = "carte";
    carte.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>Prix : ${p.prix} €</p>
    `;
    catalogue.appendChild(carte);
  });
  