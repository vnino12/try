let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display the cart items on the page
function displayCartItems() {
    const cartItemsDiv = document.querySelector('.cart-items');
    const totalPriceSpan = document.getElementById('total-price');

    cartItemsDiv.innerHTML = ''; // Clear current cart items
    let total = 0;

    cart.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <input type="number" value="${item.quantity}" min="1" class="item-quantity" data-index="${index}">
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(div);
        total += item.price * item.quantity;
    });

    totalPriceSpan.textContent = `$${total.toFixed(2)}`;
}

// Update cart quantity or remove item
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('item-quantity')) {
        const index = e.target.dataset.index;
        const newQuantity = parseInt(e.target.value);
        cart[index].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1); // Remove item from cart
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
});

// Checkout
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout!');
        localStorage.removeItem('cart'); // Clear cart after checkout
        cart = [];
        displayCartItems();
    } else {
        alert('Your cart is empty!');
    }
});

// Initial display of cart items
displayCartItems();
