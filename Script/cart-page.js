function cartPageInit(){
    localStorage.setItem('cartDetails', [])

}

function getCartPage(){
  let get = localStorage.getItem('cartDetails')
  if(!get){
        cartPageInit()
        return []
    
  }

  return  JSON.parse(get)
}

function addProductToCartPage(productList){
      let productLists = getCartPage()
      productLists.push({productList, count:1})
      console.log(productLists, productList)
    localStorage.setItem('cartDetails', JSON.stringify(productLists) )
    upDateCartPageUI()


}

function removeProductList(productListId){
    let productLists = getCartPage()
    productLists = productLists.filter(item => item.productList.id !== productListId)
    localStorage.setItem('cartDetails', JSON.stringify(productLists))
    upDateCartPageUI()
    getCartPage()
    window.location.reload();

}

// Function to increase product count
function increaseProductCount(productListId){
     let productLists = getCartPage()
    productLists = productLists.map(item => {
        let updatedCart
        if(item.productList.id === productListId){
            //  updatedCart = {...item, count:item.count *1 +1 }
             updatedCart = item.count += 1
            getCartPage()
            window.location.reload();
            return updatedCart

        }
        else {
            return item
        }

       
    })
    localStorage.setItem('cartDetails', JSON.stringify(productLists))
    
}
 
// Function to decrease product count
function decreaseProductCount(productListId){
     let productLists = getCartPage()
    productLists = productLists.map(item => {
        
        if(item.productList.id === productListId){
            return {...item, count:item.count *1 -1 }

        }
        else {
            return item
        }

    })

    productLists = productLists.filter(item => item.count>0)
    localStorage.setItem('cartDetails', JSON.stringify(productLists))
    upDateCartPageUI()
    
}
 
function upDateCartPageUI(){
    let productCount = getCartPage().length
    // let cartInfo = document.querySelectorAll('.cart-info')
    let cartInfo = document.querySelectorAll('.cart')
    console.log(cartInfo)
    cartInfo.forEach(e => {
      e.value = productCount

    })
    
    if(productCount > 0){
    
    }
    

}