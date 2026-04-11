/** let numH1 = 0;
let numH2 = 0;
let numH3 = 0;
function creeNumerotation(el) {

    if (el.tagName === "H1") {
        numH1++;
        numH2 = 0;
        numH3 = 0;
        return numH1 + ". " + el.textContent;
    }

    else if (el.tagName === "H2") {
        numH2++;
        numH3 = 0;
        return numH1 + "." + numH2 + ". " + el.textContent;
    }

    else if (el.tagName === "H3") {
        numH3++;
        return numH1 + "." + numH2 + "." + numH3 + ". " + el.textContent;
    }

    return el.textContent;
}

let titres = document.querySelectorAll("h1, h2, h3");

for (let el of titres) {
    el.textContent = creeNumerotation(el);
}



function formatElement(element) {
  return element.textContent;
}
function creatTableMat() {
  let lestitre = document.querySelectorAll("h1, h2, h3");

  let toc = document.createElement("div");
  toc.id = "toc";

  let currentH1 = null;
  let currentH2 = null;

  for (let el of lestitre) {

    let div = document.createElement("div");
    div.className = el.nodeName.toLowerCase();
    div.textContent = el.textContent;

    if (el.nodeName === "H1") {
      toc.appendChild(div);
      currentH1 = div;
      currentH2 = null;
    }

    else if (el.nodeName === "H2") {
      if (currentH1) {
        currentH1.appendChild(div);
      } else {
        toc.appendChild(div);
      }
      currentH2 = div;
    }

    else if (el.nodeName === "H3") {
      if (currentH2) {
        currentH2.appendChild(div);
      } else if (currentH1) {
        currentH1.appendChild(div);
      } else {
        toc.appendChild(div);
      }
    }
  }

  return toc;
}

function insertTableMat() {
  const toc = creatTableMat(); 

  const body = document.body;

  
  body.insertBefore(toc, body.firstElementChild);

  body.style.marginLeft = "200px";
}

 insertTableMat(); */



let numH1 = 0;
let numH2 = 0;
let numH3 = 0;

// numérotation selon le niveau du titre
function creeNumerotation(el) {

    if (el.tagName === "H1") {
        numH1++;
        numH2 = 0;
        numH3 = 0;
        return numH1 + ".";
    }

    if (el.tagName === "H2") {
        numH2++;
        numH3 = 0;
        return numH1 + "." + numH2 + ".";
    }

    if (el.tagName === "H3") {
        numH3++;
        return numH1 + "." + numH2 + "." + numH3 + ".";
    }
}


function creatTableMat_v2() {

    
    const toc = document.createElement("div");
    toc.id = "toc";

    const titres = document.querySelectorAll("h1, h2, h3");

    for (let el of titres) {

        let numero = creeNumerotation(el);

        
        let span = document.createElement("span");
        span.id = numero;
        el.parentNode.insertBefore(span, el);

        
        let div = document.createElement("div");
        div.className = el.tagName.toLowerCase(); 
        div.textContent = numero + " " + el.textContent;

        
        let lien = document.createElement("a");
        lien.href = "#" + numero;
        lien.appendChild(div);

        toc.appendChild(lien);
    }

    return toc;
}


function insertTableMat_v2() {

    const toc = creatTableMat_v2();
    const body = document.body;

    
    body.insertBefore(toc, body.firstElementChild);
    body.style.marginLeft = "200px";
}

insertTableMat_v2();

