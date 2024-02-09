

let ans="";

function enlazar(element) {
    let button = document.querySelector("button");
    button.removeAttribute("hidden", "");
    let resetButton = document.querySelector(".resetButton");
    resetButton.removeAttribute("hidden","")
    element.setAttribute("hidden","");

    if(element.src.includes("lima")){
        ans+="www."
    }
    if(element.src.includes("rejas")){
        ans+="github"
    }
    if(element.src.includes("pico")){
        ans+=".com"
    }
    if(element.src.includes("pared")){
        ans+="/morosumpa"
    }
    if(element.src.includes("agujero")){
        ans+="/scapeMate"
    }
    button.innerHTML=ans;
}

function completar(element){
    let linkContainer = document.querySelector(".finalLink");
    let button = document.querySelector("button");
    location.href = "http://" + ans
    button.setAttribute("hidden", "");
}