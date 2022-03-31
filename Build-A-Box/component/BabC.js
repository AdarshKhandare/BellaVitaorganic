const DataAppend=(data, parent)=>{

    data.forEach(function(ele){

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
            rating.innerHTML=`<i style="color:gold;"class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-solid fa-star"></i><i style="color:gold;" class="fa-regular fa-star-half-stroke"></i>`+""+ele.rating;

            div.append(img,button,name,rating)
            parent.append(div)
    })

}
export { DataAppend }