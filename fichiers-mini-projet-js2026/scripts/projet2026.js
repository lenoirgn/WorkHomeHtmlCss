// VOTRE NOM A COMPLETER ICI
/**
 * Projet JS 2026 : Boutique en ligne
 * Membres du groupe :
 * 1- Mamadou Radjaye Sow  
 * 2- NZOLA SARAH
 */
// ===  variables globales === 

// constantes
const MAX_QTY = 9;

//  tableau des produits à acheter
const cart = []
// total actuel des produits dans le panier
let total = 0;



// === initialisation au chargement de la page ===

/**
* Création du Magasin, mise à jour du total initial
* Mise en place du gestionnaire d'événements sur filter
*/
const init = function () {
	createShop();
	updateTotal();
	const filter = document.getElementById("filter");
	filter.addEventListener("keyup", filterDisplaidProducts);
	updateViderPanierButton();

}


// ==================== fonctions utiles ======================= 

/**
* Crée et ajoute tous les éléments div.produit à l'élément div#boutique
* selon les objets présents dans la variable 'catalog'
*/
const createShop = function () {
	const shop = document.getElementById("boutique");
	for(let i = 0; i < catalog.length; i++) {
		shop.appendChild(createProduct(catalog[i], i));
	}
}

/**
* Crée un élément div.produit qui posséde un id de la forme "i-produit" où l'indice i 
* est correpond au paramètre index
* @param {Object} product - le produit pour lequel l'élément est créé
* @param {number} index - l'indice (nombre entier) du produit dans le catalogue (utilisé pour l'id)
* @return {Element} une div.produit
*/
const createProduct = function (product, index) {
	// créer la div correpondant au produit
	const divProd = document.createElement("div");
	divProd.className = "produit";
	// fixe la valeur de l'id pour cette div
	divProd.id = index + "-product";
	// crée l'élément h4 dans cette div
	divProd.appendChild(createBlock("h4", product.name));
	
	// Ajoute une figure à la div.produit... 
	// /!\ non fonctionnel tant que le code de createFigureBlock n'a pas été modifié /!\ 
	divProd.appendChild(createFigureBlock(product));

	// crée la div.description et l'ajoute à la div.produit
	divProd.appendChild(createBlock("div", product.description, "description"));
	// crée la div.prix et l'ajoute à la div.produit
	divProd.appendChild(createBlock("div", product.price, "prix"));
	// crée la div.controle et l'ajoute à la div.produit
	divProd.appendChild(createOrderControlBlock(index));
	return divProd;
}


/** Crée un nouvel élément avec son contenu et éventuellement une classe
 * @param {string} tag - le type de l'élément créé (example : "p")
 * @param {string} content - le contenu html de l'élément a créé  (example : "bla bla")
 * @param {string} [cssClass] - (optionnel) la valeur de l'attribut 'classe' de l'élément créé
 * @return {Element} élément créé
 */
const createBlock = function (tag, content, cssClass) {
	const element = document.createElement(tag);
	if (cssClass != undefined) {
		element.className =  cssClass;
	}
	element.innerHTML = content;
	return element;
}



/** Met à jour le montant total du panier en utilisant la variable globale total
 */
const updateTotal = function () {
	const montant = document.getElementById("montant");
	montant.textContent = total;
}

// ======================= fonctions à compléter =======================


/**
* Crée un élément div.controle pour un objet produit
* @param {number} index - indice du produit considéré
* @return {Element}
* TODO : AJOUTER les gestionnaires d'événements
*/
const createOrderControlBlock = function (index) {
	const control = document.createElement("div");
	control.className = "controle";

	// crée l'élément input permettant de saisir la quantité
	const input = document.createElement("input");
	input.id = index + "-qte";
	input.type = "number";
	input.step = "1";
	input.value = "0";
	input.min = "0";
	input.max = MAX_QTY.toString();

	// TODO :  Q5 mettre en place le gestionnaire d'événément pour input permettant de contrôler les valeurs saisies
	control.appendChild(input);
	input.addEventListener("input",verifQuantity);

	// Crée le bouton de commande
	const button = document.createElement("button");
	button.className = 'commander';
	button.id = index + "-order";
	control.appendChild(button);
	return control;
}


/** 
* Crée un élément figure correspondant à un produit
* @param {Object} product -  le produit pour lequel la figure est créée
* @return {Element}
*/
const createFigureBlock = function (product) {
	// TODO : 
	const figure = document.createElement("figure");
	const img = document.createElement("img");
	img.src=product.image;
	img.alt=product.name;
	figure.appendChild(img);
	return figure;
}
 

/** 
* @todo Q8
* ajoute le produit d'indice index et de quantité qty au panier  et 
* met la valeur du input de quantité à 0 et désactive le bouton de commande pour ce produit
*/

const orderProduct = function () {
	const idx = parseInt(this.id);
	const qty = parseInt(document.getElementById(idx + "-qte").value);
	
	if (qty > 0) {
		addProductToCart(idx, qty); // ajoute un produit au panier
		//TODO gérer la remise à zéro de la quantité après la commande 
		document.getElementById(idx + "-qte").value="0";
		// et tous les comportements du bouton représentant le chariot 
		/** desactivation du bouton apres la remise a zero */
		this.style.opacity="0.25";
		this.removeEventListener("click", orderProduct);
	}
	
}


// ======================= fonctions à coder =======================

