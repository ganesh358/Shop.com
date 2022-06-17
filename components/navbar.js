let navbar = () => {
    return `
    
    <div id="nav1">
    <div>
        <img id="imgn1" src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="">
    </div>
    <div>
        <img id="img1" src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="">
       <p>
        Categories</p>
    </div>
</div>
<div id="nav2">
    <div id="nav22">
          <div><div id="all">

            <select id="sel">
                <option value="">All Departments</option>
                <option value="">Auto</option>
                <option value="">Baby</option>
                <option value="">Beauty</option>
                <option value="">Books</option>
                <option value="">Business</option>
                <option value="">Cameras</option>
                <option value="">Clothes</option>
            </select>

          </div>
          <input id="input1" type="text" placeholder="Search SHOP.COM...">
          <button id="btn"><img src="https://img.shop.com/Image/resources/images/icon-search-24px.svg" alt=""></button>
          </div>
          <div><img src="https://img.shop.com/Image/header2013/motives-usa-can-100110-sculpting-concealer-banners-header1650486339409.svg" alt=""> </div>
    </div>
    <div id="nav23">
          
        <div id="nav231"> <a href="">Exclusive Brands
        </a>
           <a href="">Stores
        </a>
           <a href="">Deals
        </a>
           <a href="">SHOP Travel</a>
           <a href="">Departments</a>
           <a href="">ShopBuddy
        </a>
           <a href="">SHOP Local</a></div>
        <div id="nav232">
            <div><img src="https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg" alt=""><a id="a" href="login.html">Sign in</a></div>
            <div><img src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg" alt=""> <a id="a" href="">Orders</a></div>
            <div><img src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" alt=""> <a id="a" href="cart.html">Cart</a>  
            <p id="cart85"> 0</p></div>
        </div>

    </div>
</div>
</div>
    
    `;
}

export default navbar;
