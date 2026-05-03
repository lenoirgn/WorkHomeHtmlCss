/**
 * initialisation de l'écouteur d'événement sur le bouton
 * d'id 'valide'
 */
const setupListeners = function(){
    const valide = document.getElementById('valide');
    valide.addEventListener('click', changeColor)
}

/**
 * Récupére puis renvoi les entrées des éléments input
 * @returns {Array} - tableau de valeurs
 */
const getColors = function(){
    const inputs = document.getElementsByTagName('input');
    const values = new Array();
    for (const input of inputs)
        values.push(input.value)
        // boucle for avec indice aussi possible ou tout autre boucle
    return values;
}

/**
 * Change la couleur de l'élément d'id 'color' si les entrées des éléments input sont valides.
 *  Puis, met à jour le contenu de l'élément d'id 'warning'.  
 */
const changeColor = function(){
    const values = getColors();
    const warning = document.getElementById('warning');
    if (checkValues(values)){
        const rgb = 'rgb(' +values[0]+ ',' +values[1]+ ',' +values[2]+')';
        warning.textContent = rgb;
        const color = document.getElementById('color');
        color.style.backgroundColor = rgb
        // 'rgb(' +values.join(',') +')
    }
    else warning.textContent = "ENTREES NON VALIDES";
}


/**
 * Détermine si les éléments du tableau représentent des valeurs valides
 * pour les composantes RGB d'une couleur.
 * @param {Array} list - tableau
 * @returns {Boolean} 'true' si toutes le valeurs sont valides, 'false' sinon
 */
const checkValues = function(list){
    return checkTypes(list) && checkNumbers(list);
}

/**
 * Détermine si l'écriture des éléments d'un tableau correspond à un nombre
 * @param {Array} list - tableau  
 * @returns {Boolean}  'true' si tous les éléments du tableau sont des nombres, 'false' sinon
 */
const checkTypes = function(list){
    let types = true;
    for (const n of list){
        if (isNaN(n)){
            types = false;
        }
    }
    return types;
}

/**
 * Détermine si les nombres d'un tableau sont entiers
 * et si leurs valeurs sont comprises entre 0 et 255 (bornes incluses) 
 * @param {Array} list - tableau de nombres
 * @returns {Boolean} 'true' si les nombres vérifient les conditions précédentes, 'false' sinon
 */
const checkNumbers = function(list){
    let numbers = true;
    for (const n of list){
        if (! (parseInt(n) == n && n >= 0 && n <= 255))
            numbers = false;
    }
    return numbers;
}

setupListeners();