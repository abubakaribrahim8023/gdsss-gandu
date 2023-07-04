const navbarClose = document.querySelector(".main #side-bar"),
HHide             = document.querySelector(".main .header"),
tabs              = document.querySelector(".main .tabs"),
toogleClose       = document.querySelector("#openBar");

toogleClose.onclick = ()=>{
    if(navbarClose.style.width == "230px"){
        navbarClose.style.width = "0px";
        HHide.style.width = "100%";
        tabs.style.width = "100%";
        toogleClose.classList.add('back');
    }
    else{
        navbarClose.style.width = "230px";
        HHide.style.width = "90.1%";
        tabs.style.width = "";
        toogleClose.classList.remove('back');
    }
}