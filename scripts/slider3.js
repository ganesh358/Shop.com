var inputdata3 = [
    {
        price3: "$6.24",
        
        productname3: " BAM by Betsy & Adam Women's Shorts Mint Small Raw-Hem",
        producturl3: [
            "https://img.shop.com/Image/260000/266700/266752/products/1915811832.jpg?size=300x300",
           

        ],
            },
    {
        price3: "$39.99",
        
        productname3: "Slim Genuine Leather Wallet Case for Apple AirTag - Black",
        producturl3: [
            "https://img.shop.com/Image/290000/291200/291221/products/1937980402.jpg?size=300x300",
            
            
        ],
           },

    {
        price3: "$6.24",
        
        productname3: "Free People Women's Boxy Blouse Blue Medium Henley Smocked Ombre",
        producturl3: [
            "https://img.shop.com/Image/260000/266700/266752/products/1867168161.jpg?size=300x300",
           
    ],
        
    },


    {
        price3: "$99.99",
        
        productname3: "Apple - AirTag (4-Pack) - Silver",
        producturl3:[ 
        "https://img.shop.com/Image/280000/283700/283767/products/1925077796.jpg?size=300x300",
           
    ],
        
    },
    {
        price3: "$15.99",
        
        productname3: "Squishmallow 5 Inch Mini Animal plush l Olalla the Owl",
        producturl3: [
            
            'https://img.shop.com/Image/250000/259100/259190/products/1928817820.jpg?size=300x300',
            

        ],
        
    },
    {
        price3: "$15.99",
        
        productname3: "Squishmallow 5 Inch Mini Animal plush l Olalla the Octopus",
        producturl3: [
            
            'https://img.shop.com/Image/250000/259100/259190/products/1928817814.jpg?size=300x300',
            

        ],
        
    },
   

]     

let cartFormLocal3 = JSON.parse(localStorage.getItem('cart')) || []
let recomToCart3 = (e) => {
    // console.log(e)
    let arr3 = []
    let { price3, productname3, producturl3 } = e
    // console.log(producturl)
    let obj3 = {
        image_url: producturl3,
        name: productname3,
        price: price3,
        
    }
    arr3.push(obj3)
    // console.log(arr)
    localStorage.setItem('cart', JSON.stringify(arr3))
    let cartDataFormLocal3 = JSON.parse(localStorage.getItem('cart')) || []
    
    window.location.href = "add_cart.html";
}


function print3(inputdata3) {


    // console.log('a')
    var div_productDetailMainBox3 = document.querySelector('.productDetailMainBox3')
    div_productDetailMainBox3.innerText = '';

    inputdata3.map(function (e) {



        var div_productDetailMainBox3 = document.querySelector('.productDetailMainBox3')
        div_productDetailMainBox3.setAttribute('id', 'productDetailMainBox3')

        var div_image_productdetail3 = document.createElement('div')
        div_image_productdetail3.setAttribute('class', 'div_image_productdetail3')

        div_image_productdetail3.addEventListener('click', function () {
            recomToCart3(e)
        })



        div_productDetailMainBox3.append(div_image_productdetail3)

        var div_productImgHoverSale3 = document.createElement('div')
        div_productImgHoverSale3.setAttribute('class', 'productImgHoverSale3')

        div_image_productdetail3.append(div_productImgHoverSale3)

        var a_underlineRemove3 = document.createElement('a')
        a_underlineRemove3.setAttribute('class', 'underlineRemove3')

        div_productImgHoverSale3.append(a_underlineRemove3)

        var div_imgHoverSale3 = document.createElement('div')
        div_imgHoverSale3.setAttribute('id', 'imgHoverSale3')

        a_underlineRemove3.append(div_imgHoverSale3)

        var img_productImg3 = document.createElement('img')
        img_productImg3.setAttribute('class', 'productImg3')
        img_productImg3.src = e.producturl3[0]

        div_imgHoverSale3.append(img_productImg3);

        var div_hoverSaleDiv3 = document.createElement('div')
        div_hoverSaleDiv3.setAttribute('class', 'hoverSaleDiv3')

        div_imgHoverSale3.append(div_hoverSaleDiv3)

        var div_parntOfHover_area3 = document.createElement('div')
        div_parntOfHover_area3.setAttribute('class', 'parntOfHover area')

        div_hoverSaleDiv3.append(div_parntOfHover_area3)

        var div_hide3 = document.createElement('div')
        div_hide3.setAttribute('class', 'hide3')

        div_parntOfHover_area3.append(div_hide3)

        var i_fa_solid_fa_eye3 = document.createElement('i')
        i_fa_solid_fa_eye3.setAttribute('class', 'fa-solid fa-eye')

        div_hide3.append(i_fa_solid_fa_eye3)

        var div_parntOfSale_area3 = document.createElement('div')
        div_parntOfSale_area3.setAttribute('class', 'parntOfSale area')
        var div_saleDiv3 = document.createElement('div')
        div_saleDiv3.setAttribute('id', 'saleDiv3')
        var p_sale3 = document.createElement('p')
        p_sale3.setAttribute('class', 'pSale3')
      //  p_sale3.innerText = e.discount;

        div_saleDiv3.append(p_sale3)

        div_parntOfSale_area3.append(div_saleDiv3)

        div_hoverSaleDiv3.append(div_parntOfSale_area3)




        var div_productDetail3 = document.createElement('div')
        div_productDetail3.setAttribute('class', 'productDetail3')

        div_image_productdetail3.append(div_productDetail3)

        var div_productName3 = document.createElement('div')
        div_productName3.setAttribute('class', 'productName3')

        div_productDetail3.append(div_productName3)

        var p_product_name3 = document.createElement('p')
        p_product_name3.innerText = e.productname3;

        div_productName3.append(p_product_name3)

        var div_starRating3 = document.createElement('div')
        div_starRating3.setAttribute('class', 'starRating3')

        div_productDetail3.append(div_starRating3)

        var span3_fa_fa_star_checked3 = document.createElement('span')
        span3_fa_fa_star_checked3.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating3.append(span3_fa_fa_star_checked3)

        var span3_fa_fa_star_checked3 = document.createElement('span')
        span3_fa_fa_star_checked3.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating3.append(span3_fa_fa_star_checked3)

        var span3_fa_fa_star_checked3 = document.createElement('span')
        span3_fa_fa_star_checked3.setAttribute('class', 'fa fa-star checked starRecomSlid')

        div_starRating3.append(span3_fa_fa_star_checked3)

        var span4_fa_fa_star3 = document.createElement('span')
        span4_fa_fa_star3.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating3.append(span4_fa_fa_star3)

        var span5_fa_fa_star3 = document.createElement('span')
        span5_fa_fa_star3.setAttribute('class', 'fa fa-star starRecomSlid')

        div_starRating3.append(span5_fa_fa_star3)

        var div_price3 = document.createElement('div')
        div_price3.setAttribute('class', 'price3')

        div_productDetail3.append(div_price3)

        var div_offprice3 = document.createElement('div')
        div_offprice3.setAttribute('class', 'offprice3')

        div_price3.append(div_offprice3)

        // var s_for_offprice = document.createElement('s')
        // s_for_offprice.innerText = e.strickedoff;

        // div_offprice.append(s_for_offprice)

        var div_currentprice3 = document.createElement('div')
        div_currentprice3.setAttribute('class', 'currentprice3')
        div_currentprice3.innerText = e.price3;

        div_price3.append(div_currentprice3)

        var div_discount3 = document.createElement('div')
        div_discount3.setAttribute('class', 'discount3')
       // div_discount.innerText = e.discount;
       var div2 = document.createElement("p");
       div2.innerText = "$1.30 / 2% Cashback";
       div2.setAttribute("class","div22")
       div_productDetail3.append(div2)

       div_productDetail3.append(div_starRating3)
       div_starRating3.style.fontSize = "1.4rem"
       
       let div = document.createElement("p");
       div.innerText = "Free Shipping ";
       div.style.color = "teal";
       div.style.fontSize = "1.2rem";
       div.setAttribute("class","free3")

       div_productDetail3.append(div)

    })
}










