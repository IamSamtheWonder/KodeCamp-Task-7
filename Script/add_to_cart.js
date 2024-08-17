let cartContainer = document.querySelector('.cart-container')
let cartInfo = document.querySelector('.cart') // Jomasy .cart-parent div
// let indiv_heading=document.querySelector('.indiv-heading')

upDateCartPageUI()
let cart = getCartPage()


console.log(item)


//Displaying product on the Cart page
function showProduct(arr){
    let showCart
    // let heading=document.createElement('div')
    // heading.appendChild(indiv_heading)
    

      
    arr?.forEach(eachProduct =>{
      showCart = 
      `<<div class="d-flex flex-row gap-5 cart1">
                <div class="cart1-sub">
                    <div class="d-flex gap-3">
                        <img src=${eachProduct.product.image} alt="">
                        <div class="d-flex flex-column">
                            <p>${eachProduct.product.title}</p>

                            <button class='button_now removebtn'  onclick={removeProduct(${eachProduct.product.id})}>Remove</button>

                        </div>

                    </div>
                
                    <div  class="cart-price">
                        <p>$${eachProduct.product.price}</p>
                        <div class="d-flex flex-row gap-2">
                            <button class="button_now add mx" onclick={increaseProductCount(${eachProduct.product.id})}>+</button>
                                <p>${eachProduct.count}</p>
                                <button class="button_now remove"  onclick={decreaseProductCount(${eachProduct.product.id})}>-</button>           
                        </div>

                    </div>
                </div>

            
            </div>>
`

     
    let createDiv = document.createElement('newDiv')
    createDiv.innerHTML = showCart
    cartContainer.appendChild(createDiv)
});


}
showProduct(item)


cartInfo.addEventListener('click', showProduct)