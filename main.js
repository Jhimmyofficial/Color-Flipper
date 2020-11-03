'use strict';

const rating = document.querySelector(".ratings");

let icon = document.getElementById("nav-icon");
let nav = document.getElementById("nav");
icon.addEventListener("click", function(){
    nav.classList.toggle("open")
})


let changeBG = false;

function changeBackgroundColor(color){
    document.body.style.background = color;
    if (!changeBG){
        if (color !== '#0392BF'){
            document.body.style.color = "rgba(0,0,0,0.7)";
            size.classList.add("dark");
        } changeBG = true;
    } else if(color === '#0392BF'){
        document.body.style.color = "#f7e2e2";
        size.classList.remove("dark");
        changeBG = false;
    }
} 
