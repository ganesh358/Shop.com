import navbar from "../components/navbar.js";

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

document.getElementById("btnl1").addEventListener("click",signFun);

var Data = JSON.parse(localStorage.getItem("userdata")) || [];
function signFun(){
    event.preventDefault();

    var userData = {
        Name: document.getElementById("name").value,

        Lastname: document.getElementById("lastname").value,

        email: document.getElementById("email").value,

        Password: document.getElementById("pass").value,

        Pass2: document.getElementById("pass2").value,


    }
if((document.getElementById("pass").value).length > 6 ){

    if(document.getElementById("pass").value === document.getElementById("pass2").value ){
        console.log(userData)

        if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("pass").value == ""){

            alert("Uh Oh! Somthing is Missing!")
            
        }
        else{
            Data.push(userData);
            localStorage.setItem("userdata",JSON.stringify(Data));
    
            alert("Sign Up Successfull")
            window.location.href = "login.html";
        }
           
    }
    else{
        alert("Uh Oh! Your Password and confirm password dont't match!")
    }
}
else{
    alert("Please Enter Atleast 7 Characters ")
}
 
   
 
   
}