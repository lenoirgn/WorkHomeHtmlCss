const valInput = document.getElementById("delai");
const lectureButton = document.getElementById("Lecture");
const stopButton = document.getElementById("Stop");
let indiceImage = 0;
let montimer = null;

function setuplisteners() {
    valInput.addEventListener('input', recupereValeurInput);

    lectureButton.addEventListener("click", lectureDiaporama);
    stopButton.addEventListener("click", stopDiaporama);
}
function afficheImage (indiceImage){
    const images=document.getElementById("diapo");
    images.src=tabImages[indiceImage];
}

function imageSuivante(){
    indiceImage=(indiceImage+1)%tabImages.length;
    afficheImage(indiceImage);
}
function recupereValeurInput() {

    const input = document.getElementById("delai");
    const valeur =parseInt(input.value) ;
    return valeur;

}



function afficheinfo() {
    const image = document.getElementById("diapo");

    let indice=tabImages.indexOf(image.src);
   


    const info = document.getElementById("info");
    info.textContent = (indice >= 0 ? indice + 1 : "?") + "/" + tabImages.length;
}

function afficheImage (indiceImage){
    const images=document.getElementById("diapo");
    images.src=tabImages[indiceImage];
}

function imageSuivante(){
    indiceImage=(indiceImage+1)%tabImages.length;
    afficheImage(indiceImage);
    afficheinfo();
    afficheNomImage();
}
function afficheNomImage() {

    const image = document.getElementById("diapo");
    let indice=tabImages.indexOf(image.src);
    let Image=tabImages[indice];
    console.log(Image)
    const nomImage=Image.substring(7);
    const nomImageElement = document.getElementById("nomImage");
    nomImageElement.textContent = nomImage;
}
let montimer = null;
function lectureDiaporama() {
    montimer=window.setInterval(imageSuivante,recupereValeurInput()*1000);
    log.console(montimer)

    }

function lectureDiaporama() {
    const delai = recupereValeurInput();
    if (isNaN(delai) || delai <= 0) {
        alert("Veuillez entrer un délai valide (en secondes)");
        return;
    }

    montimer = setInterval(imageSuivante, delai * 1000);

}

function stopDiaporama() {
    clearInterval(montimer);
    montimer = null;
}

// Lancement au chargement
setuplisteners();
afficheinfo();
afficheNomImage();
