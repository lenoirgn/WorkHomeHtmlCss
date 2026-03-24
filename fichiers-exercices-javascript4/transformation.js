const ajout=document.getElementById("ajouter");
const raz=document.getElementById("raz");
// images/image.jpg
function setupListeners(){
    ajout.addEventListener("click",createImg);
    raz.addEventListener("click",toutSupprimer);

    
}

function toutSupprimer() {
    const stock = document.getElementById("stock");
    const images = document.getElementById("images");
    const tableau=Array.from(images.children);

    // Tant qu'il reste un enfant, on supprime le premier
    while (stock.firstChild) {
        stock.removeChild(stock.firstChild);
    }
   for (const enfant of tableau) {
    enfant.addEventListener("click",ajouterStock, { once: true });
}
}

function supprimer(){
    const images=document.getElementById("images");
    const original=this.nextSibling; 
    images.removeChild(this);
    
    original.addEventListener("click",dupliquer, { once: true });
}
function createImg(){ 
    const images=document.getElementById("images");
    const url=window.prompt("Entrez l'URL de l'image :");

    const img=document.createElement("img");
    img.src=url;
    images.appendChild(img);
    //img.addEventListener("click",dupliquer, { once: true });
    img.addEventListener("click",ajouterStock, { once: true });
}
    
function dupliquer() {
    const copie = this.cloneNode(true); 
    copie.style.border="2px solid green";
    copie.style.width="150px";
    const images = document.getElementById("images"); 
    images.insertBefore(copie,this);
    copie.addEventListener("click",supprimer);

}
function ajouterStock(){
    const stock=document.getElementById("stock");
    const copie = this.cloneNode(true); 
    stock.appendChild(copie);
}

setupListeners();