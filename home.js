let carasoulImages = [
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/15th_feb_cglow_banner_1.png?v=1648022281",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/18th_feb_banner_website_21471f64-43be-48ac-b229-94b26e8beab4.png?v=1645426727",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1620x512-Latest.png?v=1644649919",
];


let carasolContainerImg = document.querySelector("#carousel-container>img");

let i = 1;
carasolContainerImg.src = carasoulImages[0];
let dots = document.getElementById(0);
    dots.style.backgroundColor = "black"
setInterval(() => {
    if (i === carasoulImages.length) {
        let last = document.getElementById(i-1);
        last.style.backgroundColor = "grey"
            i = 0;
    }
    if (i > 0) {
        let one = document.getElementById(i-1);
        one.style.backgroundColor = "grey"
    } 

    let dots = document.getElementById(i);
    dots.style.backgroundColor = "black"
    carasolContainerImg.src = carasoulImages[i];
        i++;
}, 6000);




