import navbar from "/components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();


import footer from "../components/footer.js";

document.querySelector("#foot").innerHTML = footer();

document.getElementById("imgn1").addEventListener("click",Myimg);

function Myimg(){
    window.location.href = "index.html"
}

var cartData = JSON.parse(localStorage.getItem("cartData"));

let len = cartData.length;
console.log(len);
document.getElementById("cart85").innerHTML = len;

var data = JSON.parse(localStorage.getItem("usernew"));
var data1 = document.getElementById("a");


data.map(function(el){

    data1.innerHTML = null;

    let p = document.createElement("p");
    p.innerText = `Hello,${el.name}`;

    console.log(p)

    data1.append(p);
})