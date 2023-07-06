let dropdown = document.getElementById("dropdown");
let drop     = document.getElementById("drop");

drop.onmouseover = ()=>{
    if(dropdown.style.display == "none"){
        dropdown.style.display = "block";
    }
    else{
        dropdown.style.display = "none";
    }
}


