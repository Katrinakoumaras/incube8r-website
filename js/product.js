document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector(".fa-bars");
    const header = document.querySelector(".header");

    if (menuToggle) {
        menuToggle.addEventListener("click", function() {
            header.classList.toggle("open");
        });
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Product added to cart!');
        });
    });

    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    quantitySelectors.forEach(selector => {
        const minusButton = selector.querySelector('button:first-of-type');
        const plusButton = selector.querySelector('button:last-of-type');
        const quantityDisplay = selector.querySelector('span');
        let quantity = parseInt(quantityDisplay.textContent);

        minusButton.addEventListener('click', function() {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });
    })
})

plusButton.addEvent 
