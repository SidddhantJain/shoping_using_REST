// scripts/shop.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display products
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-details">
                        <h4>${product.name}</h4>
                        <p>$${product.price}</p>
                        <button data-id="${product.id}">Add to Cart</button>
                    </div>
                `;
                productList.appendChild(productDiv);
            });
        });

    // Handle add to cart
    document.getElementById('product-list').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const productId = event.target.getAttribute('data-id');
            // Add to cart logic here
        }
    });

    // Handle checkout
    document.getElementById('checkoutButton').addEventListener('click', () => {
        // Checkout logic here
    });
});
