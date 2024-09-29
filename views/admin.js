// Function to retrieve pending items from localStorage and display them
function displayInventory() {
    const pendingItems = JSON.parse(localStorage.getItem('pendingItems')) || [];
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = ''; // Clear the inventoryDiv before adding new items

    if (pendingItems.length === 0) {
            inventoryDiv.innerHTML = '<p>No items pending approval.</p>';
            return;
        }

        const inventoryList = document.createElement('ul');
        pendingItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Item: ${item.name}, Price: $${item.price.toFixed(2)}, Quantity: ${item.quantity}`;

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
    const pendingItems = JSON.parse(localStorage.getItem('pendingItems')) || [];
    const approvedItem = pendingItems[index]; // Get the approved item

    // Remove the approved item from the pending items list
    pendingItems.splice(index, 1);
    localStorage.setItem('pendingItems', JSON.stringify(pendingItems)); // Update localStorage

    // You can extend this to mark the item as approved and notify the user
    alert(`Item "${approvedItem.name}" has been approved and is ready for checkout!`);

    displayInventory(); // Refresh the inventory display
}

// Call the displayInventory function when the page loads
window.onload = displayInventory;
