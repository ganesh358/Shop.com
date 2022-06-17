var inputdata4 = [
    {
        price4: "$31.95 - $71.95",
        
        productname4: "Isotonix OPC-3®",
        producturl4: [
            "https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?size=300x300",
           

        ],
            },
    {
        price4: "$39.94 - $64.95",
        
        productname4: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        producturl4: [
            "https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?size=300x300",
            
            
        ],
           },

    {
        price4: "$24.95 - $55.95",
        
        productname4: "Isotonix® Multivitamin Without Iron",
        producturl4: [
            "https://img.shop.com/Image/210000/214100/214196/products/1604659974.jpg?size=300x300",
           
    ],
        
    },

    {
        price4: "$25.95 - $54.50",
        
        productname4: "Isotonix® Activated B Complex",
        producturl4:[ 
        "https://img.shop.com/Image/210000/214100/214196/products/604981550.jpg?size=300x300",
           
    ],
        
    },
    {
        price4: "$33.50 - $79.95",
        
        productname4: "Isotonix® Vitamin D with K2",
        producturl4: [
            
            'https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300',
            

        ],
        
    },
    {
        price4: "$51.95",
        
        productname4: "Probiotics-10",
        producturl4: [
            
            'https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=300x300',
            

        ],
        
    },
    
    {
        price4: "$54.50",
        
        productname4: "Nutriclean® Advanced Fiber Powder With stevia",
        producturl4: [
            
            'https://img.shop.com/Image/240000/243300/243382/products/978316780.jpg?size=300x300',
            

        ],
        
    },
    {
        price4: "$36.95",
        
        productname4: "Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support",
        producturl4: [
            
            'https://img.shop.com/Image/210000/214100/214199/products/561800367.jpg?size=300x300',
            

        ],
        
    },
    {
        price4: "$41.95",
        
        productname4: "Isotonix® Magnesium",
        producturl4: [
            
            'https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?size=300x300',
            

        ],
        
    },
   

]     




let cartFormLocal4 = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart4 = (e) => {
    // console.log(e)
    let arr4 = []
    let { price4, productname4, producturl4 } = e
    // console.log(producturl)
    let obj4 = {
        image_url: producturl4,
        name: productname4,
        price: price4,
        
    }
    arr4.push(obj4)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr4))
    let cartDataFormLocal4 = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print4(inputdata4) {


    // console.log('a')
    var div_productDetailMainBox4 = document.querySelector('.productDetailMainBox4')
    div_productDetailMainBox4.innerText = '';

    inputdata4.map(function (e) {



        var div_productDetailMainBox4 = document.querySelector('.productDetailMainBox4')
        div_productDetailMainBox4.setAttribute('id', 'productDetailMainBox4')

        var div_image_productdetail4 = document.createElement('div')
        div_image_productdetail4.setAttribute('class', 'div_image_productdetail4')
        
    
        div_image_productdetail4.addEventListener('click', function () {
            recomToCart4(e)
        })



        div_productDetailMainBox4.append(div_image_productdetail4)

        var div_productImgHoverSale4 = document.createElement('div')
        div_productImgHoverSale4.setAttribute('class', 'productImgHoverSale4')

        div_image_productdetail4.append(div_productImgHoverSale4)

        var a_underlineRemove4 = document.createElement('a')
        a_underlineRemove4.setAttribute('class', 'underlineRemove4')

        div_productImgHoverSale4.append(a_underlineRemove4)

        var div_imgHoverSale4 = document.createElement('div')
        div_imgHoverSale4.setAttribute('id', 'imgHoverSale4')

        a_underlineRemove4.append(div_imgHoverSale4)

        var img_productImg4 = document.createElement('img')
        img_productImg4.setAttribute('class', 'productImg4')
        img_productImg4.src = e.producturl4[0]

        div_imgHoverSale4.append(img_productImg4);

        var div_hoverSaleDiv4 = document.createElement('div')
        div_hoverSaleDiv4.setAttribute('class', 'hoverSaleDiv4')

        div_imgHoverSale4.append(div_hoverSaleDiv4)

        var div_parntOfHover_area4 = document.createElement('div')
        div_parntOfHover_area4.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv4.append(div_parntOfHover_area4)

        var div_hide4 = document.createElement('div')
        div_hide4.setAttribute('class', 'hide4')

        div_parntOfHover_area4.append(div_hide4)

        var i_fa_solid_fa_eye4 = document.createElement('i')
        i_fa_solid_fa_eye4.setAttribute('class', 'fa-solid fa-eye')

        div_hide4.append(i_fa_solid_fa_eye4)

        var div_parntOfSale_area4 = document.createElement('div')
        div_parntOfSale_area4.setAttribute('class', 'parntOfSale area')
        var div_saleDiv4 = document.createElement('div')
        div_saleDiv4.setAttribute('id', 'saleDiv4')
        var p_sale4 = document.createElement('p')
        p_sale4.setAttribute('class', 'pSale4')
      //  p_sale4.innerText = e.discount;

        div_saleDiv4.append(p_sale4)

        div_parntOfSale_area4.append(div_saleDiv4)

        div_hoverSaleDiv4.append(div_parntOfSale_area4)




        var div_productDetail4 = document.createElement('div')
        div_productDetail4.setAttribute('class', 'productDetail4')

        div_image_productdetail4.append(div_productDetail4)

        var div_productName4 = document.createElement('div')
        div_productName4.setAttribute('class', 'productName4')

        div_productDetail4.append(div_productName4)

        var p_product_name4 = document.createElement('p')
        p_product_name4.innerText = e.productname4;

        div_productName4.append(p_product_name4)

        var div_starRating4 = document.createElement('div')
        div_starRating4.setAttribute('class', 'starRating4')

        div_productDetail4.append(div_starRating4)

        var span4_fa_fa_star_checked4 = document.createElement('span')
        span4_fa_fa_star_checked4.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating4.append(span4_fa_fa_star_checked4)

        var span4_fa_fa_star_checked4 = document.createElement('span')
        span4_fa_fa_star_checked4.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating4.append(span4_fa_fa_star_checked4)

        var span4_fa_fa_star_checked4 = document.createElement('span')
        span4_fa_fa_star_checked4.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating4.append(span4_fa_fa_star_checked4)

        var span4_fa_fa_star4 = document.createElement('span')
        span4_fa_fa_star4.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating4.append(span4_fa_fa_star4)

        var span5_fa_fa_star4 = document.createElement('span')
        span5_fa_fa_star4.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating4.append(span5_fa_fa_star4)

        var div_price4 = document.createElement('div')
        div_price4.setAttribute('class', 'price4')

        div_productDetail4.append(div_price4)

        var div_offprice4 = document.createElement('div')
        div_offprice4.setAttribute('class', 'offprice4')

        div_price4.append(div_offprice4)

        // var s_for_offprice = document.createElement('s')
        // s_for_offprice.innerText = e.strickedoff;

        // div_offprice.append(s_for_offprice)

        var div_currentprice4 = document.createElement('div')
        div_currentprice4.setAttribute('class', 'currentprice4')
        div_currentprice4.innerText = e.price4;

        div_price4.append(div_currentprice4)

        var div_discount4 = document.createElement('div')
        div_discount4.setAttribute('class', 'discount4')
       // div_discount.innerText = e.discount;
       var div2 = document.createElement("p");
       div2.innerText = "$1.30 / 2% Cashback";
       div2.setAttribute("class","div44")
       div_productDetail4.append(div2);

       div_productDetail4.append(div_starRating4)
       div_starRating4.style.fontSize = "1.4rem"

       let div = document.createElement("p");
       div.innerText = "Free Shipping with $99 orders";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free44")

       div_productDetail4.append(div)

    })
}










