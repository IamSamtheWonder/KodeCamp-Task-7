const shopNowCard = document.querySelector(".shopnow-card");
let shop = [];

//Fetching blog post 
function getShopNow() {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then((data) => {
            shop = data;	
            
            addShopNow()
            console.log(shop);
           
        })
}

getShopNow();



//RENDERING BLOG POST 
function addShopNow() {
    let shopp = "";

    shop.map((eachshopp, index) => {
        // console.log(eachproduct.image);
        let dynamicDiv = document.createElement("div");
        dynamicDiv.setAttribute("class", "shop")
        let addToCartBtn = document.createElement("button");
        addToCartBtn.setAttribute("class", " btn btn-danger my-3 add-cart");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            addToCart(eachshopp);
        })

        shopp += 

             `       
                        <img src=${eachshopp.images} class="img-joggers" alt="">
                        <p class="joggers jogger">${eachshopp.title.slice(0, 25)}</p>
                     
                        <p class="joggers jog"><span id="description">Description:</span> ${eachshopp.description.slice(0, 80)}</p>
                     
                        <p class="joggers"><span id="description">Price: $${eachshopp.price}</span></p>
                     
                     
                     
                       

                `

                shopNowCard.innerHTML = shopp

                dynamicDiv.appendChild(addToCartBtn)
                dynamicDiv.addEventListener('click', (e) => viewProduct(eachshopp));
                shopNowCard.appendChild(dynamicDiv)
    
    // viewPost()
})

}

function viewProduct(product){

    localStorage.setItem('productId', product.id)
    window.location.href="./individual_page.html"

}




{/* <button type="button" class=" btn btn-danger my-3 add-cart">Add to Cart</button> */
/*<i class="fa-solid fa-cart-shopping cart"></i> */}
