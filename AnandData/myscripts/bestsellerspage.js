
import sidebar from "../../Combo/components/sidebarC.js";
let side= document.getElementById("sider");
side.innerHTML=sidebar();


let bestData= JSON.parse(localStorage.getItem("Bestsellers"));
console.log("bestdata",bestData);

import { displayData } from "../appendFunction/appendData.js";

let container=document.getElementById("bestsell");

displayData(bestData,container);


// ==============sort======================

document.getElementById("sort").addEventListener("change",()=>{
    var sorting= document.querySelector("#sort").value;
    if(sorting === "l2h"){
        bestData.sort(function(a,b){
            return a.price-b.price;
        })
        displayData(bestData,container);
    }

    else if(sorting === "h2l"){
        bestData.sort(function(a,b){
            return b.price-a.price;
        })
        displayData(bestData,container);
    }

    else if(sorting==="A2Z"){
        bestData.sort((a,b)=>{
            if(a.name<b.name){
                return -1;
            }
           return 0;
        });
        displayData(bestData,container);
    }
    else if(sorting==="Z2A"){
        bestData.sort((a,b)=>{
            if(a.name>b.name){
                return -1;
            }
           return 0;
        });
        displayData(bestData,container);
    }
    
})