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
            <p>$${item.price.toFixed(2)}</p>
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

// Checkout logic (send items for admin approval)
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        const pendingItems = JSON.parse(localStorage.getItem('pendingItems')) || [];
        // Move current cart to pending approval
        pendingItems.push(...cart);
        localStorage.setItem('pendingItems', JSON.stringify(pendingItems));

        // Clear the cart for the user
        cart = [];
        localStorage.removeItem('cart');
        displayCartItems();

        alert('Your items have been sent for approval. Please wait for admin approval.');
    } else {
        alert('Your cart is empty!');
    }
});

// Initial display of cart items
displayCartItems();
