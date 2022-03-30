let glowRangeObj = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_53c5f256-eade-4eb2-aa4f-4dc8f33d344b_1024x1024.jpg?v=1646652226",
name:"Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women - 100 ml",
rating:"4.7 (1345 reviews)",
price:"225",
strickedoffprice:"Rs. 249",
save:"(Save Rs. 24)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowOil-FreeFaceGel-01_c610fe18-cfb8-431a-b041-0835fff1d14b_1024x1024.jpg?v=1646982167",
name:"C Glow Oil-Free Face Gel - 50 g",
rating:"4.9 (29 reviews)",
price:"375",
strickedoffprice:"Rs. 399",
save:"(Save Rs. 24)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceSerum-01_e6fc3e33-f8d6-407f-8620-48a32acd41a4_1024x1024.jpg?v=1646652431",
name:"Vitamin C-Glow Face Serum for Skin Brightening, Anti-Blemishes & Pigmentation - 30ml",
rating:"5.0 (39 reviews)",
price:"349",
strickedoffprice:"Rs. 375",
save:"(Save Rs. 26)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-glowfacecream-01_1024x1024.jpg?v=1645508609",
name:"Vitamin C - Glow Natural Face Cream For Brightening & Glowing skin - 50ml",
rating:"5.0 (27 reviews)",
price:"325",
strickedoffprice:"Rs. 375",
save:"(Save Rs. 50)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacePack-01_1024x1024.jpg?v=1647238688",
name:"Vitamin C - Glow Face Pack for Skin Brightening, Nourishment & Hydration - 100 gm",
rating:"5.0 (25 reviews)",
price:"349",
strickedoffprice:"Rs. 399",
save:"(Save Rs. 50)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacewash_FaceCream_FaceSerum_1024x1024.jpg?v=1647929187",
name:"Vitamin C Nightcare Regime - Face Wash + Face Serum + Face Cream",
rating:"Write Review",
price:"849",
strickedoffprice:"Rs. 999",
save:"Rs. 999"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/VitaminCAllDaySkincareRoutine-FaceWash_FaceGel_FaceCream-01_1024x1024.jpg?v=1647935818",
name:"Vitamin C All Day Skincare Routine- Face Wash + Face Gel + Face Cream",
rating:"Write Review",
price:"869",
strickedoffprice:"Rs. 1,023",
save:"(Save Rs. 154)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/VitaminCFaceGlowDuo-FacePack_FaceGel-01_1024x1024.jpg?v=1647933521",
name:"Vitamin C Face Glow Duo - Face Pack + Face Gel",
rating:"Write Review",
price:"508",
strickedoffprice:"Rs. 598",
save:"(Save Rs. 90)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/VitaminCSkinBrighteningDuo-FacePack_FaceCream-01_1024x1024.jpg?v=1647935995",
name:"Vitamin C Skin Brightening Duo- Face Pack + Face Cream",
rating:"Write Review",
price:"657",
strickedoffprice:"Rs. 774",
save:"(Save Rs. 117)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/VitaminCSkincareDuo-FaceWash_FaceCream-01_1024x1024.jpg?v=1647936650",
name:"Vitamin C Skincare Duo - Face Wash + Face Cream",
rating:"Write Review",
price:"530",
strickedoffprice:"Rs. 624",
save:"(Save Rs. 94)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/VitaminCEssentialOilFreeSkincareDuo-FaceWash_FaceGel-01_1024x1024.jpg?v=1647937560",
name:"Vitamin C Essential Oil Free Skincare Duo - Face Wash + Face Gel",
rating:"Write Review",
price:"530",
strickedoffprice:"Rs. 648",
save:"(Save Rs. 118)"},]


localStorage.setItem("glowRangeObj",JSON.stringify(glowRangeObj))

let comboData = JSON.parse(localStorage.getItem("glowRangeObj")) || []
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
            
            let strickedoffprice = document.createElement("h5")
            strickedoffprice.innerText = ele.strickedoffprice
            strickedoffprice.setAttribute("id", "strickprice")

            let price = document.createElement("h5")
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