document.addEventListener("DOMContentLoaded", function() {
    const increaseQuantityButtons = document.querySelectorAll('.increase-quantity');
    const decreaseQuantityButtons = document.querySelectorAll('.decrease-quantity');
    const removeItemButtons = document.querySelectorAll('.remove-item');

    increaseQuantityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityDisplay = button.previousElementSibling;
            let quantity = parseInt(quantityDisplay.textContent);
            quantity++;
            quantityDisplay.textContent = quantity;
            updateCartTotal();
        });
    });

    decreaseQuantityButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityDisplay = button.nextElementSibling;
            let quantity = parseInt(quantityDisplay.textContent);
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
                updateCartTotal();
            }
        });
    });

    removeItemButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = button.parentElement;
            item.remove();
            updateCartTotal();
        });
    });

    function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseInt(item.querySelector('.item-details p').textContent.replace('$',''))
            const quantity = parseInt(item.querySelector('.quantity-selector span').textContent);
            total += price * quantity;
        });

        document.querySelector('.summary-item.total span:last-child').textContent = `$${total+9.80}`;
        document.querySelector('.summary-item:nth-child(1) span:last-child').textContent = `$${total}`;
    }

    document.querySelector('.checkout-button').addEventListener('click', function() {
        alert('Proceeding to checkout');
    });
})