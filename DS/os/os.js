OS=["blanche","rouge","rose"]

const alea=function(){
    return parseInt(Math.random()*3)
}



const est_present=function(n,tab){
    return tab.indexOf(OS[n])!=-1
}

const choix_os=function(){
    const tab=[]
    i=0
    while(tab.length!=3){
        const n=alea()
        const present=est_present(n,tab)
        if (!present){
            tab[i]=OS[n]
            i++
        }
    }
    
    return tab

}

const affiche=function(){
    const tabOs=choix_os()
    const enfant=document.getElementsByTagName("img")
    //const images=document.getElementById("images")
    //const enfant=images.getElementsByTagName("img")
    
    for(let i=0;i<tabOs.length;i++){
        enfant[i].src="fig/"+tabOs[i]+".jpg"
        enfant[i].alt= tabOs[i]
    }
}
affiche()

const bnt=document.getElementById("choix")
bnt.addEventListener("click",affiche)