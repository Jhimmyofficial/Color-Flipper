var icon = document.getElementById("nav-icon");
var nav = document.getElementById("nav");
icon.addEventListener("click", function(){
    nav.classList.toggle("open")
})

// Function to change webpage background color
    function changeBodyBg(color){
        document.body.style.background = color;
    }
    
