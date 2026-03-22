const valInput = document.getElementById("delai");
const Button = document.getElementById("bouton");
const btnIcon = document.getElementById("btnIcon");
// const lectureButton = document.getElementById("Lecture");
// const stopButton = document.getElementById("Stop");
let indiceImage = 0;
let montimer = null;

function setuplisteners() {
    valInput.addEventListener('input', recupereValeurInput);
    Button.addEventListener("click", lectureStopDiaporama);
    // lectureButton.addEventListener("click", lectureDiaporama);
    //stopButton.addEventListener("click", stopDiaporama);
}
function lectureStopDiaporama() {
    if (montimer) {
        stopDiaporama();
        btnIcon.src = "images/lecture.png";
    } else {
        lectureDiaporama();
        btnIcon.src = "images/stop.png";
    }
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
    const info = document.getElementById("info");
    info.textContent = (indiceImage + 1) + "/" + tabImages.length;
}

function afficheNomImage() {
    const nomImage = tabImages[indiceImage].split("/").pop(); 
    document.getElementById("nomImage").textContent = nomImage;
}


function imageSuivante(){
    indiceImage=(indiceImage+1)%tabImages.length;
    afficheImage(indiceImage);
    afficheinfo();
    afficheNomImage();
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

setuplisteners();
afficheinfo();
afficheNomImage();
