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
  var dryskin_data=JSON.parse(localStorage.getItem("dryskin_data"))||[];
     skin_data(dryskin_data)

     function skin_data(dryskin_data){
       dryskin_data.map(function(elem,index){
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
    //  image :"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DeoWhiteWomen-01_1ceabf20-f1f7-429b-86c7-93bd5d92ee20_1024x1024.jpg?v=1646292343",
    //  name:"DeoWhite Underarm Whitening Natural Roll On Deodorant For Women - 50 ml",
    //  stkOfPrice:"Rs. 249",
    //  price:"199",
    //  savePrice:"(Save Rs. 50)",
    //  review:"232 reviews"