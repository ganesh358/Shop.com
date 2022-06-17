
import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();


import footer from "../components/footer.js";

document.querySelector("#foot").innerHTML = footer();

document.getElementById("imgn1").addEventListener("click",Myimg);

function Myimg(){
    window.location.href = "index.html"
}


var data = JSON.parse(localStorage.getItem("usernew"));
var data1 = document.getElementById("a");


// data.map(function(el){

//     data1.innerHTML = null;

//     let p = document.createElement("p");
//     p.innerText = `Hello, ${el.name}`;

//     console.log(p)

//     data1.append(p);
// })



var cartData = JSON.parse(localStorage.getItem("cartData"));

let len = cartData.length;
console.log(len);
document.getElementById("cart85").innerHTML = len;


let total = cartData.reduce(function(sum,el,index,arr){
    return sum + Number( el.qty * el.price);
},0);

document.getElementById("total").innerHTML = `$${total}`;
document.getElementById("total1").innerHTML = `$${total}`;


console.log(cartData)

let maindivap = document.getElementById("appendDiv");

cartData.map(function(el,index){

    let main = document.createElement("div");
    main.setAttribute("id","maink")
    let div = document.createElement("div");
    div.setAttribute("id","divk")

    let img = document.createElement("img");
    img.src = el.producturl;
    img.setAttribute("id","imgid")

    div.append(img);
    

    let div1 = document.createElement("div");
    div1.setAttribute("id","div1k")
    let name = document.createElement("h2");
    name.innerText = el.productname;

    let price1 = document.createElement("h1");
    price1.innerText = `$${el.price}`;

    let qyt = document.createElement("h3");
    qyt.innerHTML = `QTY : ${el.qty}`;

    let dis = document.createElement("p");
    dis.innerText = `+ $0.80  Cashback Item#: PRESH33 Includes four multi-use tints`;
    dis.setAttribute("id","dis1")
    
    let btn1 = document.createElement("button");
    btn1.innerText = "Save for Later";

    let btn2 = document.createElement("button");
    btn2.setAttribute("id","btn2k");
    btn2.innerText = 'Remove'
    btn2.addEventListener("click",function(){
        remove(el,index);
    })
    let div3 = document.createElement("div");
    div3.setAttribute("id","div3k")
    div3.append(name,btn1,btn2)

    div1.append(div3,price1,dis,qyt);


    main.append(div,div1);

    maindivap.append(main);


})



function  remove(el,index){

    cartData.splice(index, 1);

    localStorage.setItem("cartData",JSON.stringify(cartData));

    window.location.reload();

}



