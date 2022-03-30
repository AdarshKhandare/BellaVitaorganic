let comboObj = [{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/LipBalm_-NicoLips-Lip-Scrub-Combo_1024x1024.jpg?v=1647863372",
name:"NicoLips Lip Scrub & LipBalm Combo For Dry, Chapped & Dark Lips, 20 gm & 5 gm",
rating:"4.7 (2300 reviews)",
price:"538",
strickedoffprice:"Rs. 675",
save:"(Save Rs. 137)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Women-_-Men_1024x1024.jpg?v=1647342718",
name:"DeoWhite Natural Under Arm Skin Whitening Roll-On Deodorant Combo For Him & Her 50 ml Each",
rating:"4.7 (435 reviews)",
price:"349",
strickedoffprice:"Rs. 398",
save:"(Save Rs. 49)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NicoLips-02_1024x1024.jpg?v=1647345121",
name:"NicoLips Lip Lightening Scrub For Dry & Chapped Lips - Pack Of 2, 20 gm Each",
rating:"4.7 (2255 reviews)",
price:"699",
strickedoffprice:"Rs. 900",
save:"(Save Rs. 201)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Face-wash_-Glowner_1024x1024.jpg?v=1643781091",
name:"Pore Minimizing Combo - Face Wash and Face Toner",
rating:"4.7 (1156 reviews)",
price:"465",
strickedoffprice:"Rs. 548",
save:"(Save Rs. 83)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Pack-of-2_1024x1024.jpg?v=1640436701",
name:"LipBalm - For Dark, Dry & Chapped Lips - Pack Of 2 , 5 gm Each",
rating:"4.6 (218 reviews)",
price:"399",
strickedoffprice:"Rs. 450",
save:"(Save Rs. 51)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Men-02_1024x1024.jpg?v=1647326891",
name:"DeoWhite Underarm Whitening & Lightening Natural Roll On Deodorant Combo For Men 50 ml Each",
rating:"4.8 (162 reviews)",
price:"349",
strickedoffprice:"Rs. 398",
save:"(Save Rs. 49)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Deo-White-Women-02_1024x1024.jpg?v=1647326857",
name:"DeoWhite Under Arm Skin Whitening & Lightening Natural Roll On Deodorant Combo For Women 50 ml Each",
rating:"4.6 (148 reviews)",
price:"349",
strickedoffprice:"Rs. 398",
save:"(Save Rs. 49)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Anti-Acne-Face-wash_-Anti-Acne-Face-Gel-Cream-Combo_1024x1024.jpg?v=1647864525",
name:"Anti Acne Combo (Face Wash + Face Gel)",
rating:"4.8 (506 reviews)",
price:"530",
strickedoffprice:"Rs. 698",
save:"(Save Rs. 168)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/12_1_1024x1024.jpg?v=1632397421",
name:"Aroma Candles 4 X 60g each, 100% Pure Soy Wax Vanilla, Cinnamon, Lavender & Rose, Upto 15 hours",
rating:"4.7 (299 reviews)",
price:"399",
strickedoffprice:"Rs. 499",
save:"(Save Rs. 100)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Brush_1024x1024.jpg?v=1580215524",
name:"Mini Face Pack Brush for Women & Men - Pack of 2",
rating:"4.7 (258 reviews)",
price:"225",
strickedoffprice:"Rs. 399",
save:"(Save Rs. 174)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Shampoo_-Silky-Strong_-Conditioner_684c384c-fed1-494f-8ff9-17caf51d2709_1024x1024.jpg?v=1632218387",
name:"Hair Essential Combo Pack - Shampoo + Conditioner + Hair Oil",
rating:"4.8 (823 reviews)",
price:"779",
strickedoffprice:"Rs. 1,173",
save:"(Save Rs. 394)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-Glow-Face-Wash_-Exfoliate-Scrub-Combo_1024x1024.jpg?v=1647864479",
name:"Natural Anti Pollution Combo Pack - Face Wash + Face & Body Scrub Grit",
rating:"4.7 (1127 reviews)",
price:"445",
strickedoffprice:"Rs. 524",
save:"(Save Rs. 79)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/TheSupremeComboforMen-5BESTSELLERSinoneCOMBO_1024x1024.jpg?v=1643780930",
name:"The Supreme Combo for Men - 5 BEST SELLERS in one COMBO",
rating:"4.0 (1 review)",
price:"999",
strickedoffprice:"Rs. 1,722",
save:"(Save Rs. 723)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Growth-Protein-Shampoo_-Growth-Protein-Conditioner-Combo_1024x1024.jpg?v=1647863816",
name:"Growth Protein Shampoo & Conditioner Combo For Hair Fall Control & Dry & Frizz Free Hair - 225 ml Each",
rating:"4.9 (196 reviews)",
price:"489",
strickedoffprice:"Rs. 674",
save:"Save Rs. 185)"},
{image:"https://cdn.shopify.com/s/files/1/0054/6665/2718/products/C-GlowFacewash_FaceCream_FaceSerum_1024x1024.jpg?v=1647929187",
name:"Vitamin C Nightcare Regime - Face Wash + Face Serum + Face Cream",
rating:"Write Review",
price:"849",
strickedoffprice:"Rs. 999",
save:"(Save Rs. 150)"}
]


localStorage.setItem("comboObj",JSON.stringify(comboObj))

let comboData = JSON.parse(localStorage.getItem("comboObj")) || []

let comboappply = document.querySelector("#data")

const comboappend=()=>{

    comboData.forEach(function(ele){

            let div = document.createElement("div")
            div.setAttribute("id","divFlex")
            div.setAttribute("class","mydivouter")
            let divI = document.createElement("div")
            divI.setAttribute("id","divI")

            let img = document.createElement("img")
            img.src = ele.image

            let button = document.createElement("button")
            button.innerText = "ADD TO BOX"
            button.setAttribute("class","mybuttonoverlap btn btn-info")

            let name = document.createElement("p")
            name.innerText = ele.name
            name.setAttribute("id","name")

            let rating = document.createElement("p")
            rating.innerText = "🌟🌟🌟🌟" + " " +ele.rating
            rating.setAttribute("id","rating")
            
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
            divI.append(img,button)
            divP.append(strickedoffprice,price)

            div.append(divI,name,rating,divP,save);
            comboappply.append(div)
    })

}
comboappend()


// sort function

var FData = JSON.parse(localStorage.getItem("comboObj")) || []
var Fappply = document.querySelector("#data")

let xx = document.querySelector("#sorter").value;
function sortP1() {
    console.log(FData)
    if(xx == "h2l"){

          FData.sort(function (a, b) {
          return b.price - a.price;
        });

        Fappply.innerHTML = "";
        comboappend()
    }

}
// // sortP(comboData) 


// comboappend(comboData)

// function sortBy(FData){

//     let sortby = document.getElementById("sorter").value;

//     if(sortby == "h2l"){
//         FData.sort(function(a, b){
//             return b.price - a.price;
//         });
//         Fappply.innerHTML = "";
//         comboappend(FData); 
//     }
    
//     else if(sortby == "l2h"){
//       FData.sort(function(a, b){
//             return a.price - b.price;
//         });
//         Fappply.innerHTML = "";
//         comboappend(FData);    
//     }
    
    
// }