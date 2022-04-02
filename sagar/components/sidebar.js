function sidebar(){
    return `<nav class="sidebar card py-2 mb-4" style="border: none;">
    <div id="category">CATEGORIES</div>
    <ul class="nav flex-column" id="nav_accordion">
        <li class="nav-item">
            <a class="nav-link" href="#"> All Products </a>
            <a class="nav-link" href="#"> Best Seller </a>
            <a class="nav-link" href="#"> Build A Box </a>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> Offers</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">All Offers </a></li>
                <li><a class="nav-link" href="#">Collaborations </a></li>
            </ul>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> By Category</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">Skin Care </a></li>
                <li><a class="nav-link" href="#">Hair Care </a></li>
                <li><a class="nav-link" href="#">Face Care </a></li>
                <li><a class="nav-link" href="#">Body Care </a></li>
                <li><a class="nav-link" href="#">Essential Oils </a></li>
                <li><a class="nav-link" href="#">Perfumes </a></li>
                <li><a class="nav-link" href="#">Natural Soaps </a></li>
                <li><a class="nav-link" href="#">Hair Combs </a></li>
            </ul>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> By Concern</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">Acne & Pimples </a></li>
                <li><a class="nav-link" href="#">Oily Skin </a></li>
                <li><a class="nav-link" href="#">Tanning </a></li>
                <li><a class="nav-link" href="#">Underarm Lightening </a></li>
                <li><a class="nav-link" href="#">Blackheads </a></li>
                <li><a class="nav-link" href="#">Body Odor </a></li>
                <li><a class="nav-link" href="#">Hair Fall </a></li>
                <li><a class="nav-link" href="#">Dandruff </a></li>
                <li><a class="nav-link" href="#">Dry Skin </a></li>
                <li><a class="nav-link" href="#">Sensitive Skin </a></li>
                <li><a class="nav-link" href="#">Dull Skin </a></li>
                <li><a class="nav-link" href="#">Blemishes & Pigmentation </a></li>
            </ul>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> By Ingredients</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">Aloevera </a></li>
                <li><a class="nav-link" href="#">Coffee </a></li>
                <li><a class="nav-link" href="#">Honey </a></li>
                <li><a class="nav-link" href="#">Neem </a></li>
                <li><a class="nav-link" href="#">Tea Tree </a></li>
                <li><a class="nav-link" href="#">Sandalwood </a></li>
                <li><a class="nav-link" href="#">Saffron </a></li>
                <li><a class="nav-link" href="#">Coconut Oil </a></li>
                <li><a class="nav-link" href="#">Rose </a></li>
                <li><a class="nav-link" href="#">Shea Butter </a></li>
                <li><a class="nav-link" href="#">Fuller's Earth </a></li>
                <li><a class="nav-link" href="#">All Ingredients </a></li>
            </ul>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> Combos</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">Combos </a></li>
                <li><a class="nav-link" href="#">C-Glow Range </a></li>
                <li><a class="nav-link" href="#">Gifts </a></li>
            </ul>
        </li>
        <li class="nav-item has-submenu">
            <div class="nav-link catelog" style="display: flex; justify-content: space-between;" ><a href="#"> More</a><i class="fa-solid fa-angle-down"></i> </div>
            <ul class="submenu collapse">
                <li><a class="nav-link" href="#">Natural Soaps </a></li>
                <li><a class="nav-link" href="#">SELFIE SWITCH </a></li>
                <li><a class="nav-link" href="#">Gift Cards </a></li>
                <li><a class="nav-link" href="#">Blog </a></li>
                <li><a class="nav-link" href="#">Salon </a></li>
                <li><a class="nav-link" href="#">Order Tracking </a></li>
                <li><a class="nav-link" href="#">Contact us </a></li>
                <li><a class="nav-link" href="#">Shipping Policy </a></li>
                <li><a class="nav-link" href="#">Terms and Conditions </a></li>
            </ul>
        </li>
    </ul>
    </nav>`
}

export default sidebar;