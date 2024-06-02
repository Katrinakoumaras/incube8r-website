document.addEventListener("DOMContentLoaded", function() {
    const paymentForm = document.getElementById('payment-form');
    const deliveryForm = document.getElementById('delivery-form');
    const payNowButton = document.querySelector('.pay-now-button');

    payNowButton.addEventListener('click', function(event) {
        event.preventDefault();

        // You can add form validation and payment processing logic here
        alert('Payment submiited successfully!')
    });
});