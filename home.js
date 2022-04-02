import navbar from "./Sai/Components/navbar.js";
import footer from "./Sai/Components/Footer.js";

let belowCategoryCards = [
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/874-874-01.png?v=1645425693",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/cat-hair-care-desktop-22-09.jpg?v=1632336344",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/874-874-2.png?v=1645425957",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/874-874.png?v=1644298587",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/cat-perfume-desktop-22-09.jpg?v=1632336461",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/cat-essential-oils-desktop-22-09.jpg?v=1632336497",
];

let belowCategorySection = document.querySelector("#belowCategory-cards>div");
const displaycards = (arr) => {
  arr.map((elem, ind, arr) => {
    let image = document.createElement("img");
    image.src = elem;
    belowCategorySection.append(image);
  });
};

displaycards(belowCategoryCards);


let reviewsArr = [];

class Review {
  constructor(name, image, testimonial) {
    this.name = name;
    this.image = image;
    this.testimonial = testimonial;
  }
}


let review2 = new Review(
  "TSHER",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/2.png?v=1603863359",
  "My Rays Of Sunshine@bellavita.organic Mango Hair Mask. Absolutely loving the results. I was looking for a product without chemicals , parabens but my search came to an end when I used bellavita organic hair mango mask, its amazing and my preference, no parabens, no chemicals..."
);
let review3 = new Review(
  "MAHIKA",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/3.png?v=1603863371",
  "Dark lips?? Scrub it away. NicoLips Lip Balm Scrub For Lightening & Brightening Dark Lips For Men & Women. The unique formulation is excellent for Lip Lightening and Dark Spot Removal. The perfect solution for Smokers, NicoLips works wonders against Nicotine Stains created on lip..."
);

let review4 = new Review(
  "JINAL",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/4.png?v=1603863386",
  "Hi everyone, I got this nicolips scrub from @bellavita.organic it is the best scrub for dark and dry , chapped lips . Bella Vita Organic’s NicoLips is the perfect natural & chemical free solution for flawless pink/red lips free of dark spots and nicotine marks. Nicolip Scrub is both an exfoliating..."
);
let review5 = new Review(
  "SHAILENDER",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/5.png?v=1603863398",
  "Hi everyone, I got this nicolips scrub from @bellavita.organic it is the best scrub for dark and dry , chapped lips . Bella Vita Organic’s NicoLips is the perfect natural & chemical free solution for flawless pink/red lips free of dark spots and nicotine marks. Nicolip Scrub is both an exfoliating..."
);

let review6 = new Review(
  "NAINA",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/6.png?v=1603863416",
  "Do your nails break too often? Try this organic Nail and Cuticle oil from @bellavita.organic made with absolute care while ensuring high standards of quality, freshly sourced ingredients, small production batch sizes and sustainable packaging to support our mother Earth that keeps your..."
);

let review7 = new Review(
  "SIMRAN KAUR",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/7.png?v=1603863444",
  "Skincare is my most favourite thing to do in my everyday routine. And as I was looking for good serum i found this magic face oil from @bellavita.organic which brightens my skin and also hydrates it i use it regularly before going to sleep and wake up with healthy skin i bought this..."
);
let review8 = new Review(
  "SAUNDARYA THAKUR",
  "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/8.png?v=1603863464",
  "I tried their shampoo and conditioner that has given healthy hair regimen to my damaged hair that is now back to life in just a few months and can make hair look and feel smoother. I also used their night care cream which gives me a healthy glow.⁣⁣⁣ ⁣⁣⁣ I am using their multiple products..."
);

reviewsArr.push( review2, review3, review4, review5, review6, review7, review8);

const createTag = (tag) => {
  return document.createElement(tag);
}
let counter = 0;
let reviewsDiv = document.querySelector("#reviews>div");
const displayReviews = () => {

  setInterval(() => {
    if (counter === reviewsArr.length) {
      counter = 0;
    }
    reviewsDiv.innerHTML = null;
    let img = createTag("img");
    img.src = reviewsArr[counter].image;
    let para = createTag("p")
    para.innerText = reviewsArr[counter].testimonial;
    let h6 = createTag("h6");
    h6.innerText = reviewsArr[counter].name;
    reviewsDiv.append(img, para, h6);
    counter++;
  },4000);
   
} 
displayReviews();

// -------bestSellers absolute Button--------------------------------
let bestSellerImg = document.querySelector("#bestSellers .carousel-cell>img");
let buyButton = document.querySelector("#bestSellers .carousel-cell .buy")
buyButton.addEventListener("hover", () => {
  bestSellerImg.style.opacity = "0.2";
  
console.log("dvdv")
})


// -----------------------------------------------------------------
// Navbar

let navbarDiv = document.querySelector("#navbar");
navbarDiv.innerHTML = navbar();

let footerDiv = document.querySelector("#footer");

footerDiv.innerHTML = footer();




  
