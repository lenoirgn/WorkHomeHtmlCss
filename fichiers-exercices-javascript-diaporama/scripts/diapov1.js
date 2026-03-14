let indiceImage=0;
const bouton=document.getElementById("next");
const boutonPrev=document.getElementById("prev");
function setupListeners(){
    bouton.addEventListener("click",imageSuivante);
    boutonPrev.addEventListener("click", imagePrecedente);
}

function afficheImage (indiceImage){
    const images=document.getElementById("diapo");
    images.src=tabImages[indiceImage];
}

function imageSuivante(){
    indiceImage=(indiceImage+1)%tabImages.length;
    afficheImage(indiceImage);
}
function imagePrecedente() {
    indiceImage = (indiceImage - 1 + tabImages.length) % tabImages.length;
    afficheImage(indiceImage);
}
setupListeners();
