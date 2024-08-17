
const productSection = document.querySelector('.product-card');
const productCard = document.querySelectorAll(".product");

// upDateCartPageUI();

let newArray = [];

//Fetching Product card 
function getProduct() {
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then((data) => {
            newArray = data.slice(1, 9);	
            // let newArray = newArray.slice(1,9);
            addProduct()
            console.log(newArray);
        
        })
}

getProductList();

// let index = 0;

//RENDERING Product Card
function addProduct() {
    // let product = "";

    newArray.map(function (productList, index)  {
        // console.log(eachproduct.image);
        let newDiv=document.createElement('div')
        newDiv.setAttribute( 'class', 'd-flex flex-column justify-content-center align-items-center  product')
        let newButton=document.createElement('button')
        newButton.classList.add('button_now')
        newButton.textContent='Add to Cart'

        newButton.addEventListener('click', (e)=>{
            e.stopPropagation()
           addToCart(productList)} //product

        )

    newDiv.innerHTML=`
        <img src="${productList.image}" alt="${productList.category.name}" class="img-joggers" alt="">
        <p class="joggers jogger">${productList.title.slice(0, 25)}</p>
        <p class="joggers"><span id="description">Price: $${productList.price}</span></p>
  
  `
   newDiv.appendChild(newButton)
   newDiv.addEventListener('click',(e)=> viewProduct(productList))
   productSection.appendChild(newDiv)

        // product += 
        //      `<div class="product">
        //              <img src=${eachproduct.images} class="img-joggers" alt="">
        //              <p class="joggers jogger">${eachproduct.title.slice(0, 25)}</p>
                    
        //              <p class="joggers"><span id="description">Price: $${eachproduct.price}</span></p>
                     
                    
                     
                    

        //         </div>`
    })
    // productCard.innerHTML = product
    
    // viewPost()
}

// Add to Cart Function
function addToCart(productList){
    // alert(JSON.stringify(product))
    addProductToCartPage(productList)
    console.log(getCartPage())

}

function viewProduct(productList){

    localStorage.setItem('productListId', productList.id)
    window.location.href="./individual_page.html"

}




// let product = `<div class="d-flex flex-column product">
//                     <img src="./Images/product_1.png" alt="">
//                     <p class="joggers">
//                         Joggers
//                     </p>
//                 </div>`
