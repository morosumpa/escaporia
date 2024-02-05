

let ans="";

function enlazar(element) {
    let button = document.querySelector("button");
    button.removeAttribute("hidden", "");
    let resetButton = document.querySelector(".resetButton");
    resetButton.removeAttribute("hidden","")
    ans+= element.innerHTML;
    button.innerHTML=ans;
    element.setAttribute("hidden","");
}

function completar(element){
    let linkContainer = document.querySelector(".finalLink");
    linkContainer.removeAttribute("hidden")
    let button = document.querySelector("button");
    let link = document.querySelector("a");
    link.href+=ans;
    link.innerHTML=ans;
    button.setAttribute("hidden", "");
}