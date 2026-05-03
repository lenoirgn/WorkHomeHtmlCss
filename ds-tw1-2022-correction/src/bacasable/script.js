const MAX_WIDTH = 300;

const setupListeners = function(){
    const wider=document.getElementById("wider");
    wider.addEventListener("click", changeWidth);
    const back=document.getElementById("back");
    back.addEventListener("change", setBackground);
    const buttons=document.getElementsByTagName("button");
    for (button of buttons)
        button.addEventListener("click", setColor)
}

const changeWidth = function(){
    const test = document.getElementById("test");
    const properties = window.getComputedStyle(test);
    const newWidth = parseInt(properties.width) + 10
    if (newWidth <= MAX_WIDTH){
        test.style.width = newWidth + "px";
        infoWidth(newWidth);
    }
}

const setColor = function(){
    const colorName= this.textContent;
    const carre = document.getElementsByClassName("carre");
    for (let e of carre)
        e.style.color = colorName;
}

const setBackground = function(){
    const test = document.getElementById("test");
    if(!this.checked)
        test.style.backgroundColor = "";
    else
        test.style.backgroundColor = "yellow";
}


const infoWidth = function(width){
    const span = document.querySelector("span.dimension");
    span.textContent = width+"px";
}


window.addEventListener("load", setupListeners);