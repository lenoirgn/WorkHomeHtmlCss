const focus=document.getElementById("focus");
const li=document.getElementsByClassName("elementChimique");
const el=document.querySelector(".ligne .elementChimique");
focus.innerHTML=el.innerHTML;
focus.className=el.className;
for (let i=1;i<li.length;i++){
    li[i].addEventListener("mouseover",function(){
        focus.innerHTML=this.innerHTML;
        focus.className=this.className
    })
}

const checkFocus=document.getElementById("checkFocus")
checkFocus.addEventListener("change",cocher)

function cocher(){
    if (checkFocus.checked){
        focus.style.display="block";
    }else{
        focus.style.display="none";
    }
}

const checkMasse=document.getElementById("checkMasse")
const liMasse=document.getElementsByClassName("masseatomique")
checkMasse.addEventListener("change",cocherMasse)
console.log(checkMasse)
function cocherMasse(){
    if (checkMasse.checked){
        for (let i=0;i<liMasse.length;i++){
            liMasse[i].style.display="block";
        } 
    }else{
        for (let i=0;i<liMasse.length;i++){
            liMasse[i].style.display="none";
        }
    }

}
const checkElectro=document.getElementById("checkElectro")
const liElectro=document.getElementsByClassName("electronegativite")
checkElectro.addEventListener("change",cocherElectro)
function cocherElectro(){
    if (checkElectro.checked){
        for (let i=0;i<liElectro.length;i++){
            liElectro[i].style.display="block";
        }  
    }else{
        for (let i=0;i<liElectro.length;i++){
            liElectro[i].style.display="none";
        }
    }
}

const checkCouches=document.getElementById("checkCouches")
const liCouches=document.getElementsByClassName("coucheselectrons")
checkCouches.addEventListener("change",cocherCouches)
function cocherCouches(){
    if (checkCouches.checked){
        for (let i=0;i<liCouches.length;i++){
            liCouches[i].style.display="block";
        }  
    }else{
        for (let i=0;i<liCouches.length;i++){
            liCouches[i].style.display="none";
        }
    }
}