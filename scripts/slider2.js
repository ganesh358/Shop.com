var inputdata2 = [
    {
        price2: "$79.95",
        
        productname2: "PHOENIX -6 mm Rope Chain",
        producturl2: [
            "https://img.shop.com/Image/280000/282000/282022/products/1932866513.jpg?size=300x300",
           

        ],
            },
    {
        price2: "$89.95",
        
        productname2: "STORM -8 mm Rope Chain",
        producturl2: [
            "https://img.shop.com/Image/280000/282000/282022/products/1932866535.jpg?size=300x300",
            
            
        ],
           },

    {
        price2: "$179.95",
        
        productname2: "SELENA -Pave Cuban Link",
        producturl2: [
            "https://img.shop.com/Image/280000/282000/282022/products/1932866534.jpg?size=300x300",
           
    ],
        
    },


    {
        price2: "$55.95",
        
        productname2: "IRIS -Double Stone Drop Earrings",
        producturl2:[ 
        "https://img.shop.com/Image/280000/282000/282022/products/1932866541.jpg?size=300x300",
           
    ],
        
    },
    {
        price2: "$69.95",
        
        productname2: "CORA - Oval Cut Studs",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866550.jpg?size=300x300',
            

        ],
        
    },
    {
        price2: "$55.95",
        
        productname2: "PHOENIX -6 mm Rope Chain",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866505.jpg?size=300x300',
            

        ],
        
    },
    {
        price2: "$89.95",
        
        productname2: "CORA - Oval Cut Solitaire Pendant",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866507.jpg?size=300x300',
            

        ],
        
    },
    {
        price2: "$79.95",
       
        productname2: "SAGE - Emerald Cut Ring",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866519.jpg?size=300x300',
            

        ],
        
    },
    {
        price2: "$99.95",
        
        productname2: "ZODIAC - Astrological Sign Necklace",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866537.jpg?size=300x300',
            

        ],
       
    },
    {
        price2: "$74.95",
        
        productname2: "HARLOW - Pave Square Ring",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866560.jpg?size=300x300',
            

        ],
       
    },
    {
        price2: "$55.95",
        
        productname2: "INITIAL - Gothic Letter Necklace",
        producturl2: [
            
            'https://img.shop.com/Image/280000/282000/282022/products/1932866560.jpg?size=300x300',
            

        ],
       
    },
   

]     

let cartFormLocal2 = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart2 = (e) => {
    // console.log(e)
    let arr2 = []
    let { price2, productname2, producturl2 } = e
    // console.log(producturl)
    let obj2 = {
        image_url: producturl2,
        name: productname2,
        price: price2,
        
    }
    arr2.push(obj2)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr2))
    let cartDataFormLocal2 = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print2(inputdata2) {


    // console.log('a')
    var div_productDetailMainBox2 = document.querySelector('.productDetailMainBox2')
    div_productDetailMainBox2.innerText = '';

    inputdata2.map(function (e) {



        var div_productDetailMainBox2 = document.querySelector('.productDetailMainBox2')
        div_productDetailMainBox2.setAttribute('id', 'productDetailMainBox2')

        var div_image_productdetail2 = document.createElement('div')
        div_image_productdetail2.setAttribute('class', 'div_image_productdetail2')

        div_image_productdetail2.addEventListener('click', function () {
            recomToCart2(e)
        })



        div_productDetailMainBox2.append(div_image_productdetail2)

        var div_productImgHoverSale2 = document.createElement('div')
        div_productImgHoverSale2.setAttribute('class', 'productImgHoverSale2')

        div_image_productdetail2.append(div_productImgHoverSale2)

        var a_underlineRemove2 = document.createElement('a')
        a_underlineRemove2.setAttribute('class', 'underlineRemove2')

        div_productImgHoverSale2.append(a_underlineRemove2)

        var div_imgHoverSale2 = document.createElement('div')
        div_imgHoverSale2.setAttribute('id', 'imgHoverSale2')

        a_underlineRemove2.append(div_imgHoverSale2)

        var img_productImg2 = document.createElement('img')
        img_productImg2.setAttribute('class', 'productImg2')
        img_productImg2.src = e.producturl2[0]

        div_imgHoverSale2.append(img_productImg2);

        var div_hoverSaleDiv2 = document.createElement('div')
        div_hoverSaleDiv2.setAttribute('class', 'hoverSaleDiv2')

        div_imgHoverSale2.append(div_hoverSaleDiv2)

        var div_parntOfHover_area2 = document.createElement('div')
        div_parntOfHover_area2.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv2.append(div_parntOfHover_area2)

        var div_hide2 = document.createElement('div')
        div_hide2.setAttribute('class', 'hide2')

        div_parntOfHover_area2.append(div_hide2)

        var i_fa_solid_fa_eye2 = document.createElement('i')
        i_fa_solid_fa_eye2.setAttribute('class', 'fa-solid fa-eye')

        div_hide2.append(i_fa_solid_fa_eye2)

        var div_parntOfSale_area2 = document.createElement('div')
        div_parntOfSale_area2.setAttribute('class', 'parntOfSale area')
        var div_saleDiv2 = document.createElement('div')
        div_saleDiv2.setAttribute('id', 'saleDiv2')
        var p_sale2 = document.createElement('p')
        p_sale2.setAttribute('class', 'pSale2')
      //  p_sale2.innerText = e.discount;

        div_saleDiv2.append(p_sale2)

        div_parntOfSale_area2.append(div_saleDiv2)

        div_hoverSaleDiv2.append(div_parntOfSale_area2)




        var div_productDetail2 = document.createElement('div')
        div_productDetail2.setAttribute('class', 'productDetail2')

        div_image_productdetail2.append(div_productDetail2)

        var div_productName2 = document.createElement('div')
        div_productName2.setAttribute('class', 'productName2')

        div_productDetail2.append(div_productName2)

        var p_product_name2 = document.createElement('p')
        p_product_name2.innerText = e.productname2;

        div_productName2.append(p_product_name2)

        var div_starRating2 = document.createElement('div')
        div_starRating2.setAttribute('class', 'starRating2')

        div_productDetail2.append(div_starRating2)

        var span2_fa_fa_star_checked2 = document.createElement('span')
        span2_fa_fa_star_checked2.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating2.append(span2_fa_fa_star_checked2)

        var span2_fa_fa_star_checked2 = document.createElement('span')
        span2_fa_fa_star_checked2.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating2.append(span2_fa_fa_star_checked2)

        var span3_fa_fa_star_checked2 = document.createElement('span')
        span3_fa_fa_star_checked2.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating2.append(span3_fa_fa_star_checked2)

        var span4_fa_fa_star2 = document.createElement('span')
        span4_fa_fa_star2.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating2.append(span4_fa_fa_star2)

        var span5_fa_fa_star2 = document.createElement('span')
        span5_fa_fa_star2.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating2.append(span5_fa_fa_star2)

        var div_price2 = document.createElement('div')
        div_price2.setAttribute('class', 'price2')

        div_productDetail2.append(div_price2)

        var div_offprice2 = document.createElement('div')
        div_offprice2.setAttribute('class', 'offprice2')

        div_price2.append(div_offprice2)

        // var s_for_offprice = document.createElement('s')
        // s_for_offprice.innerText = e.strickedoff;

        // div_offprice.append(s_for_offprice)

        var div_currentprice2 = document.createElement('div')
        div_currentprice2.setAttribute('class', 'currentprice2')
        div_currentprice2.innerText = e.price2;

        div_price2.append(div_currentprice2)

        var div_discount2 = document.createElement('div')
        div_discount2.setAttribute('class', 'discount2')
       // div_discount.innerText = e.discount;
       var div2 = document.createElement("p");
       div2.innerText = "$1.30 / 2% Cashback";
       div2.setAttribute("class","div23")
       div_productDetail2.append(div2);

       div_productDetail2.append(div_starRating2)
       div_starRating2.style.fontSize = "1.4rem"

       let div = document.createElement("p");
       div.innerText = "Free Shipping with $99 orders";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free12")

       div_productDetail2.append(div)

    })
}










