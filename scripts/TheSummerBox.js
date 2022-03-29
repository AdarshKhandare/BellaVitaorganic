let summerbox = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/EyeLift-01_d29b983b-1aec-41d8-bf8e-4dd132398e11_1024x1024.jpg?v=1646821188",
name:"EyeLift Under Eye Cream for Dark Circles, Puffy Eyes & Wrinkles, For Men & Women - 20 gm",
rating:"     4.7 (2673 reviews)",
price:"Rs. 285"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoBalm-01_6c683236-3694-4219-8fee-e969bbf9e94d_1024x1024.jpg?v=1640436778",
name:"LipBalm Natural Balm For Dry and Chapped Lips - 5gm",
rating:"     4.6 (233 reviews)",
price:"Rs. 199"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/GLOWNER-01_e0fa1e78-3b5f-4fbb-a10d-12f90cf9788d_1024x1024.jpg?v=1647499518",
name:"Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 100 ml",
rating:"     4.8 (912 reviews)",
price:"Rs. 249"},]




localStorage.setItem("summerbox",JSON.stringify(summerbox))

let flexData = JSON.parse(localStorage.getItem("summerbox")) || []
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