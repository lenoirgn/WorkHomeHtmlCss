/*∗
∗ R´ecup´e re puis renvoie l e s entr´ees des ´e l ´ements input
∗ @returns {Array} − tableau de valeurs
*/
const getColors = function (){
//TODO
const colors=document.getElementsByTagName("input");
let list=[];
for (const color of colors){
list.push(color.value);
}
return list;
}
/*∗
∗ Change la couleur de l ’´e l ´ement d ’ id ’ color ’ s i l e s entr´ees des ´e l ´ements input sont valides .
∗ Puis , met `a jour l e contenu de l ’´e l ´ement d ’ id ’ warning ’ .
∗*/
const changeColor = function (){
const values = getColors ( ) ;
console.log(values);
console.log(checkValues(values));
if (checkValues( values )){
//TODO
const rgb = "rgb("+values[0]+","+values[1]+","+values[2]+")";
element=document.getElementById("color");
element.style.backgroundColor = rgb;
document.getElementById("warning").textContent=rgb }
else {
const warning = document.getElementById("warning");
warning.textContent = "Invalid";
}
}
/*∗∗
∗ D´etermine s i l e s ´e l ´ements du tableau repr´esentent des valeurs valides
∗ pour l e s composantes RGB d ’une couleur .
∗ @param {Array} l i s t − tableau
∗ @returns {Boolean} ’ true ’ s i toutes l e valeurs sont valides , ’ f a l s e ’ sinon
∗*/
const checkValues = function ( list ){
return checkTypes( list ) && checkNumbers( list ) ;
}
const checkTypes = function ( list ){
let types = true ;
for (const n of list ){
if (isNaN(n)){
types = false ;
}
}
return types ;
}
/*∗
∗ D´etermine s i l e s nombres d ’un tableau sont entiers
∗ et s i leurs valeurs sont comprises entre 0 et 255 (bornes incluses )
∗ @param {Array} l i s t − tableau de nombres
∗ @returns {Boolean} ’ true ’ s i l e s nombres v´e r i f i e n t l e s conditions pr´ec´edentes ’ f a l s e ’ sinon
∗*/
const checkNumbers = function(list){
    let numbers = true;
    for (const n of list){
        if (! (parseInt(n) == n && n >= 0 && n <= 255))
            numbers = false;
    }
    return numbers;
}
const button = document.getElementById("valide");
button.addEventListener("click", changeColor ) ;