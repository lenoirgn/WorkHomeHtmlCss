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