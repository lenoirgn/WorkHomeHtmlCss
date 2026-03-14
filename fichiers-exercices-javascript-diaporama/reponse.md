- Exercice1:
1. 
```
function alea(n) {
    return Math.floor(Math.random() * n);
}
```
2.  

```
function maxElement(tab) {
    const max = tab[0];          // on suppose le 1er élément comme max
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}
```
5. 
```
function nbOccurrences(tableau, valeur) {
    const compteur = 0;

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] === valeur) {
            compteur++;
        }
    }

    return compteur;
}
```
6. 
```
function removeElement(tableau, element) {
    const index = tableau.indexOf(element);

    if (index !== -1) {
        tableau.splice(index, 1);
    }

    return tableau;
}
```
- Exercice3:
```

var tabImages = ["images/image.jpg",
		 "images/image1.jpg",
		 "images/image2.jpg",
		 "images/image5.jpg",
		 "images/image8.jpg",
		 "images/image9.jpg",
		 "images/mer2.jpg",
		 "images/mer3.jpg"];

function afficheImage (indiceImage){
    const images=document.getElementById("diapo");
    images.src=tabImages[indiceImage];
}

function imageSuivante(){
    indiceImage=(indiceImage+1)%tabImages.length;
    afficheImage(indiceImage);
}
afficheImage(0);
let montimer=window.setInterval(imageSuivante,3000);

window.clearInterval(montimer);
```



