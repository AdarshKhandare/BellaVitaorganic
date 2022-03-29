let tintyObj = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Pomegrante-01_1024x1024.jpg?v=1637916570",
name:"Tinty Blush - Pomegranate Maroon, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (43 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Peach-01_1024x1024.jpg?v=1637918142",
name:"Tinty Blush - Peach, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     4.9 (47 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Strawberry-01_1024x1024.jpg?v=1637918616",
name:"Tinty Blush - Strawberry, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (24 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Raspberry-01_1024x1024.jpg?v=1637919751",
name:"Tinty Blush - Raspberry, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (37 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Rose-01_1024x1024.jpg?v=1637919504",
name:"Tinty Blush - Rose Pink, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (37 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/RedGrape-01_1024x1024.jpg?v=1637918875",
name:"Tinty Blush - Red Grape, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (25 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Coffee-01_1024x1024.jpg?v=1637914861",
name:"Tinty Blush - Coffee, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (36 reviews)",
price:"Rs. 299"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Choco-01_1024x1024.jpg?v=1637919186",
name:"Tinty Blush - Choco, 3 in 1 Lip, Eye & Cheek Blush with Free Applicator, Nourishes & Moisturize, Almond Oil & Shea Butter - 8 Gm",
rating:"     5.0 (23 reviews)",
price:"Rs. 299"},]



localStorage.setItem("tintyObj",JSON.stringify(tintyObj))

let flexData = JSON.parse(localStorage.getItem("tintyObj")) || []
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