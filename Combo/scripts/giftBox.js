

import sidebar from "/components/sidebarC.js";
let side= document.getElementById("sider");
side.innerHTML=sidebar();


let bestData= JSON.parse(localStorage.getItem("giftBoxObj"));
console.log("bestdata",bestData);

import { DataAppend} from "../components/compC.js";

let container=document.getElementById("data");

DataAppend(bestData,container);


// ==============sort======================

document.getElementById("sorter").addEventListener("change",()=>{
    var sorting= document.querySelector("#sorter").value;
    if(sorting === "l2h"){
        bestData.sort(function(a,b){
            return a.price - b.price;
        })
        displayData(bestData,container);
    }

    else if(sorting === "h2l"){
        bestData.sort(function(a,b){
            return b.price-a.price;
        })
        DataAppend(bestData,container);
    }

    else if(sorting==="A2Z"){
        bestData.sort((a,b)=>{
            if(a.name<b.name){
                return -1;
            }
           return 0;
        });
        DataAppend(bestData,container);
    }
    else if(sorting==="Z2A"){
        bestData.sort((a,b)=>{
            if(a.name>b.name){
                return -1;
            }
           return 0;
        });
        DataAppend(bestData,container);
    }
    
})






// read more buttons 

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "READ MORE"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "READ LESS"; 
    moreText.style.display = "inline";
  }
}