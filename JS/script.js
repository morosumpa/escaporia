"use strict"

let ans = "";
let rejas = false;
let agujero = false;
let pico = false;
let lima = false;
let pared = false;

let pista = document.querySelector(".pista")

console.log(pista.textContent)

function enlazar(element) {

    if (element.src) {
        if (element.src.includes("agujero") && pared) {
            ans += "/scapeMate"
            element.parentNode.parentNode.setAttribute("hidden", "");
            window.location.href = "https://"+ans;
        } else {
            pista.innerHTML = ""
        }

        if (element.src.includes("pico") && rejas) {
            ans += ".com"
            element.parentNode.parentNode.setAttribute("hidden", "");
            pico = true;
        }

        if (element.src.includes("lima")) {
            ans += "www."
            lima=true
            element.parentNode.parentNode.setAttribute("hidden", "");
            document.querySelector(".gax2").removeAttribute("hidden")
            pista.innerHTML = "Has seleccionado la lima"
        } else {
            pista.innerHTML = ""
        }

        if (element.src.includes("pared") && pico) {
            ans += "/morosumpa"
            element.parentNode.parentNode.setAttribute("hidden", "");
            pared = true;
            document.querySelector(".agujero").removeAttribute("hidden")
        } else {
            pista.innerHTML = "Parece que necesitas algo para romper esa pared"
        }

        if (element.src.includes("rejas") && lima) {
            ans += "github"
            element.parentNode.parentNode.setAttribute("hidden", "");
            document.querySelector(".pared").removeAttribute("hidden")
            rejas = true;
            background();
        } else {
            pista.innerHTML = "Parece que necesitas algo para romper esas rejas"
        }
    } else {
        if (element.classList.contains("gax")) {
            element.setAttribute("hidden", "");
            pista.innerHTML = "¡Has encontrado una lima!"
            document.querySelector(".lima").removeAttribute("hidden")
        } else {
            element.setAttribute("hidden", "");
            lima = true;
            pista.innerHTML = "¡Has encontrado un pico!"
            document.querySelector(".pico").removeAttribute("hidden")
        }

    }
}

function background() {
    document.querySelector("html").setAttribute('style', 'background: url("image/patio.jpg");')
}