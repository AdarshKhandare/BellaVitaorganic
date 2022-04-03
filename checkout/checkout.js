let cart_items = JSON.parse(localStorage.getItem("cardArr")) || []
console.log(cart_items)
let item_div = document.getElementById("item_div")
  function display(cart_items) {
    item_div.innerHTML = null;
    cart_items.map((el) => {
      let item = document.createElement("div");
      item.setAttribute("id", "item");

      //image div
      let item_img_div = document.createElement("div");
      item_img_div.setAttribute("id", "item_img_div");

      let img = document.createElement("img");
      img.setAttribute("id", "item_img");
      img.src = el.image;

      //title div
      let title_div = document.createElement("div");
      title_div.setAttribute("id", "title_div");

      let title = document.createElement("p");
      title.setAttribute("id", "item_name");
      title.innerHTML = el.name;

      // price div
      let price_div = document.createElement("div");
      price_div.setAttribute("id", "price_div");

      let delete_icon = document.createElement("div");
      delete_icon.setAttribute("id", "delete_icon");
      delete_icon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`

      let price = document.createElement("div");
      price.setAttribute("id", "item_price");
      price.innerHTML = "Rs."+" "+el.price;


      price_div.append(delete_icon, price);
      title_div.append(title);
      item_img_div.append(img);
      item.append(item_img_div, title_div, price_div);
      item_div.append(item);
    });
  }





function showTotal(cart_items){

    let total = cart_items.reduce(function(acc,ele){

        return acc + (+ele.price * (+ele.quant))
    },0)

    document.querySelector("#tdb_amount").innerText = "Rs."+" "+ total;
    document.querySelector("#sub_total").innerText = "Rs."+" "+ total;
    localStorage.setItem("Final_Total",JSON.stringify(total))

    display(cart_items)
}
showTotal(cart_items)


  let cart_page = document.getElementById("cart_page");
  cart_page.addEventListener("click", () => {
        window.location.href = "checkout.html";
  });

  let delivery_page = document.getElementById("delivery_page");
  delivery_page.addEventListener("click", () => {
        window.location.href = ""; // cart.html link 
  });


//  form validation
let address = [];
function formValidate() {
  let submit = document.getElementById("btn");
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hello")
    let fname = document.getElementById("floatingInput1");
    let lname = document.getElementById("floatingInput2");
    let location = document.getElementById("floatingInput3");
    let area = document.getElementById("floatingInput4");
    let city = document.getElementById("floatingInput5");
    let state = document.getElementById("floatingInput6");
    let pincode = document.getElementById("floatingInput7");
    let phone = document.getElementById("floatingInput8");


    if(
      fname.value === "" ||
      lname.value === "" ||
      location.value === "" ||
      area.value === "" ||
      city.value === "" ||
      state.value === "State" ||
      pincode.value === "" ||
      phone.value === ""
    ) 
    {
      alert("All the fields are mandatory");
    } 
    else {
      alert("Address added sucessfully");
      address.push(
        fname.value,
        lname.value,
        location.value,
        area.value,
        city.value,
        state.value,
        pincode.value,
        phone.value
      );
      console.log(address);
      localStorage.setItem("user_address", JSON.stringify(address));
      window.location.href = "/payment/payment.html"

    }
  });
}
formValidate()


// var reguserarr = JSON.parse(localStorage.getItem("storedreguser"))||[]
// console.log(reguserarr);

// document.getElementById("checkout_user_details").innerText = reguserarr.email;
