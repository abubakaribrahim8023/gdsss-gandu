let dropdown = document.getElementById("dropdown");
let drop     = document.getElementById("drop");

drop.onclick = ()=>{
    if(dropdown.style.display == "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none";
    }
}

// mobile navigation with this javaScript 

function openMenu(){
    document.querySelector('.navbar').style.display = "block";
}
function closeMenu(){
    document.querySelector('.navbar').style.display = "none";
}
