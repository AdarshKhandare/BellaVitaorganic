let giftBoxObj = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/12_1_1024x1024.jpg?v=1632397421",
name:"Aroma Candles 4 X 60g each, 100% Pure Soy Wax Vanilla, Cinnamon, Lavender & Rose, Upto 15 hours",
rating:"4.7 (299 reviews)",
price:"399",
strickedoffprice:"Rs. 499",
save:"(Save Rs. 100)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/15_1024x1024.jpg?v=1608726723",
name:"Coins Of Attraction, Manifest Tokens Charged With Energy",
rating:"5.0 (16 reviews)",
price:"1,099",
strickedoffprice:"Rs. 2,499",
save:"(Save Rs. 1,400)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-Acne-Face-wash_-Anti-Acne-Face-Gel-Cream-Combo_1024x1024.jpg?v=1647864525",
name:"Anti Acne Combo (Face Wash + Face Gel)",
rating:"4.8 (506 reviews)",
price:"530",
strickedoffprice:"Rs. 698",
save:"(Save Rs. 168)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Anti-Acne-Face-Gel_-Ubtanplus_1_1024x1024.jpg?v=1643777898",
name:"Acne & Pimple Removal Combo (C Glow + Anti Acne + Ubtan Plus)",
rating:"4.8 (677 reviews)",
price:"825",
strickedoffprice:"Rs. 973",
save:"(Save Rs. 148)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_-Rose-Glow_878d4654-828c-4ada-822e-d1a2fc348f83_1024x1024.jpg?v=1643782422",
name:"Face Glow Combo (Glowner + C Glow + Rose Glow)",
rating:"4.7 (1073 reviews)",
price:"949",
strickedoffprice:"Rs. 1,297",
save:"(Save Rs. 348)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-Glow-Face-wash_-Exfoliate-Scrub_-Papyblem-Face-Gel-Cream-Combo_1024x1024.jpg?v=1647864298",
name:"Face Spots & Marks Reduction Combo (C Glow + Exfoliate + PapyBlem)",
rating:"4.8 (2640 reviews)",
price:"720",
strickedoffprice:"Rs. 849",
save:"(Save Rs. 129)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Anti-Acne-Gel-_-Ubtanplus_-Exfoliate_1024x1024.jpg?v=1643882471",
name:"Oil Control & Face Glow Combo (C Glow + Exfoliate + Ubtan Plus + Anti Acne)",
rating:"4.7 (1100 reviews)",
price:"1,060",
strickedoffprice:"Rs. 1,248",
save:"(Save Rs. 188)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Rose-Glow_-Nicolips_-Nicobalm_1024x1024.jpg?v=1640603995",
name:"Skin Brightening Combo (Exfoliate + Rose Glow + NicoLips + LipBalm)",
rating:"4.7 (449 reviews)",
price:"999",
strickedoffprice:"Rs. 1,449",
save:"(Save Rs. 450)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_1024x1024.jpg?v=1643781091",
name:"Pore Minimizing Combo - Face Wash and Face Toner",
rating:"4.7 (1156 reviews)",
price:"465",
strickedoffprice:"Rs. 548",
save:"(Save Rs. 83)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-Glow-Face-Wash_-Exfoliate-Scrub-Combo_1024x1024.jpg?v=1647864479",
name:"Natural Anti Pollution Combo Pack - Face Wash + Face & Body Scrub Grit",
rating:"4.7 (1127 reviews)",
price:"445",
strickedoffprice:"Rs. 524",
save:"(Save Rs. 79)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Night-Glow_-Rose-Glow_2_1024x1024.jpg?v=1643882592",
name:"Natural Combo Pack For Glowing Skin - Face Wash + Rose Toner + Night Repair Cream",
rating:"4.7 (1181 reviews)",
price:"873",
strickedoffprice:"",
save:""},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Shampoo_-Silky-Strong_-Conditioner_684c384c-fed1-494f-8ff9-17caf51d2709_1024x1024.jpg?v=1632218387",
name:"Hair Essential Combo Pack - Shampoo + Conditioner + Hair Oil",
rating:"4.8 (823 reviews)",
price:"779",
strickedoffprice:"Rs. 1,173",
save:"(Save Rs. 394)"}]


localStorage.setItem("giftBoxObj",JSON.stringify(giftBoxObj))

let comboData = JSON.parse(localStorage.getItem("giftBoxObj")) || []
console.log(comboData)
let comboappply = document.querySelector("#data")

const comboappend=(comboData)=>{

    comboData.forEach(function(ele){

            let div = document.createElement("div")
            div.setAttribute("id","divFlex")
            div.setAttribute("class","mydivouter")

            let img = document.createElement("img")
            img.src = ele.image

            let button = document.createElement("button")
            button.innerText = "ADD TO BOX"
            button.setAttribute("class","mybuttonoverlap btn btn-info")

            let name = document.createElement("p")
            name.innerText = ele.name
            name.setAttribute("id","name")

            let rating = document.createElement("p")
            rating.innerText = "🌟" + " " +ele.rating
            
            let strickedoffprice = document.createElement("h3")
            strickedoffprice.innerText = ele.strickedoffprice
            strickedoffprice.setAttribute("id", "strickprice")

            let price = document.createElement("h3")
            price.innerText = "Rs."+" "+ ele.price

            let divP = document.createElement("div")
            divP.setAttribute("id","divp")

            let save = document.createElement("p")
            save.innerText = ele.save
            save.setAttribute("id", "save")
            divP.append(strickedoffprice,price)

            div.append(img,button,name,rating,divP,save);
            comboappply.append(div)
    })

}
comboappend(comboData)



























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