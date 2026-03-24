// cibles.js
const TARGET_WIDTH = 40;
const TARGET_HEIGHT = 40;

function alea(n){
  return Math.floor((Math.random())*n)
}

function  createOneTarget(){
    const div = document.createElement("div")
    div.className = "target"

    const field = document.getElementById("field")
    const largueur = parseInt (window.getComputedStyle(field).width) ;
    const hauteur = parseInt( window.getComputedStyle(field).height);
    
    const larBallon=parseInt(window.getComputedStyle(div).width)
    const hauBallon=parseInt(window.getComputedStyle(div).height)
    console.log(larBallon,hauBallon)
    div.style.top=alea()
}
createOneTarget()