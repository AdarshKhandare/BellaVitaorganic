function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  var olalyskin_data=JSON.parse(localStorage.getItem("dryskin_data"))||[];
     skin_data(olalyskin_data)

     function skin_data(olalyskin_data){
      document.getElementById("apped").innerHTML=""
      olalyskin_data.map(function(elem,index){
        let maindiv=document.createElement("div")
        let div0=document.createElement("div")
        div0.id="div0"
        let img=document.createElement("img")
        img.src=elem.image 
        img.setAttribute("id","img1")
        let btu=document.createElement("button")
        btu.innerText="BUY NOW"
        btu.id="imgbutton"
        btu.addEventListener("click", function () {
         addToCart(elem);
     });
     
        let q=document.createElement("p")
        q.innerText="QUICK VIEW"
        q.id="quick"
        let title=document.createElement("p")
        title.innerText=elem.name
        title.id="title"
        title.style.fontWeight="bold"
        title.style.fontSize="12PX"
        let div1=document.createElement("div")
         div1.style.display="flex"
         let stkOfPrice=document.createElement("h5")
         stkOfPrice.innerText=elem.stkOfPrice
         stkOfPrice.style.marginRight="20px"
         stkOfPrice.style.color="gray"
         stkOfPrice.style.textDecoration="line-through"
         let price=document.createElement("h5")
         price.innerText= ` Rs. ${elem.price}`
         price.style.color="red"
         let save=document.createElement("p")
         save.innerText=elem.savePrice
         save.style.color="green"
         let review=document.createElement("p")
         review.innerHTML=`<i style="color :gold;" class="fa-solid fa-star"></i><i style="color :gold;" class="fa-solid fa-star"></i><i style="color :gold;" class="fa-solid fa-star"></i><i style="color :gold;" class="fa-solid fa-star"></i><i style="color :gold;" class="fa-solid fa-star-half-stroke"></i>${elem.review}`
         div1.style.justifyContent="center"
         div0.append(img,btu,q)
         div1.append(stkOfPrice,price)
         maindiv.append(div0,title,review,div1,save)
         document.getElementById("apped").append(maindiv)

      });
    }
   
   var cardArr=JSON.parse(localStorage.getItem("cardArr"))||[];
 
   function addToCart(elem){
     elem.quant=1
     cardArr.push(elem)
    localStorage.setItem("cardArr", JSON.stringify(cardArr));
     window.location.href="buy.html"
    console.log(cardArr)
 
   };
   document.getElementById("select").addEventListener("change",sorting)
    
   function sorting(){
     let sorting= document.getElementById("select").value 
     console.log(sorting)
     if(sorting==="htol"){
      olalyskin_data.sort(function(a,b){
         return b.price - a.price
       })
        console.log(olalyskin_data)
        skin_data(olalyskin_data)
     }
        else if(sorting==="ltoh"){
          olalyskin_data.sort(function(a,b){
         return a.price - b.price
       })
       console.log(olalyskin_data)
       skin_data(olalyskin_data)
        }
        else if(sorting=="atoz"){
          olalyskin_data.sort(function(a,b){
            if(a.name<b.name){
              return -1;
            }
            return 0;
          })
          skin_data(olalyskin_data)
        }
        else if(sorting=="ztoa"){
          olalyskin_data.sort(function(a,b){
           if(a.name>b.name){
             return -1;
           }
           return 0;
         })
         skin_data(olalyskin_data)
       }
   }