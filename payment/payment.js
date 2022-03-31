let sucess = document.getElementById("sucess");
let container = document.getElementById("container");
let home_btn = document.getElementById("home_btn");

home_btn.addEventListener("click", () => {
  window.location.href = "./index.html";
});
document.querySelectorAll(".payment_method").forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "teal";
    el.style.color = "white";
  });
  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor = "white";
    el.style.color = "black";
  });
});

// setting total amount

let cart_items = JSON.parse(localStorage.getItem("cart_items")) || [];
let x = 0;
for (let i = 0; i < cart_items.length; i++) {
  if (cart_items[i].Amount === undefined) {
    x = x + Number(cart_items[i].Qty) * Number(cart_items[i].Price);
  } else {
    x = x + Number(cart_items[i].Amount);
  }
}

document.getElementById("price").innerHTML = `₹ ${x}.00`;

// form validation

let submit = document.getElementById("card_btn");
submit.addEventListener("click", () => {
  let card_number = document.getElementById("card_number");
  let card_name = document.getElementById("card_name");
  let doe = document.getElementById("doe");
  let cvv = document.getElementById("cvv");

  if(
    card_number.value === "" ||
    card_name.value === "" ||
    doe.value === "" ||
    cvv.value === ""
  ) 
  {
    alert("All the fields are mandatory");
  } 
  else {
    container.style.opacity = "0.2";
    setTimeout(() => {
      sucess.style.display = "block";
    }, 2000);
  }
});