// cibles.js
const TARGET_WIDTH = 40;
const TARGET_HEIGHT = 40;
 const buttonStart = document.getElementById("start")
function alea(n){
  return Math.floor((Math.random())*n)
}
function setupListeners(){
  buttonStart.addEventListener("click", createAllTargets)
  
}


function  createOneTarget(){
    const div = document.createElement("div")
    div.className = "target"

    const field = document.getElementById("field")
    field.appendChild(div)
    div.addEventListener("click", destroyTarget);
    
    const largueur = parseInt (window.getComputedStyle(field).width) ;
    const hauteur = parseInt( window.getComputedStyle(field).height);
    
    
    div.style.top=alea(largueur-TARGET_WIDTH)+"px"
    div.style.left=alea(hauteur-TARGET_HEIGHT)+"px"
}


function createAllTargets(){
  const nbTargets = parseInt(document.getElementById("nbtargets").value)
  const reste=document.getElementById("remaining")
  reste.textContent=nbTargets
  for(let i=0; i<nbTargets; i++){
    createOneTarget()
  }
  const startBtn = document.getElementById("start");
  startBtn.disabled = true;
}

function destroyTarget(){
  this.remove()
  const reste = document.getElementById("remaining")
  reste.textContent = parseInt(reste.textContent) - 1
  if (reste.textContent === "0") {
    const startBtn = document.getElementById("start");
    startBtn.disabled = false;
  }
}
setupListeners()

