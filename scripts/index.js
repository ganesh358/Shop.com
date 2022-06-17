document.getElementById("imgn1").addEventListener("click",Myimg);

function Myimg(){
    window.location.href = "index.html"
}

var cartData = JSON.parse(localStorage.getItem("cartData"));

let len = cartData.length;
console.log(len);
document.getElementById("cart85").innerHTML = len;


var inputdata = [
    {
        price: "$65.00",
        
        productname: "Lumière de VieⓇ Soothe & Renew Hydrogel Masque",
        producturl: [
            "https://www.shop.com/feo-cdn/Q/L/34b-s7bSg.webp",
           

        ],
            },
    {
        price: "$22.00",
        
        productname: "MotivesⓇ Sculpting Concealer",
        producturl: [
            "https://www.shop.com/feo-cdn/7/V/aENaroKkI.webp",
            
            
        ],
           },

    {
        price: "$39.95",
        
        productname: " MotivesⓇ 3-in-1 Cream Tints",
        producturl: [
            "https://www.shop.com/feo-cdn/X/B/6agm_20j4.webp",
           
    ],
        
    },


    {
        price: "$35.00",
        
        productname: "MotivesⓇ Moments Pressed Pigment Palette",
        producturl:[ 
        "https://www.shop.com/feo-cdn/C/v/O7JLbTeYc.webp",
           
    ],
        
    },
    {
        price: "$7.49",
        
        productname: "Shopping AnnuityⓇ Brand Premium Flushable Wipes - 150 Count",
        producturl: [
            
            'https://www.shop.com/feo-cdn/i/m/HGFp_X-n8.webp',
            

        ],
        
    },
    {
        price: "$49.95",
        
        productname: "GlutaQ",
        producturl: [
            
            'https://www.shop.com/feo-cdn/r/Q/GZMmizef8.webp',
            

        ],
        
    },
    {
        price: "$49.95",
        
        productname: "MycoAdapt",
        producturl: [
            
            'https://www.shop.com/feo-cdn/H/z/Z52joM7LA.webp',
            

        ],
        
    },
    {
        price: "$14.95",
       
        productname: "Shopping AnnuityⓇ Brand Premium Balance Belly Tea",
        producturl: [
            
            'https://www.shop.com/feo-cdn/o/e/aLGNt8X1Q.webp',
            

        ],
        
    },
    {
        price: "$46.00",
        
        productname: "Daily Greens",
        producturl: [
            
            'https://www.shop.com/feo-cdn/Q/M/61eIRpGYE.webp',
            

        ],
       
    },
   

]     

let cartFormLocal = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart = (e) => {
    // console.log(e)
    let arr = []
    let { price, productname, producturl, strickedoff } = e
    // console.log(producturl)
    let obj = {
        image_url: producturl,
        name: productname,
        price: price,
        strikedoffprice: strickedoff
    }
    arr.push(obj)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr))
    let cartDataFormLocal = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print(inputdata) {


    // console.log('a')
    var div_productDetailMainBox = document.querySelector('.productDetailMainBox')
    div_productDetailMainBox.innerText = '';

    inputdata.map(function (e) {



        var div_productDetailMainBox = document.querySelector('.productDetailMainBox')
        div_productDetailMainBox.setAttribute('id', 'productDetailMainBox')

        var div_image_productdetail = document.createElement('div')
        div_image_productdetail.setAttribute('class', 'div_image_productdetail')

        div_image_productdetail.addEventListener('click', function () {
            recomToCart(e)
        })



        div_productDetailMainBox.append(div_image_productdetail)

        var div_productImgHoverSale = document.createElement('div')
        div_productImgHoverSale.setAttribute('class', 'productImgHoverSale')

        div_image_productdetail.append(div_productImgHoverSale)

        var a_underlineRemove = document.createElement('a')
        a_underlineRemove.setAttribute('class', 'underlineRemove')

        div_productImgHoverSale.append(a_underlineRemove)

        var div_imgHoverSale = document.createElement('div')
        div_imgHoverSale.setAttribute('id', 'imgHoverSale')

        a_underlineRemove.append(div_imgHoverSale)

        var img_productImg = document.createElement('img')
        img_productImg.setAttribute('class', 'productImg')
        img_productImg.src = e.producturl[0]

        div_imgHoverSale.append(img_productImg);

        var div_hoverSaleDiv = document.createElement('div')
        div_hoverSaleDiv.setAttribute('class', 'hoverSaleDiv')

        div_imgHoverSale.append(div_hoverSaleDiv)

        var div_parntOfHover_area = document.createElement('div')
        div_parntOfHover_area.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv.append(div_parntOfHover_area)

        var div_hide = document.createElement('div')
        div_hide.setAttribute('class', 'hide')

        div_parntOfHover_area.append(div_hide)

        var i_fa_solid_fa_eye = document.createElement('i')
        i_fa_solid_fa_eye.setAttribute('class', 'fa-solid fa-eye')

        div_hide.append(i_fa_solid_fa_eye)

        var div_parntOfSale_area = document.createElement('div')
        div_parntOfSale_area.setAttribute('class', 'parntOfSale area')
        var div_saleDiv = document.createElement('div')
        div_saleDiv.setAttribute('id', 'saleDiv')
        var p_sale = document.createElement('p')
        p_sale.setAttribute('class', 'pSale')
      //  p_sale.innerText = e.discount;

        div_saleDiv.append(p_sale)

        div_parntOfSale_area.append(div_saleDiv)

        div_hoverSaleDiv.append(div_parntOfSale_area)




        var div_productDetail = document.createElement('div')
        div_productDetail.setAttribute('class', 'productDetail')

        div_image_productdetail.append(div_productDetail)

        var div_productName = document.createElement('div')
        div_productName.setAttribute('class', 'productName')

        div_productDetail.append(div_productName)

        var p_product_name = document.createElement('p')
        p_product_name.innerText = e.productname;

        div_productName.append(p_product_name)

        var div_starRating = document.createElement('div')
        div_starRating.setAttribute('class', 'starRating')

        div_productDetail.append(div_starRating)

        var span1_fa_fa_star_checked = document.createElement('span')
        span1_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating.append(span1_fa_fa_star_checked)

        var span2_fa_fa_star_checked = document.createElement('span')
        span2_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating.append(span2_fa_fa_star_checked)

        var span3_fa_fa_star_checked = document.createElement('span')
        span3_fa_fa_star_checked.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating.append(span3_fa_fa_star_checked)

        var span4_fa_fa_star = document.createElement('span')
        span4_fa_fa_star.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating.append(span4_fa_fa_star)

        var span5_fa_fa_star = document.createElement('span')
        span5_fa_fa_star.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating.append(span5_fa_fa_star)

        var div_price = document.createElement('div')
        div_price.setAttribute('class', 'price')

        div_productDetail.append(div_price)

        var div_offprice = document.createElement('div')
        div_offprice.setAttribute('class', 'offprice')

        div_price.append(div_offprice)

        // var s_for_offprice = document.createElement('p')
        // s_for_offprice.innerText = "free Shiping";

        // div_offprice.append(s_for_offprice)

        var div_currentprice = document.createElement('div')
        div_currentprice.setAttribute('class', 'currentprice')
        div_currentprice.innerText = e.price;

        div_price.append(div_currentprice)



        var div_discount = document.createElement('div')
        div_discount.setAttribute('class', 'discount')
       // div_discount.innerText = e.discount;
         var div2 = document.createElement("p");
         div2.innerText = "$1.30 / 2% Cashback";
         div2.setAttribute("class","div2")
         div_productDetail.append(div2)

       div_productDetail.append(div_starRating)
       div_starRating.style.fontSize = "1.4rem"

       let div = document.createElement("p");
       div.innerText = "Free Shipping with $99 orders";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free")

       div_productDetail.append(div)
        

    })
}




 








