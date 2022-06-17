var inputdata5 = [
    {
        price5: "$31.95 - $71.95",
        
        productname5: "Isotonix OPC-3®",
        producturl5: [
            "https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?size=300x300",
           

        ],
            },
    {
        price5: "$39.94 - $64.95",
        
        productname5: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        producturl5: [
            "https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?size=300x300",
            
            
        ],
           },

    {
        price5: "$24.95 - $55.95",
        
        productname5: "Isotonix® Multivitamin Without Iron",
        producturl5: [
            "https://img.shop.com/Image/210000/214100/214196/products/1604659974.jpg?size=300x300",
           
    ],
        
    },

    {
        price5: "$25.95 - $54.50",
        
        productname5: "Isotonix® Activated B Complex",
        producturl5:[ 
        "https://img.shop.com/Image/210000/214100/214196/products/604981550.jpg?size=300x300",
           
    ],
        
    },
    {
        price5: "$33.50 - $79.95",
        
        productname5: "Isotonix® Vitamin D with K2",
        producturl5: [
            
            'https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300',
            

        ],
        
    },
    {
        price5: "$51.95",
        
        productname5: "Probiotics-10",
        producturl5: [
            
            'https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=300x300',
            

        ],
        
    },
    
    {
        price5: "$54.50",
        
        productname5: "Nutriclean® Advanced Fiber Powder With stevia",
        producturl5: [
            
            'https://img.shop.com/Image/240000/243300/243382/products/978316780.jpg?size=300x300',
            

        ],
        
    },
    {
        price5: "$36.95",
        
        productname5: "Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support",
        producturl5: [
            
            'https://img.shop.com/Image/210000/214100/214199/products/561800367.jpg?size=300x300',
            

        ],
        
    },
    {
        price5: "$41.95",
        
        productname5: "Isotonix® Magnesium",
        producturl5: [
            
            'https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=300x300',
            

        ],
        
    },
   

]     




let cartFormLocal5 = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart5 = (e) => {
    // console.log(e)
    let arr5 = []
    let { price5, productname5, producturl5 } = e
    // console.log(producturl)
    let obj5 = {
        image_url: producturl5,
        name: productname5,
        price: price5,
        
    }
    arr5.push(obj5)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr5))
    let cartDataFormLocal5 = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print5(inputdata5) {


    // console.log('a')
    var div_productDetailMainBox5 = document.querySelector('.productDetailMainBox5')
    div_productDetailMainBox5.innerText = '';

    inputdata5.map(function (e) {



        var div_productDetailMainBox5 = document.querySelector('.productDetailMainBox5')
        div_productDetailMainBox5.setAttribute('id', 'productDetailMainBox5')

        var div_image_productdetail5 = document.createElement('div')
        div_image_productdetail5.setAttribute('class', 'div_image_productdetail5')
        
    
        div_image_productdetail5.addEventListener('click', function () {
            recomToCart5(e)
        })



        div_productDetailMainBox5.append(div_image_productdetail5)

        var div_productImgHoverSale5 = document.createElement('div')
        div_productImgHoverSale5.setAttribute('class', 'productImgHoverSale5')

        div_image_productdetail5.append(div_productImgHoverSale5)

        var a_underlineRemove5 = document.createElement('a')
        a_underlineRemove5.setAttribute('class', 'underlineRemove5')

        div_productImgHoverSale5.append(a_underlineRemove5)

        var div_imgHoverSale5 = document.createElement('div')
        div_imgHoverSale5.setAttribute('id', 'imgHoverSale5')

        a_underlineRemove5.append(div_imgHoverSale5)

        var img_productImg5 = document.createElement('img')
        img_productImg5.setAttribute('class', 'productImg5')
        img_productImg5.src = e.producturl5[0]

        div_imgHoverSale5.append(img_productImg5);

        var div_hoverSaleDiv5 = document.createElement('div')
        div_hoverSaleDiv5.setAttribute('class', 'hoverSaleDiv5')

        div_imgHoverSale5.append(div_hoverSaleDiv5)

        var div_parntOfHover_area5 = document.createElement('div')
        div_parntOfHover_area5.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv5.append(div_parntOfHover_area5)

        var div_hide5 = document.createElement('div')
        div_hide5.setAttribute('class', 'hide5')

        div_parntOfHover_area5.append(div_hide5)

        var i_fa_solid_fa_eye5 = document.createElement('i')
        i_fa_solid_fa_eye5.setAttribute('class', 'fa-solid fa-eye')

        div_hide5.append(i_fa_solid_fa_eye5)

        var div_parntOfSale_area5 = document.createElement('div')
        div_parntOfSale_area5.setAttribute('class', 'parntOfSale area')
        var div_saleDiv5 = document.createElement('div')
        div_saleDiv5.setAttribute('id', 'saleDiv5')
        var p_sale5 = document.createElement('p')
        p_sale5.setAttribute('class', 'pSale5')
      //  p_sale5.innerText = e.discount;

        div_saleDiv5.append(p_sale5)

        div_parntOfSale_area5.append(div_saleDiv5)

        div_hoverSaleDiv5.append(div_parntOfSale_area5)




        var div_productDetail5 = document.createElement('div')
        div_productDetail5.setAttribute('class', 'productDetail5')

        div_image_productdetail5.append(div_productDetail5)

        var div_productName5 = document.createElement('div')
        div_productName5.setAttribute('class', 'productName5')

        div_productDetail5.append(div_productName5)

        var p_product_name5 = document.createElement('p')
        p_product_name5.innerText = e.productname5;

        div_productName5.append(p_product_name5)

        var div_starRating5 = document.createElement('div')
        div_starRating5.setAttribute('class', 'starRating5')

        div_productDetail5.append(div_starRating5)

        var span5_fa_fa_star_checked5 = document.createElement('span')
        span5_fa_fa_star_checked5.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating5.append(span5_fa_fa_star_checked5)

        var span5_fa_fa_star_checked5 = document.createElement('span')
        span5_fa_fa_star_checked5.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating5.append(span5_fa_fa_star_checked5)

        var span5_fa_fa_star_checked5 = document.createElement('span')
        span5_fa_fa_star_checked5.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating5.append(span5_fa_fa_star_checked5)

        var span5_fa_fa_star5 = document.createElement('span')
        span5_fa_fa_star5.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating5.append(span5_fa_fa_star5)

        var span5_fa_fa_star5 = document.createElement('span')
        span5_fa_fa_star5.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating5.append(span5_fa_fa_star5)

        var div_price5 = document.createElement('div')
        div_price5.setAttribute('class', 'price5')

        div_productDetail5.append(div_price5)

        var div_offprice5 = document.createElement('div')
        div_offprice5.setAttribute('class', 'offprice5')

        div_price5.append(div_offprice5)

        // var s_for_offprice = document.createElement('s')
        // s_for_offprice.innerText = e.strickedoff;

        // div_offprice.append(s_for_offprice)

        var div_currentprice5 = document.createElement('div')
        div_currentprice5.setAttribute('class', 'currentprice5')
        div_currentprice5.innerText = e.price5;

        div_price5.append(div_currentprice5)

        var div_discount5 = document.createElement('div')
        div_discount5.setAttribute('class', 'discount5')
       // div_discount.innerText = e.discount;
       var div2 = document.createElement("p");
       div2.innerText = "$1.30 / 2% Cashback";
       div2.setAttribute("class","div2")
       div_productDetail5.append(div2)
 
       div_productDetail5.append(div_starRating5)
       div_starRating5.style.fontSize = "1.4rem"

       let div = document.createElement("p");
       div.innerText = "Free Shipping with $99 orders";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free")

       div_productDetail5.append(div)
        

    })
}










