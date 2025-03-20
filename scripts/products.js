const productDataLoad = () => {
  fetch('product.json')
    .then(res => res.json())
    .then(data => showProducts(data))

}


const showProducts = (products) => {


  const productShow = document.getElementById('product-show')
  productShow.innerHTML = ``

  products.forEach(product => {
    const cardDiv = document.createElement('div')


    cardDiv.innerHTML = `
    <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
    class='h-[200px]'
      src=${product.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${product.name}</h2>
    <p>${product.price} Tk</p>
    <div class="card-actions justify-end">
      <button onClick='addToCart(${JSON.stringify(
      {
        name: product.name,
        price: product.price,
        image: product.image
      }
    )})' class="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    `

    productShow.appendChild(cardDiv)
  });

}



const cart = [];

const addToCart = (product) => {
  const cartShow = document.getElementById('cart-show')
  const subBalance = document.getElementById('sum-balance')
  let numberOfBalance = parseInt(subBalance.innerText)


  if (numberOfBalance + product.price > 25000) {
    alert('limited cart')
    return
  }

  numberOfBalance += product.price

  cart.push(product);

  subBalance.innerText = numberOfBalance

  const div = document.createElement('div')

  div.classList = 'my-3'

 

  div.innerHTML = `
       <div class="flex items-center justify-center gap-3 border px-3 py-2">
          <div>
            <img class="w-[40px]" src=${product.image} alt="">
          </div>
          <div>
            <h2 class="font-bold">${product.name}</h2>
            <h2 class="font-bold">${product.price}</h2>
          </div>
      </div>
   `

  cartShow.appendChild(div)

}




document.getElementById("order-now-btn").addEventListener("click", function () {




  if (cart.length === 0) {
    alert('No products in the cart!');
  }

  else {
    document.getElementById('cart-show').innerHTML = ''
    document.getElementById('sum-balance').innerHTML = 0

    alert('Order placed successfully!');
  }

})



productDataLoad()



