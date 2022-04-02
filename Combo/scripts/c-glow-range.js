

import sidebar from "../components/sidebarC.js";
let side= document.getElementById("sider");
side.innerHTML=sidebar();


let bestData= JSON.parse(localStorage.getItem("glowRangeObj"));
console.log("bestdata",bestData);

import { DataAppend} from "../components/compC.js";

let container=document.getElementById("data");

DataAppend(bestData,container);


// ==============sort======================

document.getElementById("sort").addEventListener("change",()=>{
    var sorting= document.querySelector("#sort").value;
    if(sorting === "l2h"){
        bestData.sort(function(a,b){
            return a.price-b.price;
        })
        DataAppend(bestData,container);
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






let data= JSON.parse(localStorage.getItem("glowRangeObj"));
console.log("search",data);



document.getElementById("icon-search").addEventListener("click",()=>{
   let searchbar= document.getElementById("searchbar");
   searchbar.style.display="block";
})
document.querySelector(".fa-xmark").addEventListener("click",()=>{
   let searchbar= document.getElementById("searchbar");
   searchbar.style.display="none";
   let inputvalue= document.getElementById("searchinput");
   inputvalue.value="";
   DataAppend(bestData,container);
})




let input= document.getElementById("searchinput");
input.addEventListener("input",()=>{
    search(data);
});
function search(data){
    let inp=input.value;
    console.log(inp);
   data=data.filter((el)=>{
      console.log(el.name) ;
        if(el.name.includes(inp)===true){
            return el;
        }
    })
    DataAppend(bestData,container);
}