let arrRecomSlid4 = inputdata4

let lefRecomSlid4 = 0;
let rigRecomSlid4 = 1;

totalData4 = arrRecomSlid4.slice(lefRecomSlid4, rigRecomSlid4 + 1)

print4(totalData4)



let forward4 = () => {
    lefRecomSlid4 += 1;
    rigRecomSlid4 += 1;

   

    if (lefRecomSlid4 >= arrRecomSlid4.length) {
        lefRecomSlid4 = lefRecomSlid4 - arrRecomSlid4.length;
    }

    if (rigRecomSlid4 >= arrRecomSlid4.length) {
        rigRecomSlid4 = rigRecomSlid4 - arrRecomSlid4.length;
    }
   


    let lefData4;
    let rigData4;
    let totalData4;

    if (lefRecomSlid4 > rigRecomSlid4) {
        
        lefData4 = arrRecomSlid4.slice(lefRecomSlid4, arrRecomSlid4.length)
        rigData4 = arrRecomSlid4.slice(0, rigRecomSlid4 + 1)
        // console.log(lefData1,rigData1)
        totalData4 = [...lefData4, ...rigData4]
        // console.log(totalData4)
    }
    else {
        // console.log('else',lef,rig)
        totalData4 = arrRecomSlid4.slice(lefRecomSlid4, rigRecomSlid4 + 1)
        // console.log(totalData1)
    }


    
    print4(totalData4)
    // console.log(totalData4)


}

let backward4 = () => {

    
    lefRecomSlid4 -= 1;
    rigRecomSlid4 -= 1;

   


    if (lefRecomSlid4 < 0) {
        lefRecomSlid4 = arrRecomSlid4.length + lefRecomSlid4
    }

    if (rigRecomSlid4 < 0) {
        rigRecomSlid4 = arrRecomSlid4.length + rigRecomSlid4;
    }

  



    let lefData4;
    let rigData4;
    let totalData4;

    if (lefRecomSlid4 > rigRecomSlid4) {
      
        lefData4 = arrRecomSlid4.slice(lefRecomSlid4, arrRecomSlid4.length)
        rigData4 = arrRecomSlid4.slice(0, rigRecomSlid4 + 1)
       
        totalData4 = [...lefData4, ...rigData4]
        
    }
    else {
      
        totalData4 = arrRecomSlid4.slice(lefRecomSlid4, rigRecomSlid4 + 1)
        // console.log(totalData1)
    }

   

    print4(totalData4)



}

