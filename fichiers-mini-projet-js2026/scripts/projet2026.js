// VOTRE NOM A COMPLETER ICI

// ===  variables globales === 

// constantes
const MAX_QTY = 9;

//  tableau des produits à acheter
const cart = []
// total actuel des produits dans le panier
let total = 0;
const listeCatalog = ["data/catalog2.js","data/catalog2.js"];
let indexCatalogue = 0;

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
	createButtonChangeCatalogue();

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
	// TODO : code incorrect : à modifier Q4 
	const figure = document.createElement("figure");
	const img = document.createElement("img");
	img.src=product.image;
	img.alt=product.name;
	figure.appendChild(img);
	return figure;
}


/** 
* @todo Q8
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
*/
const verifQuantity = function () {
	const valeur = parseInt(this.value);
	const index = parseInt(this.id);
	const panier = document.getElementById(index + "-order");

	if (valeur>MAX_QTY || valeur<=0 || isNaN(valeur)) {
		this.value="0";
		panier.style.opacity="0.25";
		/**a retirer plus tard pour verifier quelque chose */
		panier.removeEventListener("click",orderProduct);

	}
	else {
		panier.style.opacity="1";
		panier.addEventListener("click",orderProduct);
	}
}




const createDeleteButton = function (index) {
	const control = document.createElement("div");
	control.className = "controle";

	// Crée le bouton de commande
	const button = document.createElement("button");
	button.className = 'retirer';
	button.id = index + "-remove";
	button.addEventListener("click", deleteInCart);
	control.appendChild(button);

	return control;
}



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

	/** t'es obligé d'utiliser un textContent parce quantité c'est un selecteur css et nous on a besoin de sa valeur pour le modifier */
	/** vu que tu dois utiliser un textContent t'as plus le droit de faire total+= comme ici (total = total + (parseInt(quantite)*product.price);) sinon tu vas obtenir des valeurs elevees */
	/** et donc on actualise le prix comme ceci */
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
function createButtonVidePanier() {
	const panier = document.getElementById("panier");
	const button = document.createElement("button");
	const frere=document.getElementsByClassName("achats")[0];
	button.textContent = "Vider le panier";
	button.id="vider-panier";
	button.addEventListener("click", videPanier);
	panier.insertBefore(button, frere);
	
}

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



const videPanier = function() {
	const achats = document.getElementsByClassName("achats");
	while (achats[0].firstChild) {
		achats[0].removeChild(achats[0].firstChild);
	}
	total = 0;
	updateTotal();
	updateViderPanierButton();
}



function createButtonChangeCatalogue() {
    const boutiques = document.getElementById("boutique");
    const button = document.createElement("button");
    button.textContent = "Changer de catalogue";
    button.addEventListener("click", changeCatalogue);
    boutiques.insertBefore(button, boutiques.firstChild);
}


function changeCatalogue() {
    
}

// ====================  Exécuter l'initialisation ======================= 
/*Q1*/
console.log(document.readyState); // Vérification du chargement du DOM 
//("loading" not OK; "interactive" ou "loaded": OK)

init()