let arrRecomSlid3 = inputdata3

let lefRecomSlid3 = 0;
let rigRecomSlid3 = 1;

totalData3 = arrRecomSlid3.slice(lefRecomSlid3, rigRecomSlid3 + 1)

print3(totalData3)



let forward3 = () => {
    lefRecomSlid3 += 1;
    rigRecomSlid3 += 1;

   

    if (lefRecomSlid3 >= arrRecomSlid3.length) {
        lefRecomSlid3 = lefRecomSlid3 - arrRecomSlid3.length;
    }

    if (rigRecomSlid3 >= arrRecomSlid3.length) {
        rigRecomSlid3 = rigRecomSlid3 - arrRecomSlid3.length;
    }
   


    let lefData3;
    let rigData3;
    let totalData3;

    if (lefRecomSlid3 > rigRecomSlid3) {
        
        lefData3 = arrRecomSlid3.slice(lefRecomSlid3, arrRecomSlid3.length)
        rigData3 = arrRecomSlid3.slice(0, rigRecomSlid3 + 1)
        // console.log(lefData1,rigData1)
        totalData3 = [...lefData3, ...rigData3]
        // console.log(totalData3)
    }
    else {
        // console.log('else',lef,rig)
        totalData3 = arrRecomSlid3.slice(lefRecomSlid3, rigRecomSlid3 + 1)
        // console.log(totalData1)
    }


    
    print3(totalData3)
    // console.log(totalData3)


}

let backward3 = () => {

    
    lefRecomSlid3 -= 1;
    rigRecomSlid3 -= 1;

   


    if (lefRecomSlid3 < 0) {
        lefRecomSlid3 = arrRecomSlid3.length + lefRecomSlid3
    }

    if (rigRecomSlid3 < 0) {
        rigRecomSlid3 = arrRecomSlid3.length + rigRecomSlid3;
    }

  



    let lefData3;
    let rigData3;
    let totalData3;

    if (lefRecomSlid3 > rigRecomSlid3) {
      
        lefData3 = arrRecomSlid3.slice(lefRecomSlid3, arrRecomSlid3.length)
        rigData3 = arrRecomSlid3.slice(0, rigRecomSlid3 + 1)
       
        totalData3 = [...lefData3, ...rigData3]
        
    }
    else {
      
        totalData3 = arrRecomSlid3.slice(lefRecomSlid3, rigRecomSlid3 + 1)
        // console.log(totalData1)
    }

   

    print3(totalData3)



}

