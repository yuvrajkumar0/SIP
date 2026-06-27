function loadDashboard(){
let s=JSON.parse(localStorage.getItem("student"));
if(s){document.getElementById("studentName").innerText=s.name;}
let complaints=JSON.parse(localStorage.getItem("complaints"))||[];
document.getElementById("total").innerText=complaints.length;
let p=0,ip=0,r=0;
let body=document.getElementById("complaintBody");
body.innerHTML="";
if(complaints.length===0){
body.innerHTML="<tr><td colspan='3'>No complaints found.</td></tr>";
}else{
complaints.forEach((c,i)=>{
if(c.status==="Pending")p++;
if(c.status==="In Progress")ip++;
if(c.status==="Resolved")r++;
body.innerHTML+=`<tr><td>CMP00${i+1}</td><td>${c.category}</td><td>${c.status}</td></tr>`;
});
}
document.getElementById("pending").innerText=p;
document.getElementById("progress").innerText=ip;
document.getElementById("resolved").innerText=r;
}
function logout(){
window.location.href="index.html";
}
