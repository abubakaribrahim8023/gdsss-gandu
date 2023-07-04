
// start landing page here

function login(){
    document.querySelector("#login").style.display = "none";
    document.querySelector("#register").style.display = "block";
}
function register(){
    document.querySelector("#login").style.display = "block";
    document.querySelector(".register").style.display = "none";
}
function forgot(){
    document.querySelector("#login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector("#password").style.display = "block";
}

// end land page page 



const all    = document.querySelector(".login .login-body .form-group #showpassword[type='password']"),
passwordBtn  = document.querySelector(".login .login-body .form-group #show1");

passwordBtn.onclick = ()=>{

    if(all.type == "password"){
        all.type = "text";
        passwordBtn.classList.add("active");
    }
    else{
        all.type = "password";
        passwordBtn.classList.remove("active");
    }
}


const showR    = document.querySelector(".login .login-body .form-group #showRpassword[type='password']"),
show2Btn       = document.querySelector(".login .login-body .form-group #show2");

show2Btn.onclick = ()=>{

    if(showR.type == "password"){
        showR.type = "text";
        show2Btn.classList.add("active2");
    }
    else{
        showR.type = "password";
        show2Btn.classList.remove("active2");
    }
}


// login page javaScript show password and hide 




const showLog    = document.querySelector(".register .login-body .form-group #login[type='password']"),
showLogBtn       = document.querySelector(".register .login-body .form-group #show3");

showLogBtn.onclick = ()=>{

    if(showLog.type == "password"){
        showLog.type = "text";
        showLogBtn.classList.add("active3");
    }
    else{
        showLog.type = "password";
        showLogBtn.classList.remove("active3");
    }
}