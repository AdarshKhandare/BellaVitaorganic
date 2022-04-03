
function displayData(data,parent){
   parent.innerHTML=null;
   data.forEach(({image,name,price,stkOfPrice,savePrice,review},index) => {
       let div=document.createElement("div");
       let imagediv= document.createElement("div");
       let img= document.createElement("img");
       let container= document.createElement("div");
       let productName= document.createElement("p");
       let myreview= document.createElement("p");
       let priceDiv= document.createElement("div");
       let strikePrice=document.createElement("p");
       let Price=document.createElement("p");
       let save= document.createElement("p");
       img.src=image;
       let button=document.createElement("button");
       button.textContent="BUY NOW";
       button.id="hoverButton";
       img.id="hoverImage";

      button.addEventListener("click",()=>{
          gotocart(data[index])
      })

      let quickview= document.createElement("p");
      quickview.textContent="Quick View";
      quickview.id="quickview";

       productName.textContent=name;
       myreview.innerHTML=`<i style="color:gold;"class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-regular fa-star-half-stroke"></i> ${review}`;
       strikePrice.textContent=`Rs.${stkOfPrice}`;
       Price.textContent=`Rs.${price}`;
       save.innerText=savePrice;
       priceDiv.append(strikePrice,Price);
       container.append(productName,myreview,priceDiv,save);
       imagediv.append(img,button,quickview);
       div.append(imagediv,container);
       imagediv.id="imagehoverdiv";
       productName.className="productname";
       container.id="productcontainer";
       priceDiv.className="pricediv";
       save.className="savePrice";
       parent.append(div);

   });
}
let cartArr= JSON.parse(localStorage.getItem("cardArr"))||[];
function gotocart(data){
   data.quant=1;
   cartArr.push(data);
   console.log("newcart",cartArr);
  
   localStorage.setItem("cardArr", JSON.stringify(cartArr));
   console.log(cartArr)
  
   window.location.href="../sagar/buy.html";
}
export {displayData};