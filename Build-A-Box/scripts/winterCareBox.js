let winterCare = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFaceWash-01_53c5f256-eade-4eb2-aa4f-4dc8f33d344b_1024x1024.jpg?v=1646652226",
name:"Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women - 100 ml",
rating:"     4.7 (1345 reviews)",
price:"Rs. 225"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GrowthProtinHairShampoo-01_1024x1024.jpg?v=1646390964",
name:"Growth Protein Conditioning Shampoo Anti Frizz, Hairfall Control, Greying, Volumizing & Anti Dandruff - 200ml",
rating:"     4.7 (1710 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/ChakraCleanseBodyWash-01_e33c7eea-43ce-4a27-a577-fdc3dd74f081_1024x1024.jpg?v=1646822050",
name:"Chakra Cleanse - Aura Boosting Natural Body Wash With Himalayan Rock Salt & Essential Oils - 300 ML",
rating:"     4.7 (239 reviews)",
price:"Rs. 275"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-AcneFaceWash-01_4a46182f-86d1-427c-b263-be7900510710_1024x1024.jpg?v=1646289806",
name:"Anti Acne Face Wash for Oil Control, Pimples Repair & Glow with Neem, Basil, Tea Tree & Aloe - 100ml",
rating:"     4.8 (310 reviews)",
price:"Rs. 260"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/1_01f1a1c7-3d63-455a-83f4-0598c6bc734c_1024x1024.jpg?v=1646825976",
name:"Oil Control Face Wash with Activated Charcoal For Deep Cleansing, Dirt Removal & Skin Brightening - 100ml",
rating:"     4.8 (742 reviews)",
price:"Rs. 225"},]



localStorage.setItem("winterCare",JSON.stringify(winterCare))

let flexData = JSON.parse(localStorage.getItem("winterCare")) || []
console.log(flexData)
let flexappply = document.querySelector("#FlexData")

const flexappend=(flexData)=>{

    flexData.forEach(function(ele){

            let div = document.createElement("div")
            div.setAttribute("id","divFlex")

            let img = document.createElement("img")
            img.src = ele.image

            let button = document.createElement("button")
            button.innerText = "ADD TO BOX"

            let name = document.createElement("p")
            name.innerText = ele.name
            name.setAttribute("id","name")

            let rating = document.createElement("p")
            rating.innerText = "🌟" + " " +ele.rating

            div.append(img,button,name,rating)
            flexappply.append(div)
    })

}
flexappend(flexData)