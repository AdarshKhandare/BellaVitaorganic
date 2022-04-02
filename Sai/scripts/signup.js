var reguserarr=[]
    
let registerform = document.getElementById("registerForm")

var reguserarr = JSON.parse(localStorage.getItem("storedreguser"))||[]

registerform.addEventListener("submit",(event)=>{
    event.preventDefault();
    //console.log("yes");

    let firstname = document.getElementById("firstName").value
    let lastname=document.getElementById("lastName").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;

    let obj={
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
    }
    reguserarr.push(obj)
    console.log(reguserarr);
    var flag = false

for(var i=0;i<reguserarr.length;i++)
{
if(reguserarr[i].fullname=="" || reguserarr[i].email==""||reguserarr[i].company==""||reguserarr[i].website=="" )
{
    flag = true;
}
else{
    flag = false;
}
}
if(flag==true)
{
alert("Missing Credential");

}
else if(flag==false)
{
alert("Signup Successfull")
window.location.href="../index.html"


}

localStorage.setItem("storedreguser",JSON.stringify(reguserarr))
})


