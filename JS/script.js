

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
    let button = document.querySelector("button");
    location.href = "http://" + ans
    button.setAttribute("hidden", "");
}