// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Add validation classes
    form.classList.add('was-validated');

    // Check validity
    if(form.checkValidity()) {
        // Simulate successful login
        window.location.href = 'menu.html';
    }
}, false);