const modal = document.querySelector(".modal"),
modalBtn    = document.querySelector("#modal");

modalBtn.onclick = ()=>{
    if(modal.style.display == "none"){
        modal.style.display = "block";
    }
    else{
       modal.style.display = "none";
    }
}


function cancle(){
    modal.style.display = "none";
}



// search bar here

function search() {
    let input = document.getElementById('searchBar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('searchtab');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";				
        }
    }
}