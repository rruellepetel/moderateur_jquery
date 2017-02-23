// Déclaration des variables
var messageElement = document.getElementById('message');
var modererElement = document.getElementById('moderer');
var valeur = messageElement.value;
// Déclaration/modifications des chaines de caractères
valeur = valeur.replace(/:'\)/g , "--");
valeur = valeur.replace(/:\)/g , "--");
valeur = valeur.replace(/:D/g , "--");
//Déclaration résultat
var resultatElement = document.getElementById('resultat');
//Fonction remplacement
function replaceEmoticons(element){
    //affichage du résultat dans la case
    resultatElement.value += valeur;
};
