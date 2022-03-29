let perfumeObj = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD-01_1024x1024.jpg?v=1648019025",
name:"OUD PARFUM UNISEX For Men & Women with Long Lasting Woody & Oriental Fragrance - 100 ml",
rating:"     4.6 (323 reviews)",
price:"Rs. 750"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CEOMAN-01_1024x1024.jpg?v=1648018406",
name:"CEO Man Eau De Parfum Office Wear for Men with long-lasting top hints of lemon and sugar - 100 ml",
rating:"     4.7 (662 reviews)",
price:"Rs. 675"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/IMPACT-01_1024x1024.jpg?v=1648018984",
name:"Impact Eau De Cologne Perfume For Man with Long Lasting Fragrance - 100 ml",
rating:"     4.7 (145 reviews)",
price:"Rs. 675"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Dominus-01_1024x1024.jpg?v=1648536086",
name:"Dominus Eau De Parfum Strong Perfume For Man, Long Lasting Scent Woody Fragrance , Luxury EDP Perfume for Man, Ideal Gift for Man - 100 ML",
rating:"     4.7 (59 reviews)",
price:"Rs. 675"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Salute-01_1024x1024.jpg?v=1632485142",
name:"Salute Strong Woody Perfume For Men - 100 ml",
rating:"     4.8 (127 reviews)",
price:"Rs. 499"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Spice-01_1024x1024.jpg?v=1632485256",
name:"Spice Man Perfume Long Lasting Scent Spicy, Citrus Aroma, Luxury EDT Perfume for Man, Gifts For Him - 100 ml",
rating:"     4.8 (306 reviews)",
price:"Rs. 499"},]


localStorage.setItem("perfumeObj",JSON.stringify(perfumeObj))

let flexData = JSON.parse(localStorage.getItem("perfumeObj")) || []
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