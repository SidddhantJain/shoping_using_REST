// scripts/admin.js

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];

    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productImage = document.getElementById('productImage').value;

        const response = await fetch('/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: productName,
                price: productPrice,
                image: productImage,
            }),
        });

        const result = await response.json();
        if (result.success) {
            // Reload products
            loadProducts();
        } else {
            alert(result.message);
        }
    });

    const loadProducts = async () => {
        const response = await fetch('/api/products');
        const data = await response.json();
        productTable.innerHTML = '';
        data.products.forEach(product => {
            const row = productTable.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td><img src="${product.image}" alt="${product.name}" width="100"></td>
                <td><button class="edit-product" data-id="${product.id}">Edit</button></td>
                <td><button class="delete-product" data-id="${product.id}">Delete</button></td>
            `;
        });
    };

    loadProducts();

    productTable.addEventListener('click', async (event) => {
        if (event.target.classList.contains('delete-product')) {
            const productId = event.target.getAttribute('data-id');
            const response = await fetch(`/api/products/${productId}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            if (result.success) {
                // Reload products
                loadProducts();
            } else {
                alert(result.message);
            }
        }
    });

    document.getElementById('load-users').addEventListener('click', async () => {
        const response = await fetch('/api/users');
        const data = await response.json();
        const usersTable = document.getElementById('users-table').getElementsByTagName('tbody')[0];
        usersTable.innerHTML = '';
        data.users.forEach(user => {
            const row = usersTable.insertRow();
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>${user.contact}</td>
                <td><button class="delete-user" data-id="${user.id}">Delete</button></td>
            `;
        });
    });

    document.getElementById('users-table').addEventListener('click', async (event) => {
        if (event.target.classList.contains('delete-user')) {
            const userId = event.target.getAttribute('data-id');
            const response = await fetch(`/api/users/${userId}`, {
                method: 'DELETE',
            });

            const result = await response.json();
            if (result.success) {
                // Reload users
                document.getElementById('load-users').click();
            } else {
                alert(result.message);
            }
        }
    });
});
