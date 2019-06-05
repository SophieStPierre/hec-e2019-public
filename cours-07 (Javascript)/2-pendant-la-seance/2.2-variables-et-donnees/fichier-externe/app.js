// 3. Définissez la variable "paysExpedition" 
var paysExpedition = "USA";

// 4. Définissez la variable "paysLivraisonIncluse"
var paysLivraisonIncluse = [ "USA", "JPN", "GHA" ];

// 5. Définissez une variable "tarifLivraisonNonIncluse"
var tarifLivraisonNonIncluse = 25;

// 6. Écrivez le contenu de chacune des variables dans la console
console.log("Le pays d'expédition est " + paysExpedition);
console.log("Les pays pour lesquels la livraison est incluse sont " + paysLivraisonIncluse);
console.log("Le tarif pour la livraison non incluse est " + tarifLivraisonNonIncluse);

// 7. Ajoutez un nouveau pays au tableau
paysLivraisonIncluse.push("IND");
console.log("Les pays pour lesquels la livraison est incluse sont " + paysLivraisonIncluse);

console.log("je suis dans app.js");