let arrRecomSlid5 = inputdata5

let lefRecomSlid5 = 0;
let rigRecomSlid5 = 3;

totalData5 = arrRecomSlid5.slice(lefRecomSlid5, rigRecomSlid5 + 1)

print5(totalData5)



let forward5 = () => {
    lefRecomSlid5 += 1;
    rigRecomSlid5 += 1;

   

    if (lefRecomSlid5 >= arrRecomSlid5.length) {
        lefRecomSlid5 = lefRecomSlid5 - arrRecomSlid5.length;
    }

    if (rigRecomSlid5 >= arrRecomSlid5.length) {
        rigRecomSlid5 = rigRecomSlid5 - arrRecomSlid5.length;
    }
   


    let lefData5;
    let rigData5;
    let totalData5;

    if (lefRecomSlid5 > rigRecomSlid5) {
        
        lefData5 = arrRecomSlid5.slice(lefRecomSlid5, arrRecomSlid5.length)
        rigData5 = arrRecomSlid5.slice(0, rigRecomSlid5 + 1)
        // console.log(lefData1,rigData1)
        totalData5 = [...lefData5, ...rigData5]
        // console.log(totalData5)
    }
    else {
        // console.log('else',lef,rig)
        totalData5 = arrRecomSlid5.slice(lefRecomSlid5, rigRecomSlid5 + 1)
        // console.log(totalData1)
    }


    
    print5(totalData5)
    // console.log(totalData5)


}

let backward5 = () => {

    
    lefRecomSlid5 -= 1;
    rigRecomSlid5 -= 1;

   


    if (lefRecomSlid5 < 0) {
        lefRecomSlid5 = arrRecomSlid5.length + lefRecomSlid5
    }

    if (rigRecomSlid5 < 0) {
        rigRecomSlid5 = arrRecomSlid5.length + rigRecomSlid5;
    }

  



    let lefData5;
    let rigData5;
    let totalData5;

    if (lefRecomSlid5 > rigRecomSlid5) {
      
        lefData5 = arrRecomSlid5.slice(lefRecomSlid5, arrRecomSlid5.length)
        rigData5 = arrRecomSlid5.slice(0, rigRecomSlid5 + 1)
       
        totalData5 = [...lefData5, ...rigData5]
        
    }
    else {
      
        totalData5 = arrRecomSlid5.slice(lefRecomSlid5, rigRecomSlid5 + 1)
        // console.log(totalData1)
    }

   

    print5(totalData5)



}
