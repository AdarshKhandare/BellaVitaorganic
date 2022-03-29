let essentialCare = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/TeaTree_1_1024x1024.jpg?v=1620632535",
name:"Tea Tree Essential Oil - 15ml for Skin, Hair, Face, Acne Care Can be Used as Fragrance Oil, Mixed with Beauty Products, Aromatherapy and Home Candle Soap Making",
rating:"     5.0 (8 reviews)",
price:"Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Lavender_1_1024x1024.jpg?v=1620633214",
name:"Lavender Essential Oil, Natural Fragrance Oil for Skin, Hair Care & Aromatherapy, Mixed with Beauty Products and Home Candle Soap Making, 100% Pure, Natural Oil - 15ml",
rating:"     5.0 (7 reviews",
price:" Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Orange-01_1024x1024.jpg?v=1620632944",
name:"Orange Essential Oil - 15ml Promotes Healthy & Youthful Skin, Face, Hair Care Can be Used as Fragrance Oil, Mixed with Beauty Products, Aromatherapy and Home Candle Soap Making",
rating:"     5.0 (7 reviews)",
price:"Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Neroli-01_1024x1024.jpg?v=1620633021",
name:"Neroli Essential Oil, Natural Fragrance Oil for Skin Moisturization, Face, Hair Care, Mixed with Beauty Products and Home Candle Soap Making, 100% Pure, Natural Oil - 15ml",
rating:"     5.0 (6 reviews)",
price:"Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Ylangylang_1_1024x1024.jpg?v=1631790860",
name:"Ylang Ylang Essential Oil For Skin and Hair Care - 15ml Can be Used as Fragrance Oil, Mixed with Beauty Products, Aromatherapy and Home Candle Soap Making",
rating:"     5.0 (6 reviews)",
price:"Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Peppermint_1_1024x1024.jpg?v=1620632857",
name:"Peppermint Essential Oil - 15ml Natural Can be Used as Fragrance Oil, Mixed with Beauty Products, Aromatherapy and Home Candle Soap Making",
rating:"     5.0 (7 reviews)",
price:"Rs. 249"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Lemongrass_1_18604809-9565-40de-b67f-0dd93ca6b883_1024x1024.jpg?v=1620633131",
name:"Lemongrass Essential Oil, Natural Fragrance Oil for Aromatherapy, Mixed with Beauty Products and Home Candle Soap Making, 100% Pure, Natural Oil - 15ml",
rating:"     5.0 (8 reviews)",
price:"Rs. 249"},]




localStorage.setItem("essentialCare",JSON.stringify(essentialCare))

let flexData = JSON.parse(localStorage.getItem("essentialCare")) || []
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