

import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();



import footer from "../components/footer.js";

document.querySelector("#foot").innerHTML = footer();


document.getElementById("btn3").addEventListener("click",Mybtn3);

function Mybtn3(){
    window.location.href = "signUp.html"
}

document.getElementById("imgn1").addEventListener("click",Myimg);

function Myimg(){
    window.location.href = "index.html"
}


var cartData = JSON.parse(localStorage.getItem("cartData"));

let len = cartData.length;
console.log(len);
document.getElementById("cart85").innerHTML = len;



var regdUsers = JSON.parse(localStorage.getItem("userdata"));
//console.log(regdUsers)

document.getElementById("btn2").addEventListener("click",loginFun)


var arr2 = [];
function loginFun(){
    event.preventDefault();


      var  enteredEmail = document.getElementById("email").value;

      var  enteredPass =  document.getElementById("password").value;

    //  console.log(enteredEmail,enteredPass)

    
      for (var i = 0; i < regdUsers.length; i++) {
        console.log(regdUsers[i]);
        if (
          regdUsers[i].email == enteredEmail &&
          regdUsers[i].Password == enteredPass

        ) {
          alert("login success");


          let obj = {
            email :  regdUsers[i].email,
            name : regdUsers[i].Name,

          }

          console.log(obj)
           arr2.push(obj)
          localStorage.setItem("usernew",JSON.stringify(arr2))
          window.location.href = "index.html";

          break;
        } 
        else {
          console.log("login failed");
          alert("Wrong Password!")
        }
  }
 
  

    
 }