// Tab functionality
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Quantity selector
document.querySelector('.qty-btn.plus').addEventListener('click', () => {
    const input = document.querySelector('.qty-input');
    input.value = parseInt(input.value) + 1;
});

document.querySelector('.qty-btn.minus').addEventListener('click', () => {
    const input = document.querySelector('.qty-input');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
});

// Thumbnail gallery
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        document.querySelector('.main-image img').src = e.target.src.replace('w=100&h=120', 'w=600&h=700');
    });
});

// Color selector
document.querySelectorAll('.color-option').forEach(color => {
    color.addEventListener('click', (e) => {
        document.querySelectorAll('.color-option').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Size selector
document.querySelectorAll('.size-option').forEach(size => {
    size.addEventListener('click', (e) => {
        document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Add to cart
document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
    alert('Product added to cart!');
});
