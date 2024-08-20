/* Project - CHECKED PROPERTY */

document.getElementById('mySubmit').addEventListener('click', function() {
        const isSubscribed = document.getElementById('myCheckBox').checked;
        const paymentMethod = document.querySelector('input[name="card"]:checked');
    
        const subResult = document.getElementById('subResult');
        const paymentResult = document.getElementById('paymentResult');
    
        // Check subscription status
        if (isSubscribed) {
            subResult.textContent = 'You are subscribed!';
        } else {
            subResult.textContent = 'You are not subscribed.';
        }
    
        // Check payment method
        if (paymentMethod) {
            paymentResult.textContent = 'Selected payment method: ' + paymentMethod.nextElementSibling.textContent;
        } else {
            paymentResult.textContent = 'No payment method selected.';
        }
    });