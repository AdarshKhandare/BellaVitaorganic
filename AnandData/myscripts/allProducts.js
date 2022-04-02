import sidebar from "../../Combo/components/sidebarC.js";
let side= document.getElementById("sider");
side.innerHTML=sidebar();

// =======================appendData================================

let data= JSON.parse(localStorage.getItem("data"));
console.log("xyz",data)
import { displayData } from "../appendFunction/appendData.js";

let container=document.getElementById("parent");

displayData(data,container);


// ==================sort=======================

document.getElementById("sort").addEventListener("change",()=>{
    var sorting= document.querySelector("#sort").value;
    if(sorting == "l2h"){
        data.sort(function(a,b){
            return a.price-b.price;
        })
        displayData(data,container);
    }

    else if(sorting == "h2l"){
        data.sort(function(a,b){
            return b.price-a.price;
        })
        displayData(data,container);
    }

    else if(sorting==="A2Z"){
        data.sort((a,b)=>{
            if(a.name<b.name){
                return -1;
            }
           return 0;
        });
        displayData(data,container);
    }
    else if(sorting==="Z2A"){
        data.sort((a,b)=>{
            if(a.name>b.name){
                return -1;
            }
           return 0;
        });
        displayData(data,container);
    }
    
})
