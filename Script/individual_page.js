upDateCartPageUI()


function getProductList(){
    let productListId = localStorage.getItem('productListId')
        fetch(`https://fakestoreapi.com/products/${productListId}`).then(function (response) {
        return response.json()
    }).then(function (productLists) {

        console.log(productLists)
         
        let individualPageSection = document.querySelector('.individual-page-section')

        let productInfo = document.createElement('NewDiv')
            productInfo.classList.add('row')
            productInfo.innerHTML = 
            `   <div class=" col con individual-page">
                    <img src=''alt="" class="product-img">

                </div>

                <div class=" col-6 con">
                    <p class="my-4 product-title"></p>
                    <p class="my-4">$0.00</p>
                    <div class=" d-flex rating my-2">
                        <i class="fa-solid fa-star rating-star"></i>
                        <i class="fa-solid fa-star-half-stroke rating-star"></i>
                        <i class="fa-regular fa-star rating-star"></i>

                    </div>

                    <button class="button_now " type="button">Add to Cart</button>
                </div>

                <div class="col con">
                    <div class=" delivery-section">
                        <h6 class="my-2 delivery-heading">DELIVERY</h6>
                
                        <p class="para-2">Enjoy free delivery once you purchase more than 10 products. Delivery is nationwide.<p>
                        <p class="para-3 my-1">Choose your location</p>

                        <select  class="select" name="" value="specify location" id="" class="my-2">
                            <option value="">specify location</option>
                            <option value="">Port Harcourt</option>
                            <option value="">Abuja</option>
                            <option value="">Lagos</option>
                        </select>
                    
                </div>
            
            `
            

            
            let button = productInfo.querySelector('.button_now')
            button.addEventListener('click', ()=> addProductToCartPage(productLists) )
            individualPageSection.appendChild(productInfo)
            
})

}
getProductList()



function getProductDetailsList(){
    let productListId = localStorage.getItem('productListId')
        fetch(`https://fakestoreapi.com/products/${productListId}`).then(function (response) {
        return response.json()
    }).then(function (productLists) {

        console.log(productLists)
         
        let detailSection = document.querySelector('.details')

        let productDetails = document.createElement('NewDiv')
            productDetails.classList.add('product_details')
            productDetails.innerHTML =
            `   <p>${productLists.description}</p>
            `
        
            

             detailSection.appendChild(productDetails)
            
})

}
getProductDetailsList()