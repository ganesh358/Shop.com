var inputdata1 = [
    {
        price1: "$22.50",
        
        productname1: "DNA MiraclesⓇ Natural Soothing Orintment",
        producturl1: [
            "https://img.shop.com/Image/250000/250100/250199/products/960258130.jpg?size=300x300",
           

        ],
            },
    {
        price1: "$33.95",
        
        productname1: "DNA MiraclesⓇ Chewable Probiotics",
        producturl1: [
            "https://img.shop.com/Image/250000/250100/250199/products/1065616466.jpg?size=300x300",
            
            
        ],
           },

    {
        price1: "$58.95",
        
        productname1: " DNA Miracles IsotonixⓇ Digestive Enzymes",
        producturl1: [
            "https://img.shop.com/Image/250000/250100/250199/products/1021314379.jpg?size=300x300",
           
    ],
        
    },


    {
        price1: "$57.95",
        
        productname1: "DNA MiraclesⓇ Natural Bathtime Box",
        producturl1:[ 
        "https://img.shop.com/Image/250000/250100/250199/products/1519464953.jpg?size=300x300",
           
    ],
        
    },
    {
        price1: "$37.95",
        
        productname1: "DNA MiraclesⓇ Pribiotics Extra",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/960882758.jpg?size=300x300',
            

        ],
        
    },
    {
        price1: "$15.95",
        
        productname1: "DNA MiraclesⓇ 3-in-1 Shampoo, Body Wash + Bubble Bath",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/1787558026.jpg?size=300x300',
            

        ],
        
    },
    {
        price1: "$31.95",
        
        productname1: "DNA Miracles OPC-3Ⓡ Chews",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/1065616467.jpg?size=300x300',
            

        ],
        
    },
    {
        price1: "$38.95",
       
        productname1: "DNA MiraclesⓇ Essential Omega 3",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/1065616464.jpg?size=300x300',
            

        ],
        
    },
    {
        price1: "$37.95",
        
        productname1: "DNA MiraclesⓇ Probiotics Extra",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/960882758.jpg?size=300x300',
            

        ],
       
    },
    {
        price1: "$22.50",
        
        productname1: "DNA Miracles IsotonixⓇ Immune ",
        producturl1: [
            
            'https://img.shop.com/Image/250000/250100/250199/products/1332818472.jpg?size=300x300',
            

        ],
       
    },
   

]     

let cartFormLocal1 = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart1 = (e) => {
    // console.log(e)
    let arr1 = []
    let { price1, productname1, producturl1 } = e
    // console.log(producturl)
    let obj1 = {
        image_url: producturl1,
        name: productname1,
        price: price1,
        
    }
    arr1.push(obj1)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr1))
    let cartDataFormLocal1 = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print1(inputdata1) {


    // console.log('a')
    var div_productDetailMainBox1 = document.querySelector('.productDetailMainBox1')
    div_productDetailMainBox1.innerText = '';

    inputdata1.map(function (e) {



        var div_productDetailMainBox1 = document.querySelector('.productDetailMainBox1')
        div_productDetailMainBox1.setAttribute('id', 'productDetailMainBox1')

        var div_image_productdetail1 = document.createElement('div')
        div_image_productdetail1.setAttribute('class', 'div_image_productdetail1')

        div_image_productdetail1.addEventListener('click', function () {
            recomToCart1(e)
        })



        div_productDetailMainBox1.append(div_image_productdetail1)

        var div_productImgHoverSale1 = document.createElement('div')
        div_productImgHoverSale1.setAttribute('class', 'productImgHoverSale1')

        div_image_productdetail1.append(div_productImgHoverSale1)

        var a_underlineRemove1 = document.createElement('a')
        a_underlineRemove1.setAttribute('class', 'underlineRemove1')

        div_productImgHoverSale1.append(a_underlineRemove1)

        var div_imgHoverSale1 = document.createElement('div')
        div_imgHoverSale1.setAttribute('id', 'imgHoverSale1')

        a_underlineRemove1.append(div_imgHoverSale1)

        var img_productImg1 = document.createElement('img')
        img_productImg1.setAttribute('class', 'productImg1')
        img_productImg1.src = e.producturl1[0]

        div_imgHoverSale1.append(img_productImg1);

        var div_hoverSaleDiv1 = document.createElement('div')
        div_hoverSaleDiv1.setAttribute('class', 'hoverSaleDiv1')

        div_imgHoverSale1.append(div_hoverSaleDiv1)

        var div_parntOfHover_area1 = document.createElement('div')
        div_parntOfHover_area1.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv1.append(div_parntOfHover_area1)

        var div_hide1 = document.createElement('div')
        div_hide1.setAttribute('class', 'hide1')

        div_parntOfHover_area1.append(div_hide1)

        var i_fa_solid_fa_eye1 = document.createElement('i')
        i_fa_solid_fa_eye1.setAttribute('class', 'fa-solid fa-eye')

        div_hide1.append(i_fa_solid_fa_eye1)

        var div_parntOfSale_area1 = document.createElement('div')
        div_parntOfSale_area1.setAttribute('class', 'parntOfSale area')
        var div_saleDiv1 = document.createElement('div')
        div_saleDiv1.setAttribute('id', 'saleDiv1')
        var p_sale1 = document.createElement('p')
        p_sale1.setAttribute('class', 'pSale1')
      //  p_sale1.innerText = e.discount;

        div_saleDiv1.append(p_sale1)

        div_parntOfSale_area1.append(div_saleDiv1)

        div_hoverSaleDiv1.append(div_parntOfSale_area1)




        var div_productDetail1 = document.createElement('div')
        div_productDetail1.setAttribute('class', 'productDetail1')

        div_image_productdetail1.append(div_productDetail1)

        var div_productName1 = document.createElement('div')
        div_productName1.setAttribute('class', 'productName1')

        div_productDetail1.append(div_productName1)

        var p_product_name1 = document.createElement('p')
        p_product_name1.innerText = e.productname1;

        div_productName1.append(p_product_name1)

        var div_starRating1 = document.createElement('div')
        div_starRating1.setAttribute('class', 'starRating1')

        div_productDetail1.append(div_starRating1)

        var span1_fa_fa_star_checked1 = document.createElement('span')
        span1_fa_fa_star_checked1.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating1.append(span1_fa_fa_star_checked1)

        var span2_fa_fa_star_checked1 = document.createElement('span')
        span2_fa_fa_star_checked1.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating1.append(span2_fa_fa_star_checked1)

        var span3_fa_fa_star_checked1 = document.createElement('span')
        span3_fa_fa_star_checked1.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating1.append(span3_fa_fa_star_checked1)

        var span4_fa_fa_star1 = document.createElement('span')
        span4_fa_fa_star1.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating1.append(span4_fa_fa_star1)

        var span5_fa_fa_star1 = document.createElement('span')
        span5_fa_fa_star1.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating1.append(span5_fa_fa_star1)

        var div_price1 = document.createElement('div')
        div_price1.setAttribute('class', 'price1')

        div_productDetail1.append(div_price1)

        var div_offprice1 = document.createElement('div')
        div_offprice1.setAttribute('class', 'offprice1')

        div_price1.append(div_offprice1)

        // var s_for_offprice = document.createElement('s')
        // s_for_offprice.innerText = e.strickedoff;

        // div_offprice.append(s_for_offprice)

        var div_currentprice1 = document.createElement('div')
        div_currentprice1.setAttribute('class', 'currentprice1')
        div_currentprice1.innerText = e.price1;

        div_price1.append(div_currentprice1)

        var div_discount1 = document.createElement('div')
        div_discount1.setAttribute('class', 'discount1')
       // div_discount.innerText = e.discount;

       var div2 = document.createElement("p");
       div2.innerText = "$1.30 / 2% Cashback";
       div2.setAttribute("class","div22")
       div_productDetail1.append(div2)


       div_productDetail1.append(div_starRating1)
       div_starRating1.style.fontSize = "1.4rem"

       let div = document.createElement("p");
       div.innerText = "Free Shipping with $99 orders";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free1")

       div_productDetail1.append(div)
        

    })
}










