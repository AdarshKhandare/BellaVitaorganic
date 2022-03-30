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
  var lip_data=JSON.parse(localStorage.getItem("lip"))||[];
     skin_data(lip_data)

     function skin_data(lip_data){
       lip_data.map(function(elem,index){
         let maindiv=document.createElement("div")
         let img=document.createElement("img")
         img.src=elem.image 
         img.setAttribute("id","img1")
         let title=document.createElement("p")
         title.innerText=elem.name
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
          review.innerText=elem.review
          div1.style.justifyContent="center"
          div1.append(stkOfPrice,price)
          maindiv.append(img,title,review,div1,save)
          document.getElementById("apped").append(maindiv)

       });
     }