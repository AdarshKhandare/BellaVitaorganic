var cardArr=JSON.parse(localStorage.getItem("cardArr"))||[];
 console.log(cardArr)
  function display(elem){
    document.querySelector("#addproduct").innerHTML=""
    cardArr.map(function (elem,index) {
        let div=document.createElement("div")
        div.id="div1"
        let img=document.createElement("img")
        img.src=elem.image
        let div1=document.createElement("div")
        let title=document.createElement("p")
        title.innerText=elem.name
        let price=document.createElement("h3")
        price.innerText= ` Rs. ${elem.price}`
        let quantity=document.createElement("h5")
        quantity.innerText="Quantity:"
        var btu1= document.createElement("button");
        btu1.setAttribute("id", "btu1");
        btu1.addEventListener("click", function(){
            dicre(index)
        } )
       
      btu1.innerHTML="-"
      var quant=document.createElement("p");
      quant.innerText= elem.quant;
      quant.setAttribute("id", "qunty");
       var btu2= document.createElement("button");
       btu2.addEventListener("click", function(){
        increse(index)
    } )
       btu2.innerHTML= "+"
       btu2.setAttribute("id", "btu2");
       let div2=document.createElement("div")
       div2.id="div2" 
       div2.append(btu1,quant,btu2)
       div1.append(title,price,quantity,div2)
       div.append(img,div1)
       document.getElementById("addproduct").append(div)

  });
}
function  increse(index){
 if( cardArr[index].quant !=0){
   cardArr[index].quant++

localStorage.setItem("cardArr", JSON.stringify(cardArr));
document.getElementById("total").innerText=total
addto()
}
else if(cardArr[index].quant==0){
 cardArr[index].quant++
 localStorage.setItem("cardArr", JSON.stringify(cardArr));
   document.getElementById("total").innerText=total
  addto()
 
}
display(cardArr)
}
 function addto(){
 var total=cardArr.reduce(function(acc,e ,index){
return acc+(e.price*e.quant)
display(cardArr)

  },0);
  document.getElementById("total").innerText=total
display(cardArr)
 }
    function dicre(index){
     if(cardArr[index].quant !=0){
       cardArr[index].quant--
       localStorage.setItem("cardArr", JSON.stringify(cardArr));
       document.getElementById("total").innerText=total
       subto()
     }
     else if(cardArr[index].quant==0){
       cardArr[index].quant++
       localStorage.setItem("cardArr", JSON.stringify(cardArr));
     
     document.getElementById("total").innerText=total
     subto()
      }
       }


function subto(){
    var total=cardArr.reduce(function(acc,e ,index){
   return acc+(e.price*e.quant)
//    display(cardArr)
  
     },0);
     document.getElementById("total").innerText=total
    //  addE()
  display(cardArr)
    }
    subto()
    // addto()
    display(cardArr) 