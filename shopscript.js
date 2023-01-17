let cart = []

function addToCart(titel, price) {
     cart.push({productTitle: titel, productPrice: price, 
     productQuantity: 1 })
     
     console.log(cart)
}