// scripts/auth.js

document.addEventListener('DOMContentLoaded', () => {
    const roleSelect = document.getElementById('role');
    const adminKeyContainer = document.getElementById('adminKeyContainer');
    
    roleSelect.addEventListener('change', () => {
        if (roleSelect.value === 'admin') {
            adminKeyContainer.classList.remove('hidden');
        } else {
            adminKeyContainer.classList.add('hidden');
        }
    });

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const username = document.getElementById('newUsername').value;
        const password = document.getElementById('newPassword').value;
        const role = document.getElementById('role').value;
        const adminKey = role === 'admin' ? document.getElementById('adminKey').value : '';

        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                role,
                adminKey
            }),
        });

        const result = await response.json();
        if (result.success) {
            window.location.href = 'index.html'; // Redirect to login page or home
        } else {
            alert(result.message);
        }
    });
});