/**
* @todo Q6- Q7
|* Verifie que la quantité saisie dans le champ de saisie est valide (comprise entre 1 et MAX_QTY)
|* et active ou désactive le bouton de commande en conséquence
*/
const verifQuantity = function () {
	const valeur = parseInt(this.value);
	const index = parseInt(this.id);
	const panier = document.getElementById(index + "-order");

	if (valeur>MAX_QTY || valeur<=0 || isNaN(valeur)) {
		this.value="0";
		panier.style.opacity="0.25";

	}
	else {
		panier.style.opacity="1";
		panier.addEventListener("click",orderProduct);
	}
}
/** Cette fonction crée un bouton de suppression pour un produit dans le panier, avec un gestionnaire d'événement pour supprimer 
 *  le produit du panier lorsqu'on clique dessus
 * @param {number} index - l'indice du produit dans le catalogue
 * @return {Element} un élément div.controle contenant le bouton de suppression
 */
const createDeleteButton = function (index) {
	const control = document.createElement("div");
	control.className = "controle";

	// Crée le bouton de corbeille
	const button = document.createElement("button");
	button.className = 'retirer';
	button.id = index + "-remove";
	button.addEventListener("click", deleteInCart);
	control.appendChild(button);

	return control;
}

/**
 * cette fonction supprime un produit du panier, met à jour le total et 
 * met à jour le bouton "Vider le panier" en conséquence.
 */

function deleteInCart(){
	const enfant=document.getElementById(parseInt(this.id)+"-achat");
	const parent=enfant.parentNode;
	quantite=enfant.querySelector(".quantite");
	parent.removeChild(enfant);
	total=total-(parseInt(quantite.textContent)*catalog[parseInt(this.id)].price);
	updateTotal();
	updateViderPanierButton();

}



/**
* @todo Q9
* @param {number} index
* @param {number} qty
*/
const addProductToCart = function (index, qty) {
	//TODO
	/** pour ne pas rajouter plusieurs fois un element */
	let product = catalog[index];
	const existance = document.getElementById(index+"-achat");
	if (existance) {
		const quantite = existance.querySelector(".quantite");
		let nouvelleQuantite = parseInt(quantite.textContent) + qty;
		if (nouvelleQuantite > 9) {
			nouvelleQuantite = 9;
		}
		quantite.textContent = nouvelleQuantite;

		total = (parseInt(quantite.textContent)*product.price);
		
	}
	else {
		const element = document.createElement("div");
		element.className = "achat";
		element.id = index + "-achat";
		/** si l'élement n'existait pas au debut il faut mettre le prix une premiere fois */
		total = total + (product.price*qty);
		element.appendChild(createFigureBlock(product));
		element.appendChild(createBlock("h4",product.description));
		element.appendChild(createBlock("div", qty, "quantite"));
		element.appendChild(createBlock("div", product.price, "prix"));
		element.appendChild(createDeleteButton(index));
		const achats = document.getElementsByClassName("achats");
		
		achats[0].appendChild(element);
	}
	
	updateTotal();
	updateViderPanierButton();

}


/**
* @todo Q10
*/
const filterDisplaidProducts = function() {
    //  récupérer le texte saisi dans le filtre
    const filterText = document.getElementById("filter").value.toLowerCase();

    /* récupérer tous les produits */
    const products = document.getElementsByClassName("produit");

    /* parcourir tous les produits */
    for (let i = 0; i < products.length; i++) {
        /* récupérer le nom du produit (h4 dans la div.produit) */
		const product=products[i];
        const productName = product.querySelector("h4").textContent.toLowerCase();

        /* vérifier si le nom contient le texte du filtre */
        if (productName.indexOf(filterText) !== -1) {
            product.style.display = "";  // afficher
        } else {
            product.style.display = "none";   // masquer
        }
    }
};

/**
 * elle crée un bouton "Vider le panier" et l'ajoute à la section panier, juste avant la section des achats
 * et lui ajoute un gestionnaire d'événement pour vider le panier lorsqu'on clique dessus
 */
function createButtonVidePanier() {
	const panier = document.getElementById("panier");
	const button = document.createElement("button");
	const frere=document.getElementsByClassName("achats")[0];
	button.textContent = "Vider le panier";
	button.id="vider-panier";
	button.addEventListener("click", videPanier);
	panier.insertBefore(button, frere);
	
}
/**
 * cette fonction vérifie si le total du panier est supérieur à 0, et si c'est le cas, elle crée le bouton "Vider le panier" s'il n'existe pas déjà.
 *  Si le total est égal à 0, elle supprime le bouton s'il existe.
 */
function updateViderPanierButton() {
    const btn = document.getElementById("vider-panier");

    if (total > 0) {
        if (!btn) {
            createButtonVidePanier();
        }
    } else {
        if (btn) {
            btn.remove();
        }
    }
}

/**
 *  cette fonction supprime tous les éléments du panier, remet le total à 0,
 *  met à jour l'affichage du total et met à jour le bouton "Vider le panier" en conséquence.
 */

const videPanier = function() {
	const achats = document.getElementsByClassName("achats");
	while (achats[0].firstChild) {
		achats[0].removeChild(achats[0].firstChild);
	}
	total = 0;
	updateTotal();
	updateViderPanierButton();
}


// ====================  Exécuter l'initialisation ======================= 
/*Q1*/
console.log(document.readyState); // Vérification du chargement du DOM 
//("loading" not OK; "interactive" ou "loaded": OK)

init()