let arrRecomSlid = inputdata

let lefRecomSlid = 0;
let rigRecomSlid = 3;

totalData = arrRecomSlid.slice(lefRecomSlid, rigRecomSlid + 1)

print(totalData)


//                                         forward function
let forward = () => {
    lefRecomSlid += 1;
    rigRecomSlid += 1;

    // console.log(lefRecomSlid, rigRecomSlid)

    if (lefRecomSlid >= arrRecomSlid.length) {
        lefRecomSlid = lefRecomSlid - arrRecomSlid.length;
    }

    if (rigRecomSlid >= arrRecomSlid.length) {
        rigRecomSlid = rigRecomSlid - arrRecomSlid.length;
    }
    // console.log(lefRecomSlid, rigRecomSlid)


    let lefData;
    let rigData;
    let totalData;

    if (lefRecomSlid > rigRecomSlid) {
        // console.log('in',lef,arr.length)
        lefData = arrRecomSlid.slice(lefRecomSlid, arrRecomSlid.length)
        rigData = arrRecomSlid.slice(0, rigRecomSlid + 1)
        // console.log(lefData,rigData)
        totalData = [...lefData, ...rigData]
        // console.log(totalData)
    }
    else {
        // console.log('else',lef,rig)
        totalData = arrRecomSlid.slice(lefRecomSlid, rigRecomSlid + 1)
        // console.log(totalData)
    }


    //                                           cell to function Print Data
    print(totalData)
    // console.log(totalData)


}





//                                                    backward function



let backward = () => {

    // console.log(lefRecomSlid, rigRecomSlid)
    lefRecomSlid -= 1;
    rigRecomSlid -= 1;

    // console.log(lefRecomSlid, rigRecomSlid)


    if (lefRecomSlid < 0) {
        lefRecomSlid = arrRecomSlid.length + lefRecomSlid
    }

    if (rigRecomSlid < 0) {
        rigRecomSlid = arrRecomSlid.length + rigRecomSlid;
    }

    // console.log(lefRecomSlid, rigRecomSlid)




    let lefData;
    let rigData;
    let totalData;

    if (lefRecomSlid > rigRecomSlid) {
        // console.log('in',lef,arr.length)
        lefData = arrRecomSlid.slice(lefRecomSlid, arrRecomSlid.length)
        rigData = arrRecomSlid.slice(0, rigRecomSlid + 1)
        // console.log(lefData,rigData)
        totalData = [...lefData, ...rigData]
        // console.log(totalData)
    }
    else {
        // console.log('else',lef,rig)
        totalData = arrRecomSlid.slice(lefRecomSlid, rigRecomSlid + 1)
        // console.log(totalData)
    }

    //                                            cell to print Data

    print(totalData)



}


var data = JSON.parse(localStorage.getItem("usernew"));
var data1 = document.getElementById("a");

var out =document.getElementById("signout")
data.map(function(el,index){

    data1.innerHTML = null;
    
    let p = document.createElement("p");
    p.innerText = `Hello,${el.name}`;

    console.log(p)

    let b = document.createElement("button");
    b.innerText = "Sign Out";
    b.setAttribute("id","newuse")
    b.addEventListener("click",function(){
        signout(el,index);
    })

    data1.append(p);
    out.append(b)
})


function signout(el,index){
    data.splice(index,1);

    localStorage.setItem("usernew",JSON.stringify(data))
    window.location.reload();
}

document.getElementById("btn44").addEventListener("click",Fun);

function Fun(){
    window.location.href = "login.html"
}