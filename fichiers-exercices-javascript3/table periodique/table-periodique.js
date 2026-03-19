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