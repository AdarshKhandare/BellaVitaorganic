function content(cart_items, location, sub_total, sub_total_bottom) {
  let checkout_user_details = document.getElementById("checkout_user_details");
  let arr = JSON.parse(localStorage.getItem("login_status"));

  checkout_user_details.innerHTML = `${arr[0].name}(${arr[0].email})`;

  display(cart_items);

  function display(cart_items) {
    cart_items.map((el, index) => {
      let item = document.createElement("div");
      item.setAttribute("id", "item");

      //image div
      let item_img_div = document.createElement("div");
      item_img_div.setAttribute("id", "item_img_div");

      let img = document.createElement("img");
      img.setAttribute("id", "item_img");
      img.src = el.Img_url;

      let qty_circle = document.createElement("div");
      qty_circle.setAttribute("id", "qty_circle");

      let qty = document.createElement("p");
      qty.innerHTML = `${el.Qty}`;

      //title div
      let title_div = document.createElement("div");
      title_div.setAttribute("id", "title_div");

      let count_div = document.createElement("div");
      count_div.setAttribute("id", "count_div");

      let decre = document.createElement("p");
      decre.setAttribute("id", "decre");
      decre.innerHTML = `-`;

      decre.addEventListener("click", () => {
        let q = cart_items[index].Qty;
        let p = cart_items[index].Price;
        if (q > 1) {
          q--;
          cart_items[index].Qty = q;
          qty.innerHTML = `${q}`;
          count_value.innerHTML = `${q}`;
          price.innerHTML = `₹${p * q}.00`;
          cart_items[index].Amount = `${p * q}`;
          let x = cart_items.reduce((ac, cv) => {
            return ac + Number(cv.Amount);
          }, 0);
          sub_total.innerHTML = `₹ ${x}.00`;
          sub_total_bottom.innerHTML = `<span>INR</span> ₹${x}.00`;
          localStorage.setItem("cart_items", JSON.stringify(cart_items));
          document.location.reload();
        }
      });

      let count_value = document.createElement("p");
      count_value.setAttribute("id", "count_value");
      count_value.innerHTML = `${el.Qty}`;

      let incre = document.createElement("p");
      incre.setAttribute("id", "incre");
      incre.innerHTML = `+`;

      incre.addEventListener("click", () => {
        let p = Number(cart_items[index].Price);
        let q = Number(cart_items[index].Qty);
        console.log(typeof p, typeof q);
        q++;
        cart_items[index].Qty = q;
        qty.innerHTML = `${q}`;
        count_value.innerHTML = `${q}`;
        price.innerHTML = `₹${p * q}.00`;
        cart_items[index].Amount = `${p * q}`;
        let x = 0;
        x = cart_items.reduce((ac, cv) => {
          return ac + Number(cv.Amount);
        }, 0);
        sub_total.innerHTML = `₹ ${x}.00`;
        sub_total_bottom.innerHTML = `<span>INR</span> ₹${x}.00`;
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        document.location.reload();
      });

      let title = document.createElement("p");
      title.setAttribute("id", "item_name");
      title.innerHTML = `${el.Name}`;

      // price div
      let price_div = document.createElement("div");
      price_div.setAttribute("id", "price_div");

      let delete_icon = document.createElement("div");
      delete_icon.setAttribute("id", "delete_icon");

      delete_icon.addEventListener("click", () => {
        cart_items.splice(index, 1);
        localStorage.setItem("cart_items", JSON.stringify(cart_items));
        document.location.reload();
      });

      let price = document.createElement("div");
      price.setAttribute("id", "item_price");

      if (el.Amount === undefined) {
        price.innerHTML = `₹${el.Price}.00`;
      } else {
        price.innerHTML = `₹${el.Amount}.00`;
      }

      price_div.append(delete_icon, price);
      count_div.append(decre, count_value, incre);
      title_div.append(title, count_div);
      qty_circle.append(qty);
      item_img_div.append(qty_circle, img);
      item.append(item_img_div, title_div, price_div);
      location.append(item);
    });
  }
}

// form validation
function formValidate() {
  let submit = document.getElementById("btn");
  submit.addEventListener("click", () => {
    let check_status = JSON.parse(localStorage.getItem("check_status"));
    console.log("check_status:", check_status);
    let fname = document.getElementById("floatingInput1");
    let lname = document.getElementById("floatingInput2");
    let location = document.getElementById("floatingInput3");
    let area = document.getElementById("floatingInput4");
    let city = document.getElementById("floatingInput5");
    let state = document.getElementById("floatingInput6");
    let pincode = document.getElementById("floatingInput7");
    let phone = document.getElementById("floatingInput8");

    let address = [];

    if (
      fname.value === "" ||
      lname.value === "" ||
      location.value === "" ||
      area.value === "" ||
      city.value === "" ||
      state.value === "State" ||
      pincode.value === "" ||
      phone.value === ""
    ) {
      alert("All the fields are mandatory");
    } else {
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
      check_status.cod = "1";
      check_status.delivery = "0";
      check_status.cart = "0";
      check_status.payment = "0";
      localStorage.setItem("check_status", JSON.stringify(check_status));
      document.location.reload();
    }
    fname.value === ""
      ? (fname.style.borderColor = "red")
      : (fname.style.borderColor = "rgb(219, 216, 216)");

    lname.value === ""
      ? (lname.style.borderColor = "red")
      : (lname.style.borderColor = "rgb(219, 216, 216)");

    location.value === ""
      ? (location.style.borderColor = "red")
      : (location.style.borderColor = "rgb(219, 216, 216)");

    area.value === ""
      ? (area.style.borderColor = "red")
      : (area.style.borderColor = "rgb(219, 216, 216)");

    city.value === ""
      ? (city.style.borderColor = "red")
      : (city.style.borderColor = "rgb(219, 216, 216)");

    state.value === "State"
      ? (state.style.borderColor = "red")
      : (state.style.borderColor = "rgb(219, 216, 216)");

    pincode.value === ""
      ? (pincode.style.borderColor = "red")
      : (pincode.style.borderColor = "rgb(219, 216, 216)");

    phone.value === ""
      ? (phone.style.borderColor = "red")
      : (phone.style.borderColor = "rgb(219, 216, 216)");
  });
}

export { content, formValidate };