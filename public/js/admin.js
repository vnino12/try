// admin.js

// Function to retrieve cart items from localStorage and display them
function displayInventory() {
    const inventory = JSON.parse(localStorage.getItem('cartItems')) || [];
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = ''; // Clear the inventoryDiv before adding new items

    if (inventory.length === 0) {
        inventoryDiv.innerHTML = '<p>No items in inventory.</p>';
        return;
    }

    const inventoryList = document.createElement('ul');
    inventory.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Item: ${item.name}, Price: $${item.price.toFixed(2)}`;

        // Create Approve button
        const approveButton = document.createElement('button');
        approveButton.textContent = 'Approve';
        approveButton.onclick = () => approveItem(index); // Call approveItem on click

        listItem.appendChild(approveButton);
        inventoryList.appendChild(listItem);
    });

    inventoryDiv.appendChild(inventoryList);
}

// Function to approve an item
function approveItem(index) {
    const inventory = JSON.parse(localStorage.getItem('cartItems')) || [];
    const approvedItem = inventory[index]; // Get the approved item
    inventory.splice(index, 1); // Remove the approved item from the inventory
    localStorage.setItem('cartItems', JSON.stringify(inventory)); // Update localStorage

    // Display confirmation message
    alert(`Item "${approvedItem.name}" has been approved!`);

    displayInventory(); // Refresh the inventory display
}

// Call the displayInventory function when the page loads
window.onload = displayInventory;