let arrRecomSlid2 = inputdata2

let lefRecomSlid2 = 0;
let rigRecomSlid2 = 1;

totalData2 = arrRecomSlid2.slice(lefRecomSlid2, rigRecomSlid2 + 1)

print2(totalData2)



let forward2 = () => {
    lefRecomSlid2 += 1;
    rigRecomSlid2 += 1;

   

    if (lefRecomSlid2 >= arrRecomSlid2.length) {
        lefRecomSlid2 = lefRecomSlid2 - arrRecomSlid2.length;
    }

    if (rigRecomSlid2 >= arrRecomSlid2.length) {
        rigRecomSlid2 = rigRecomSlid2 - arrRecomSlid2.length;
    }
   


    let lefData2;
    let rigData2;
    let totalData2;

    if (lefRecomSlid2 > rigRecomSlid2) {
        
        lefData2 = arrRecomSlid2.slice(lefRecomSlid2, arrRecomSlid2.length)
        rigData2 = arrRecomSlid2.slice(0, rigRecomSlid2 + 1)
        // console.log(lefData1,rigData1)
        totalData2 = [...lefData2, ...rigData2]
        // console.log(totalData2)
    }
    else {
        // console.log('else',lef,rig)
        totalData2 = arrRecomSlid2.slice(lefRecomSlid2, rigRecomSlid2 + 1)
        // console.log(totalData1)
    }


    
    print2(totalData2)
    // console.log(totalData2)


}

let backward2 = () => {

    
    lefRecomSlid2 -= 1;
    rigRecomSlid2 -= 1;

   


    if (lefRecomSlid2 < 0) {
        lefRecomSlid2 = arrRecomSlid2.length + lefRecomSlid2
    }

    if (rigRecomSlid2 < 0) {
        rigRecomSlid2 = arrRecomSlid2.length + rigRecomSlid2;
    }

  



    let lefData2;
    let rigData2;
    let totalData2;

    if (lefRecomSlid2 > rigRecomSlid2) {
      
        lefData2 = arrRecomSlid2.slice(lefRecomSlid2, arrRecomSlid2.length)
        rigData2 = arrRecomSlid2.slice(0, rigRecomSlid2 + 1)
       
        totalData2 = [...lefData2, ...rigData2]
        
    }
    else {
      
        totalData2 = arrRecomSlid2.slice(lefRecomSlid2, rigRecomSlid2 + 1)
        // console.log(totalData1)
    }

   

    print2(totalData2)



}

