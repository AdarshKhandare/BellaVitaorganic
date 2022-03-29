let lipcare = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-01_9c3f062b-b41a-45a7-a5a8-8fd203d83cda_1024x1024.jpg?v=1646822455",
name:"NicoLips Lip Lightening Scrub For Dry, Chapped & Damaged Lips Unisex - 20 gm",
rating:"     4.7 (2387 reviews)",
price:"Rs. 399"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoBalm-01_6c683236-3694-4219-8fee-e969bbf9e94d_1024x1024.jpg?v=1640436778",
name:"LipBalm Natural Balm For Dry and Chapped Lips - 5gm",
rating:"     4.6 (233 reviews)",
price:"Rs. 199"},]


localStorage.setItem("lipcare",JSON.stringify(lipcare))

let flexData = JSON.parse(localStorage.getItem("lipcare")) || []
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