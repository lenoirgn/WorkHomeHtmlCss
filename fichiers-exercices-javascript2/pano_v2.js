function setupListeners(){
     const pano = document.getElementById("panoramique"); // ← il manquait ça !

    pano.addEventListener("mouseover",changePano);
pano.addEventListener("mouseout",changePano2);

}
// window.addEventListener("load",setupListeners);

function changePano() {
    // On récupère l'élément <img> ayant id="panoramique"
    const pano = document.getElementById("panoramique");

    
    if (!pano) {
        console.error("Aucun élément avec id 'panoramique' trouvé.");
        return;
    }

    // On change la source de l'image
    pano.src = "images/panoramique2.jpg";
}
function changePano2() {
    // On récupère l'élément <img> ayant id="panoramique"
    const pano = document.getElementById("panoramique");

    
    if (!pano) {
        console.error("Aucun élément avec id 'panoramique' trouvé.");
        return;
    }

    // On change la source de l'image
    pano.src = "images/panoramique.jpg";
}

setupListeners();