sun =document.getElementById("sun")
plus=document.getElementById("plus")
moins=document.getElementById("moins")

function setupListeners(){
    plus.addEventListener("click",agrandir)
    moins.addEventListener("click",reduire)
    sun.addEventListener("mouseover",changerImg)
    sun.addEventListener("mouseout",revenirImg)



}


function agrandir(){
  const Element=document.getElementById("sun")
 const proprietes = window.getComputedStyle(Element);
const taille=parseFloat(proprietes.width)+20;
if (taille<500){
Element.style.width=taille +"px"
}}

function changerImg(){
  const Element=document.getElementById("sun")
 Element.src="images/eclipse.jpg"

}
function revenirImg(){
  const Element=document.getElementById("sun")
 Element.src="images/soleil.jpg"

}

  

function reduire(){
  const Element=document.getElementById("sun")
 const proprietes = window.getComputedStyle(Element);
const taille=parseFloat(proprietes.width)-20;
if (taille>250){
Element.style.width=taille +"px"
}

  
}

setupListeners()