let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product-card');
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));

        // Check if item is already in the cart
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');


        // user.js

// Function to add items to the cart
function addToCart(name, price) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const item = { name, price };
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${name} has been added to your cart.`);
}

// Attach addToCart function to the buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = button.parentElement;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));

        addToCart(productName, productPrice);
    });
});

    });
});
