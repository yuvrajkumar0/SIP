function validateForm(){
let name=document.getElementById('name').value.trim();
let roll=document.getElementById('roll').value.trim();
let mobile=document.getElementById('mobile').value.trim();
let email=document.getElementById('email').value.trim();
let dept=document.getElementById('dept').value;
let sem=document.getElementById('sem').value;
let pass=document.getElementById('pass').value;
let cpass=document.getElementById('cpass').value;
let terms=document.getElementById('terms').checked;
let msg=document.getElementById('msg');

if(!name||!roll||!mobile||!email||!dept||!sem||!pass||!cpass){
msg.style.color='red';
msg.innerHTML='Please fill all fields.';
return false;
}
if(mobile.length!=10||isNaN(mobile)){
msg.style.color='red';
msg.innerHTML='Enter valid mobile number.';
return false;
}
if(pass!==cpass){
msg.style.color='red';
msg.innerHTML='Passwords do not match.';
return false;
}
if(!terms){
msg.style.color='red';
msg.innerHTML='Accept Terms & Conditions.';
return false;
}
msg.style.color='green';
msg.innerHTML='Registration Successful! (Database integration pending)';
return false;
}
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let dept = document.getElementById("dept").value;
    let sem = document.getElementById("sem").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if(pass != cpass){
        alert("Password does not match");
        return false;
    }

    let student = {
        name:name,
        roll:roll,
        mobile:mobile,
        email:email,
        dept:dept,
        sem:sem,
        password:pass
    };

    localStorage.setItem("student", JSON.stringify(student));

    alert("Registration Successful");

    window.location.href="index.html";

    return false;
}