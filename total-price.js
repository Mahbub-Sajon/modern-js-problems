const products = [
    {name: 'Laptop', price:45000, quantity : 3},
    {name: 'Shirt', price: 500, quantity:5},
    {name: 'phone', price:35000, quantity:4}
]
let totalPrice = 0;
for(const product of products){
    productPrice = product.price*product.quantity;
        totalPrice = totalPrice + productPrice;
}
console.log(totalPrice);