let arrRecomSlid1 = inputdata1

let lefRecomSlid1 = 0;
let rigRecomSlid1 = 1;

totalData1 = arrRecomSlid1.slice(lefRecomSlid1, rigRecomSlid1 + 1)

print1(totalData1)



let forward1 = () => {
    lefRecomSlid1 += 1;
    rigRecomSlid1 += 1;

   

    if (lefRecomSlid1 >= arrRecomSlid1.length) {
        lefRecomSlid1 = lefRecomSlid1 - arrRecomSlid1.length;
    }

    if (rigRecomSlid1 >= arrRecomSlid1.length) {
        rigRecomSlid1 = rigRecomSlid1 - arrRecomSlid1.length;
    }
   


    let lefData1;
    let rigData1;
    let totalData1;

    if (lefRecomSlid1 > rigRecomSlid1) {
        
        lefData1 = arrRecomSlid1.slice(lefRecomSlid1, arrRecomSlid1.length)
        rigData1 = arrRecomSlid1.slice(0, rigRecomSlid1 + 1)
        // console.log(lefData1,rigData1)
        totalData1 = [...lefData1, ...rigData1]
        // console.log(totalData1)
    }
    else {
        // console.log('else',lef,rig)
        totalData1 = arrRecomSlid1.slice(lefRecomSlid1, rigRecomSlid1 + 1)
        // console.log(totalData1)
    }


    
    print1(totalData1)
    // console.log(totalData1)


}

let backward1 = () => {

    
    lefRecomSlid1 -= 1;
    rigRecomSlid1 -= 1;

   


    if (lefRecomSlid1 < 0) {
        lefRecomSlid1 = arrRecomSlid1.length + lefRecomSlid1
    }

    if (rigRecomSlid1 < 0) {
        rigRecomSlid1 = arrRecomSlid1.length + rigRecomSlid1;
    }

  



    let lefData1;
    let rigData1;
    let totalData1;

    if (lefRecomSlid1 > rigRecomSlid1) {
      
        lefData1 = arrRecomSlid1.slice(lefRecomSlid1, arrRecomSlid1.length)
        rigData1 = arrRecomSlid1.slice(0, rigRecomSlid1 + 1)
       
        totalData1 = [...lefData1, ...rigData1]
        
    }
    else {
      
        totalData1 = arrRecomSlid1.slice(lefRecomSlid1, rigRecomSlid1 + 1)
        // console.log(totalData1)
    }

   

    print1(totalData1)



}


