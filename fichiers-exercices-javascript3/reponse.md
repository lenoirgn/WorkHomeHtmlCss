Exercice1:
2.  
``` function touVerts(para){
  const lesElements = document.getElementsByTagName(para);
  console.log(lesElements)
 for (let i = 0; i < lesElements.length; i++) {
 lesElements[i].style.color="green"
}
}
```
4.  
```function tousVerts(elem, noeud){
  
     const noeuds = document.getElementById(noeud);
    const lesElements = noeuds.getElementsByTagName(elem);
    for (let ele of lesElements)
      {
        ele.style.color = "blue";
      }
}
```
5. 
```
function tousVerts(elem, noeud){
  if (!noeud){
     const noeuds = document.getElementById(noeud);
    const lesElements = noeuds.getElementsByTagName(elem);
    for (let ele of lesElements)
      {
        ele.style.color = "blue";
      }

    
  }
  else{
    const lesElements = document.getElementsByTagName(elem);
    for (let ele of lesElements)
      {
        ele.style.color = "blue";
      }
    
  }

}
```

- Exercice3:

1. 
```
const listeElement=document.getElementsByClassName("droite");

for (el of listeElement){
  el.style.padding="20px";
}
```
2. 
```
const parent = document.getElementById("ajoncs");
const descendants = parent.getElementsByClassName("par");

for (let d of descendants) {
    d.style.border = "1px solid blue";
}
```

3. 
```
function cacherClasse(nomClasse) {
    const elements = document.getElementsByClassName(nomClasse);
  
    for (let el of elements) {
        el.style.display = "none";
    }
}
```
4. 
```
function devoileClasse(nomClasse) {
    const elements = document.getElementsByClassName(nomClasse);
    
    for (let el of elements) {
        el.style.display = "";
    }
}
```
- Exercice4:

1. 
```
NodeList [ div.par, div#timoleon.par ]
```
2. 
 l'element `div#ajoncs div.par` se met au fond `vert`

3. 

`div.par p:nth-of-type(1)`: selectionne le premier paragraphe a l'interieur de chaque `div` de la class `par`


```
const liElement=document.querySelectorAll("div.par p:nth-of-type(1)");

for (let el of liElement){
  el.style.fontWeight="bold";
}
```
4. 
```
const lesElements = document.querySelectorAll("div.par img.droite");
lesElements.length;
2 
```

l'image a pris la moitie de son conteneur 
