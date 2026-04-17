// valeur de la largeur ( et aussi de la hauteur) de l ’image d ’un smiley
SMILEY_SIZE=48;
/* Mise en place du gestionnaire d ’´ev´enements sur l ’´e l ´ement input */
const bouton = document.getElementById("bouton");

const setupListeners = function () {
const input = document . getElementById("nombre" ) ;
input . addEventListener ( "input" , dessine ) ;
bouton.addEventListener("click", effaceZoneDessin);
}
/*
∗ Vide l e contenu d ’un ´e l ´ement html
∗ @param {HTMLElement} element − ´e l ´ement dont l e contenu HTML doit ˆe tre vid´e
*/
const effaceZoneDessin = function (){
    const element = document.getElementById("dessin");
enfant=element . childNodes  ;
element . innerHTML = "" ; /*ou encore parcourir les enfants a l'envers ou encore utiliser une boucle while */
}
/*Fonction principale permettant l e remplissage de la zone dessin
en fonction du nombre d ’images souhaitees */
const dessine = function () {
const dessin = document . getElementById("dessin" ) ;
effaceZoneDessin ( dessin ) ;
const val = parseInt (document . getElementById("nombre" ) . value ) ;
// TODO : R´ecup´e rer l e s valeurs enti`e res correspondants
// `a la largeur et `a la hauteur de l ’´e l ´ement dessin
divWidth = parseInt ( window . getComputedStyle ( dessin ) . width ) ;
divHeight = parseInt ( window . getComputedStyle ( dessin ) . height ) ;
for ( let i = 0; i < val ; i = i+1) {
let x = position (divWidth ) ;
let y = position ( divHeight ) ;
let smiley = creeImage(x , y ) ;
//TODO : mettre en place l ’abonnement de l ’image
// `a la fonction effaceSmiley s i l ’image est cliqu´ee
smiley . addEventListener ( "click" , effaceSmiley ) ;
//TODO : ajouter l ’image cr´e´e `a la bonne place dans l ’ arbre DOM
dessin . appendChild ( smiley ) ;

}
}
/*∗ Supprime de l ’ arbre DOM l ’´e l ´ement c i b l e auquelle cette fonction a ´et´e associ´ee */
const effaceSmiley = function (){
parent=this.parentNode ;
parent.removeChild( this ) ;
}
/*∗
∗ Cr´e´e un ´e l ´ement HTML de type img repr´esentant un smiley
∗ @param {Number} x − abscisse de l ’ origine de l ’image
∗ @param {Number} y − ordonn´ee de l ’ origine de l ’image
∗ @returns {HTMLElement} ´e l ´ement image
*/
const creeImage = function (x , y){
let img = document . createElement ( "img" ) ;
img.src = "smiley.png" ;
console.log (img.src ) ;
img.style.width = SMILEY_SIZE + "px" ;
img.style.height = SMILEY_SIZE + "px" ;
// ✅ AJOUT : appliquer les coordonnées
    img.style.position = "absolute";
    img.style.left = x + "px";
    img.style.top = y + "px";
return img ;
}
/*∗
∗ Calcule une coordonn´ee ( abscisse ou ordonn´ee) d ’une image smiley
∗ qui sera plac´ee dans l e zone de dessin .
∗ La coordonn´ee de l ’ origine (en haut `a gauche) de l ’image doit ˆe tre comprise
∗ dans l e s l i m i t e s de la zone de dessin et l ’image ne doit ni d´epasser en largeur
∗ (pour l ’ abscisse ) ni en hauteur(pour l ’ordonn´ee)de cette zone
∗ @param {Number} divSize − largeur (ou hauteur car ´equivalente ) de la zone de dessin
∗ @returns {Number} coordonn´ee enti`e re de l ’image a positionner
*/
const position= function ( divSize ){
    const size = Math.random();
    return (size*(divSize-SMILEY_SIZE)) ;

}
/////////////////////////////////////////////////////////
/* Appel de la fonction d ’ i n i t i a l i s a t i o n des ´ev´enements*/
/////////////////////////////////////////////////////////
setupListeners() ;
