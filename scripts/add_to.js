import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js";

document.getElementById("foot").innerHTML = footer();

document.getElementById("imgn1").addEventListener("click",Myimg);

function Myimg(){
    window.location.href = "index.html"
}



var cartData = JSON.parse(localStorage.getItem("cartData"));

let len = cartData.length;
console.log(len);
document.getElementById("cart85").innerHTML = len;
// var datac = JSON.parse(localStorage.getItem("cart"));

// console.log(datac)
// let h98 = document.getElementById("h11");
// let price1 = document.getElementById("price22")
// let imga = document.getElementById("imgas")

// datac.map(function(el){

//     h98.innerHTML = null;
//     price1.innerHTML = null;
//     imga.innerHTML = null;
//     let name = document.createElement("p");
//     name.innerText = el.name;

//     h98.append(name);

//     let price = document.createElement("p");
//     price.innerText = el.price;

//     price1.append(price)
    
//     let img1 = document.createElement("img");
//     img1.src = el.image_url[0];

//     imga.append(img1)
    

    
// })

 //var arr =[];

// document.getElementById("bell").addEventListener("click",cartFun);
// function cartFun(){
   
//     // datac.map(function(el){

//     //   var obj = {
//     //     name :el.name ,
    
//     //     price : el.price,

//     //    img1 : el.image_url ,
//     //   }
        
    
//     //    console.log(obj)
//     arr.push(obj);
//     localStorage.setItem("cart1",JSON.stringify(arr));
       
//     })

    

   
//}

let cartDataFormLocal = JSON.parse(localStorage.getItem('cart')) || []
// console.log(cartDataFormLocal)

let qS = (id) => {
    return document.querySelector(id)
}

let img12 = document.getElementById("imgas");

let printCartPageData = (dataForPrint) => {

    dataForPrint.map((e, i, arr) => {

        let { image_url, name, price } = e
        // console.log(image_url, name, newimg, price, strikedoffprice)
        let productImg = qS('#imgas')

        productImg.src = image_url[0];
        console.log(image_url)

        let productImg1 = document.createElement("img");
        productImg1.src = image_url[0];

        img12.append(productImg1)

        let margintop = qS('#h11')
        margintop.innerHTML = name;

        let currentPrice = qS('#price22')
        currentPrice.innerHTML = price;

       

    })

}




//                               print cart page data function

printCartPageData(cartDataFormLocal);


//                               add to cart button function for store data for mainCart




var dataForMainCart = JSON.parse(localStorage.getItem("cartData")) || [];

let storeDataForMainCart = () => {

    let productQuantity = qS('#bel').value;
    let currentPrice = qS('#price22').innerHTML;
    // console.log(currentPrice)
    let currentPriceSplit = currentPrice.split('')
    currentPriceSplit.splice(0, 1)
    let afterRupeesRem = currentPriceSplit.join('')
    // console.log(afterRupeesRem)
   
    let productImg = qS('#imgas').src;
    let productName = qS('#h11').innerHTML;
    let obj = {
        price: afterRupeesRem,
        qty: productQuantity,
        productname: productName,
        producturl: [productImg],

    }
    dataForMainCart.push(obj)
    localStorage.setItem('cartData', JSON.stringify(dataForMainCart))
    // window.location.reload();
     window.location.href = "cart.html"
    totalItemInCartFun();

    alert('Item Successfully Added To Your Cart');
    // console.log(obj)
}



let addToCartBtn = qS('#bell')
addToCartBtn.addEventListener('click', storeDataForMainCart)
