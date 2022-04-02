import{displayData} from "./appendData.js";
let data= JSON.parse(localStorage.getItem("data"));
console.log("search",data);
let parent= document.getElementById("parent");



document.getElementById("icon-search").addEventListener("click",()=>{
   let searchbar= document.getElementById("searchbar");
   searchbar.style.display="block";
})
document.querySelector(".fa-xmark").addEventListener("click",()=>{
   let searchbar= document.getElementById("searchbar");
   searchbar.style.display="none";
   let inputvalue= document.getElementById("searchinput");
   inputvalue.value="";
   displayData(data,parent);
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
    displayData(data,parent);
}
