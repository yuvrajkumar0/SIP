function togglePassword(){
const p=document.getElementById('password');
const eye=document.querySelector('.toggle');
if(p.type==='password'){p.type='text';eye.classList.replace('fa-eye','fa-eye-slash');}
else{p.type='password';eye.classList.replace('fa-eye-slash','fa-eye');}
}
function login(){
const r=document.getElementById('roll').value.trim();
const p=document.getElementById('password').value.trim();
const m=document.getElementById('msg');
if(!r||!p){m.style.color='red';m.innerText='Please enter Roll Number and Password';return;}
m.style.color='green';
m.innerText='Login validation successful (Backend will be added with PHP & MySQL)';
}
function login(){

    let mobile=document.getElementById("roll").value;
    let password=document.getElementById("password").value;

    let data=JSON.parse(localStorage.getItem("student"));

    if(data==null){
        alert("Please Register First");
        return;
    }

    if(mobile==data.mobile && password==data.password){

        alert("Login Successful");

        window.location.href="dashboard.html";

    }

    else{

        alert("Invalid Mobile Number or Password");

    }

}