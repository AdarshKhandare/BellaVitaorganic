
     var regUser = JSON.parse(localStorage.getItem("storedreguser"))
     console.log(regUser)
 
 
     document.querySelector("#loginForm").addEventListener("submit",loginDetails)
     function loginDetails(event){
         event.preventDefault()
 
         let email = document.getElementById("email").value;
         let pass = document.getElementById("password").value;
         console.log(email,pass)
         var flag = false;
         var firstname;
         var lastname;
         for(var i=0;i<regUser.length;i++)
         {
             if(email == regUser[i].email && pass == regUser[i].password)
             {
                 var firstname = regUser[i].firstname;
                 var lastname = regUser[i].lastname;
                 flag = true;
             }
             
         }
         if(flag==true)
         {
             alert("Login Successful"); 
             console.log(firstname,lastname);
             document.querySelector(".login").innerHTML="";
 
             let div = document.createElement("div");
             div.setAttribute("class","close");
             div.addEventListener("click",closeWindow)
             div.innerText="+";
 
             let h4 = document.createElement("h4");
             h4.innerText=firstname.toUpperCase()+" "+lastname.toUpperCase();
 
             let hr = document.createElement("hr");
 
             let p = document.createElement("p");
             p.setAttribute("id","acc")
             p.innerText="My Account";
 
             let btn1 = document.createElement("button");
             btn1.setAttribute("id","btn");
             btn1.innerText="LOGOUT";
 
             document.querySelector(".login").append(div,h4,hr,p,btn1);
         }
         else if(flag==false)
         {
             alert("Invalid Credential")
         }
     }