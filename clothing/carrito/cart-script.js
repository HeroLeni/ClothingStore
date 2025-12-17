// Quantity controls
document.querySelectorAll('.cart-item').forEach(item => {
    const minusBtn = item.querySelector('.qty-btn.minus');
    const plusBtn = item.querySelector('.qty-btn.plus');
    const qtyInput = item.querySelector('.qty-input');
    const itemPrice = item.querySelector('.item-price');
    const basePrice = parseFloat(itemPrice.textContent.replace('$', ''));

    plusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        currentQty++;
        qtyInput.value = currentQty;
        updateItemPrice(itemPrice, basePrice, currentQty);
        updateOrderSummary();
    });

    minusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
            currentQty--;
            qtyInput.value = currentQty;
            updateItemPrice(itemPrice, basePrice, currentQty);
            updateOrderSummary();
        }
    });
});

// Update item price
function updateItemPrice(priceElement, basePrice, quantity) {
    const newPrice = basePrice * quantity;
    priceElement.textContent = `$${newPrice}`;
}

// Remove item from cart
document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cartItem = e.target.closest('.cart-item');
        cartItem.style.opacity = '0';
        cartItem.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            cartItem.remove();
            updateOrderSummary();
            checkEmptyCart();
        }, 300);
    });
});

// Update order summary
function updateOrderSummary() {
    let subtotal = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
        subtotal += price;
    });

    const discount = subtotal * 0.20;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    document.querySelector('.summary-row:nth-child(1) .value').textContent = `$${subtotal}`;
    document.querySelector('.summary-row.discount .value').textContent = `-$${discount.toFixed(0)}`;
    document.querySelector('.summary-row.total .value').textContent = `$${total}`;
}

// Check if cart is empty
function checkEmptyCart() {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
        document.querySelector('.cart-items').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h3 style="font-size: 24px; margin-bottom: 16px;">Your cart is empty</h3>
                <p style="color: #00000099; margin-bottom: 24px;">Add some items to get started!</p>
                <a href="/" style="display: inline-block; padding: 14px 40px; background: #000; color: #fff; text-decoration: none; border-radius: 62px;">Continue Shopping</a>
            </div>
        `;
        document.querySelector('.order-summary').style.display = 'none';
    }
}

// Apply promo code
document.querySelector('.promo-btn').addEventListener('click', () => {
    const promoInput = document.querySelector('.promo-input');
    const promoCode = promoInput.value.trim().toUpperCase();
    
    if (promoCode === 'SAVE20') {
        alert('Promo code applied successfully! 20% discount added.');
        promoInput.value = '';
    } else if (promoCode === '') {
        alert('Please enter a promo code.');
    } else {
        alert('Invalid promo code. Please try again.');
    }
});

// Checkout button
document.querySelector('.checkout-btn').addEventListener('click', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length > 0) {
        window.location.href = '/checkout';
    } else {
        alert('Your cart is empty!');
    }
});

// Newsletter subscription
document.querySelector('.subscribe-btn').addEventListener('click', () => {
    const emailInput = document.querySelector('.input-wrapper input');
    const email = emailInput.value.trim();
    
    if (email && email.includes('@')) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
