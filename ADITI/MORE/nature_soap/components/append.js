const DataAppend=(data, parent)=>{
    parent.innerHTML = "";
    data.forEach(function(ele){

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
            button.addEventListener("click", function(){
                addtocart(ele)
            })

            let quick = document.createElement("p")
            quick.innerText = "QUICK VIEW"
            quick.setAttribute("id","quick")
            quick.setAttribute("class","mybquickoverlap")

            let name = document.createElement("p")
            name.innerText = ele.name
            name.setAttribute("id","name")

            let rating = document.createElement("p")
            rating.innerHTML=`<i style="color:gold;"class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-regular fa-star-half-stroke"></i>`+""+ele.rating;
            rating.setAttribute("id","rating")
            
            let strickedoffprice = document.createElement("h5")
            strickedoffprice.innerText = ele.strickedoffprice
            strickedoffprice.setAttribute("id", "strickprice")

            let price = document.createElement("h5")
            price.innerText = "Rs."+""+ ele.price

            let divP = document.createElement("div")
            divP.setAttribute("id","divp")

            let save = document.createElement("p")
            save.innerText = ele.save
            save.setAttribute("id", "save")
            divI.append(img,button,quick)
            divP.append(strickedoffprice,price)

            div.append(divI,name,rating,divP,save);
            parent.append(div)
    })

}
export { DataAppend }


function addtocart(ele)
{
    let cardArr = JSON.parse(localStorage.getItem("cardArr")) || []
    console.log(ele)
    cardArr.push(ele)
    console.log(cardArr)
    localStorage.setItem("cardArr", JSON.stringify(cardArr));
}